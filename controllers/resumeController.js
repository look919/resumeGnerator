const Resume = require('./../models/resumeModel');
const factory = require('./handlerFactory');

exports.createResume = factory.createOne(Resume);
exports.getAllResumes = factory.getAll(Resume);
exports.getResume = factory.getOne(Resume);
exports.updateResume = factory.updateOne(Resume);
exports.deleteResume = factory.deleteOne(Resume);
