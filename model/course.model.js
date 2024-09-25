const mongoose = require("mongoose");


const courseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        duration: {
            type: Number,
        },
        price: {
            type: Number,
            required: true,
        },
        imageUrl: {
            type: String,
            required: true
        },
        adminId: {
            type: mongoose.ObjectId,
            ref: "admin",
        },
    },
    { timestamps: true }
);

const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;
