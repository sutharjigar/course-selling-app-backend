const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
        },
        duration: {
            type: Number,
        },
        price: {
            type: Number,
            require: true,
        },
        imageUrl: {
            type: String,
            require: true
        },
        adminId: {
            type: 'ObjectId',
            ref: "admins",
        },
    },
    { timestamp: true }
);

const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;
