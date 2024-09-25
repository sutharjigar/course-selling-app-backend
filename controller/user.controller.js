const { default: mongoose } = require('mongoose');
const { JWT_USER_PASSWORD } = require('../config/config');
const { constants } = require('../config/constants');
const { userModel } = require('../model');
const bcrypt = require('bcrypt');
const userController = {};

userController.createUser = async (req, res) => {
  const {
    name,
    email,
    password,
    courseId: [],
  } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.status(200).json({ msg: 'Taken email change the email!' });
    }
    const hashedPassword = await bcrypt.hash(password, constants.SALT_ROUND);

    await userModel.create({ name, password: hashedPassword, email, courseId });

    return res.status(200).json({ msg: 'Done! User created Successfully!!' });
  } catch (error) {
    return res.status(500).json({ msg: 'User Creation Error:!!', error });
  }
};

userController.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email }).lean();
    if (!user) {
      return res
        .status(200)
        .json({ msg: `Can not find any User with this email:${email}!!` });
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) {
      return res.status(404).json({ msg: 'Wrong Email and Password!!' });
    }
    const token = jwt.sign({ id: user._id }, JWT_USER_PASSWORD);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(500).json({ msg: 'User signIn Error: ', error });
  }
};

userController.getUserDetail = async (req, res) => {
  try {
    const id = req.userId;
    const user = await userModel
      .findOne({ _id: new mongoose.Types.ObjectId(`${id}`) })
      .lean();
    return res.status(200).json({ data: user });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: 'Internal Server (get User Detail) Error:', error });
  }
};

userController.getMyCourses = async (req, res) => {
  const id = req.userId;
  try {
    const courses = (
      await userModel
        .findOne({ _id: new mongoose.Types.ObjectId(`${id}`) })
        .populate('courseId')
        .lean()
    ).map((user) => user.courseId);
    return res.status(200).json({ data: courses });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: 'Internal Server (get My Courses) Error:', error });
  }
};

userController.updateUserProfile = async (req, res) => {
  const id = req.userId;
  const { name, email, password } = req.body;
  try {
    const user = await userModel.updateOne(
      { _id: new mongoose.Types.ObjectId(`${id}`) },
      { name, email, password }
    );
    return res.status(200).json({ msg: 'User is Updated!!', user });
  } catch (error) {
    return res
      .status(500)
      .json({ msg: 'Internal Server (update user profile) Error: ', error });
  }
};

module.exports = userController;
