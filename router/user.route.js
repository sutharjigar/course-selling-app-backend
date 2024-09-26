const { Router } = require('express');
const { userController } = require('../controller');
const { validate } = require('../middleware/validate');
const { userValidators } = require('../validation/user.validate');
const { userMiddleware } = require('../middleware/auth');

const userRouter = Router();

userRouter.post(
  '/signUp',
  validate(userValidators.createUser),
  userController.createUser
);
userRouter.post(
  '/signIn',
  validate(userValidators.signIn),
  userController.signIn
);
userRouter.get('/details', userMiddleware, userController.getUserDetail);
userRouter.get('/courses', userMiddleware, userController.getMyCourses);
userRouter.put(
  '/update',
  userMiddleware,
  validate(userValidators.updateUser),
  userController.updateUserProfile
);
userRouter.post('/purchase', userMiddleware, userController.purchaseCourse);
userRouter.get(
  '/user-purchases',
  userMiddleware,
  userController.getUserPurchases
);

module.exports = userRouter;
