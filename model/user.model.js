const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        email: {
            type: String,
            require: true,
        },
        password: {
            type: String,
            require: true,
        },
    },
    { timestamp: true }
);

const userModel = mongoose.model("user", userSchema);
module.exports = userModel;
