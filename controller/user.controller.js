const userController = {};

userController.createUser = async (req, res) => {
  return res.status(200).json({ msg: 'Done!' });
};

userController.getUsers = async (req, res) => {
  return res.status(200).json({ msg: 'Done!!' });
};
userController.updateUserProfile = async (req, res) => {
  return res.status(200).json({ msg: 'Done!!' });
};

module.exports = userController;
