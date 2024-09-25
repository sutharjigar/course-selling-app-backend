const { Router } = require("express");
const { userController } = require("../controller");

const userRouter = Router();

userRouter.post("/create", userController.createUser);
userRouter.get("/", userController.getUsers);
userRouter.put("/update", userController.updateUserProfile);

module.exports = userRouter;
