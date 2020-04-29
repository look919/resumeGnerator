const express = require('express');
const resumeController = require('./../controllers/resumeController');
const authController = require('./../controllers/authController');

const router = express.Router();

router
  .route('/:id')
  .get(resumeController.getResume)
  .delete(resumeController.deleteResume)
  .patch(resumeController.updateResume);

//RESTRICTED TO ADMIN
router.use(authController.restrictTo('admin'));

router.route('/').get(resumeController.getAllResumes);
router
  .route('/:id')
  .get(resumeController.getResume)
  .delete(resumeController.deleteResume)
  .patch(resumeController.updateResume);

module.exports = router;
