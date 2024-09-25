const mongoose = require("mongoose");

const adminSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
        courseId: {
            type: 'ObjectId',
            ref: "courses",
        },
    },
    { timestamp: true }
);

const adminModel = mongoose.model("admin", adminSchema);
module.exports = adminModel;
