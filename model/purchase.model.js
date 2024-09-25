const { default: mongoose } = require("mongoose");

const purchaseSchema = new mongoose.Schema({
    userId: {
        type: 'ObjectId',
        ref: "users",
    },
    courseId: {
        type: 'ObjectId',
        ref: "courses",
    },
});

const purchaseModel = mongoose.model("purchase", purchaseSchema);
module.exports = purchaseModel;
