const mongoose = require('mongoose');
const { MONGO_URL } = require('./config');

mongoose.connect(MONGO_URL).then(function (data) {
    console.log("Done");
}, function (err) {
    console.log("connection is not done");
    console.log(err);
});