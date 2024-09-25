const courseController = {};

courseController.getAllCourses = async (req, res) => {
  return res.status(200).json({ msg: 'Done!!' });
};
courseController.createCourse = async (req, res) => {
  return res.status(200).json({ msg: 'Done!!' });
};
courseController.updateUserProfile = async (req, res) => {
  return res.status(200).json({ msg: 'Done!!' });
};
courseController.getAllUsersCourses = async (req, res) => {
  return res.status(200).json({ msg: 'Done!!' });
};

module.exports = courseController;
