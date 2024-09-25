const { Router } = require("express");
const { courseController, adminController } = require("../controller");
const { courseValidators } = require("../validation");
const { validate } = require("../middleware/validate");
const adminRouter = Router();

// admin
adminRouter.get("/", adminController.getAllCourses);
adminRouter.post("/create-course", validate(courseValidators.createCourse), adminController.createCourse);
adminRouter.put("/update-course", validate(courseValidators.updateCourse), adminController.updateCourse);
adminRouter.delete("/delete-course", validate(courseValidators.deleteCourse), adminController.deleteCourse);

// user
adminRouter.get("/all", courseController.getAllUsersCourses);

module.exports = adminRouter;