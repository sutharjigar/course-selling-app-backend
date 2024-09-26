const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    courseId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'course',
      },
    ],
  },
  { timestamps: true }
);

const adminModel = mongoose.model('admin', adminSchema);
module.exports = adminModel;
