const { Router } = require('express');
const { courseController, adminController } = require('../controller');
const { validate } = require('../middleware/validate');
const { courseValidators } = require('../validation/course.validate');
const { adminMiddleware } = require('../middleware/auth');
const { adminValidators } = require('../validation/admin.validate');
const adminRouter = Router();

// admin
adminRouter.post(
  '/signUp',
  validate(adminValidators.signUp),
  adminController.createAdmin
);
adminRouter.post(
  '/signIn',
  validate(adminValidators.signIn),
  adminController.adminSignIn
);
adminRouter.get('/', adminMiddleware, adminController.getAllCourses);
adminRouter.get('/all-users', adminMiddleware, adminController.getAllUsersInfo);
adminRouter.post(
  '/create-course',
  adminMiddleware,
  validate(courseValidators.createCourse),
  adminController.createCourse
);
adminRouter.put(
  '/update-course',
  adminMiddleware,
  validate(courseValidators.updateCourse),
  adminController.updateCourse
);
adminRouter.delete(
  '/delete-course',
  adminMiddleware,
  validate(courseValidators.deleteCourse),
  adminController.deleteCourse
);

// user

module.exports = adminRouter;
