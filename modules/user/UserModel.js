const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: false,
        },
        address: {
            type: String,
            required: false,
        },
        country: {
            type: String,
            required: false,
        },
        city: {
            type: String,
            required: false,
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        phone: {
            type: String,
            required: false,
        },
        role: {
            type: String,
            enum: ['seller', 'buyer'],
            default: 'seller'
        },
        password: {
            type: String,
            required: false,
        },
        verified: {
            type: String,
            enum: ['true', 'false'],
            default: false
        },

        createWith: {
            type: String,
            required: false
        }
    },
    {
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
