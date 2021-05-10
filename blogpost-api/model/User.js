const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
    user_name : {
        type: String,
        required: true,
        min: 3
    },
    user_email: {
        type: String,
        required: true
    },
    user_password: {
        type: String,
        required: true,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;