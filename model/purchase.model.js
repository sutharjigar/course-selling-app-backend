const { default: mongoose } = require('mongoose');

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.ObjectId,
      ref: 'user',
    },
    courseId: {
      type: mongoose.ObjectId,
      ref: 'course',
    },
  },
  { timestamps: true }
);

const purchaseModel = mongoose.model('purchase', purchaseSchema);
module.exports = purchaseModel;
