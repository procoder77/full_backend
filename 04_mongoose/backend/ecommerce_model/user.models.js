const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {timestamps: true});

// timestamps: true adds createdAt and updatedAt fields to the schema

export const User = mongoose.model('User', userSchema);