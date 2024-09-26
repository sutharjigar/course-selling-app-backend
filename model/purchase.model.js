const { default: mongoose } = require('mongoose');

const purchaseSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    },
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'course',
    },
  },
  { timestamps: true }
);

const purchaseModel = mongoose.model('purchase', purchaseSchema);
module.exports = purchaseModel;
