const mongoose = require("mongoose");

const plantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        maxLength:[100, "Name cannot exceed 100 characters"],
    },
    price: {
        type: Number,
        required: true,
        maxLength: [10, "Price cannot exceed 10 digits"]

    },
    categories: {
        type: [String],
        required: true,
        validate : [
            function (value){
                return value.length <= 10
            },
            "Categories cannot exceed 10"
        ]
    },
    available: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model("Plant", plantSchema);