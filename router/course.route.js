const { Router } = require("express");
const { courseController } = require("../controller");
const { courseValidators } = require("../validation");
const { validate } = require("../middleware/validate");
const courseRouter = Router();

// admin
courseRouter.get("/", courseController.getAllCourses);
courseRouter.post("/create", validate(courseValidators.createCourse), courseController.createCourse);
courseRouter.put("/update", courseController.updateUserProfile);

// user
courseRouter.get("/all", courseController.getAllUsersCourses);

module.exports = courseRouter;