const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    courseId: [{ type: mongoose.ObjectId, ref: 'course' }],
  },
  { timestamps: true }
);

const userModel = mongoose.model('user', userSchema);
module.exports = userModel;
