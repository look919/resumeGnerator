const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: [true, 'This email is already taken'],
    lowercase: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'password confirm is required'],
    validate: {
      validator: function (el) {
        return el === this.password;
      },
      message: 'Passwords are not the same',
    },
  },
  //resume fields
  //general
  name: {
    type: String,
    default: 'User name',
  },
  profession: {
    type: String,
    default: 'Full stack developer',
  },
  phone: {
    type: String,
    default: '+48 123 456 789',
  },
  emailField: {
    type: String,
    default: 'myEmail@email.com',
  },
  website: {
    type: String,
    default: 'www.myWebsite.com',
  },
  address: {
    type: String,
    default: 'Poland, Warsaw',
  },
  summary: {
    type: String,
    default:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id euismod est. Nunc et luctus magna. Sed pellentesque ut metus scelerisque mattis. Proin massa diam, mattis.',
  },
  company: {
    type: String,
    default: 'CompanyName',
  },
  photo: {
    type: String,
    default: 'default.jpg',
  },
  //education
  languages: {
    type: [
      {
        lang: String,
        level: Number,
      },
    ],
    default: [
      { lang: 'English', level: 2 },
      { lang: 'French', level: 1 },
    ],
  },
  education: {
    type: [
      {
        speciality: String,
        school: String,
        startDate: String,
        endDate: String,
      },
    ],
    default: [
      {
        speciality: 'Computer Sience',
        school: 'University X',
        startDate: '2016-10',
        endDate: '2020-02',
      },
      {
        speciality: 'IT specialist',
        school: 'High School Y',
        startDate: '2012-09',
        endDate: '2016-05',
      },
    ],
  },
  certification: {
    type: [String],
    default: ['Certificate X', 'Certificate Y'],
  },
  //skills
  skills: {
    type: [String],
    default: [],
  },
  //projects
  projects: {
    type: [
      {
        name: String,
        url: String,
        description: String,
      },
    ],
    default: [
      {
        name: 'Project nr 1',
        url: 'www.myproject.com',
        description:
          'Fusce vitae blandit velit, nec ultrices mauris. Donec nunc sem, ornare sit amet euismod sed, porttitor et purus. Nullam sollicitudin erat dui, vitae dapibus sem eleifend et.',
      },
      {
        name: 'Project nr 2',
        url: 'www.myproject.com',
        description:
          'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aenean tempus nibh ut commodo fermentum.',
      },
      {
        name: 'Project nr 3',
        url: 'www.myproject.com',
        description:
          'Etiam id gravida eros, sit amet porttitor ipsum. Ut magna nunc, aliquet eget mollis quis, fermentum sed turpis.',
      },
    ],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  passwordChangedAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
});

userSchema.pre('save', async function (next) {
  // Runs only when password gets modified
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});
userSchema.pre('save', function (next) {
  if (!this.isModified('password') || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;

  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};
userSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );
    return JWTTimestamp < changedTimestamp;
  }
  return false;
};
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 30 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model('User', userSchema);
module.exports = User;
