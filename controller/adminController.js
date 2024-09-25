const { default: mongoose } = require('mongoose');
const { constants } = require('../config/constants');
const { courseModel, userModel, adminModel } = require('../model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_ADMIN_PASSWORD } = require('../config/config');
const adminController = {};

adminController.getAllUsers = async (req, res) => {
  const users = await userModel.find({}).lean();
  return res.status(200).json({ data: users });
};

adminController.createAdmin = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const admin = await adminModel.findOne({ email });
    if (admin) {
      return res.status(200).json({ msg: 'Taken email change the email!' });
    }
    const encryptedPass = await bcrypt.hash(password, constants.SALT_ROUND);
    await adminModel.create({
      name,
      email,
      password: encryptedPass,
      courseId: [],
    });
    return res.status(200).json({ msg: 'Admin is created!!' });
  } catch (error) {
    return res.status(500).json({ msg: 'Creating Admin Error!!', error });
  }
};

adminController.adminSignIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await adminModel.findOne({ email }).lean();
    if (!admin) {
      return res.status(404).json({ msg: 'Admin not found!!' });
    }
    const comparePass = await bcrypt.compare(password, admin.password);
    if (!comparePass) {
      return res.status(404).json({ msg: 'Wrong Password!!' });
    }
    const token = jwt.sign({ id: admin._id }, JWT_ADMIN_PASSWORD);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal server Error:', error });
  }
};

adminController.createCourse = async (req, res) => {
  const { title, description, duration, price, adminId, imageUrl } = req.body;
  try {
    await courseModel.create({
      title,
      description,
      duration,
      price,
      adminId: new mongoose.Types.ObjectId(`${adminId}`),
      imageUrl,
    });
    return res.status(200).json({ msg: 'Course created!!' });
  } catch (error) {
    return res.status(500).json({ msg: 'Creating course Error: ', error });
  }
};

adminController.getAllCourses = async (req, res) => {
  try {
    const courses = await courseModel.find({}).populate('adminId').lean();
    return res.status(200).json({ data: courses });
  } catch (error) {
    return res.status(500).json({ msg: 'Getting All course Error: ', error });
  }
};

adminController.getAllUsersInfo = async (req, res) => {
  try {
    const users = await userModel.find({}).lean();
    return res.status(200).json({ data: users });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: 'Fetching Users details Error: ', error });
  }
};

adminController.updateCourse = async (req, res) => {
  const { title, description, duration, price, imageUrl, courseId } = req.body;

  try {
    await courseModel.update(
      { _id: new mongoose.Types.ObjectId(`${courseId}`) },
      { title, description, duration, price, imageUrl }
    );
  } catch (error) {
    return res.status(500).json({ msg: 'Updating course Error: ', error });
  }
};

adminController.deleteCourse = async (req, res) => {
  const { courseId } = req.query;
  try {
    const course = await courseModel.findOne({
      _id: new mongoose.Types.ObjectId(`${courseId}`),
    });
    if (!course) {
      return res.status(200).json({ msg: "Can't get any course with this id" });
    }
    await courseModel.deleteOne({
      _id: new mongoose.Types.ObjectId(`${courseId}`),
    });
    return res.status(200).json({ msg: 'Course is deleted' });
  } catch (error) {
    return res.status(500).json({ msg: 'Deleting course Error: ', error });
  }
};

module.exports = adminController;
