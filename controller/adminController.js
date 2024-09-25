const { default: mongoose } = require("mongoose");
const { courseModel } = require("../model");

const adminController = {};

adminController.createCourse = async (req, res) => {
    const { title, description, duration, price, adminId, imageUrl } = req.body;
    try {
        await courseModel.create({
            title,
            description,
            duration,
            price,
            adminId: new mongoose.Types.ObjectId(adminId),
            imageUrl,
        });
        return res.status(200).json({ msg: "Course created!!" })
    } catch (error) {
        return res.status(500).json({ msg: "Creating course Error: ", error });
    }
};

adminController.getAllCourses = async (req, res) => {
    try {
        const courses = await courseModel.find({}).populate("agentId").lean();
        return res.status(200).json({ data: courses });
    } catch (error) {
        return res.status(500).json({ msg: "Getting All course Error: ", error });
    }
};

adminController.updateCourse = async (req, res) => {
    const { title, description, duration, price, imageUrl, courseId } = req.body;

    try {
        await courseModel.update(
            { _id: new mongoose.Types.ObjectId(courseId) },
            { title, description, duration, price, imageUrl }
        );
    } catch (error) {
        return res.status(500).json({ msg: "Updating course Error: ", error });
    }
};

adminController.deleteCourse = async (req, res) => {
    const { courseId } = req.query;
    try {
        const course = await courseModel.findOne({ _id: new mongoose.Types.ObjectId(courseId) })
        if (!course) {
            return res.status(200).json({ msg: "Can't get any course with this id" })
        }
        await courseModel.deleteOne({ _id: new mongoose.Types.ObjectId(courseId) })
        return res.status(200).json({ msg: "Course is deleted" })
    } catch (error) {
        return res.status(500).json({ msg: "Deleting course Error: ", error })
    }
}


module.exports = adminController;
