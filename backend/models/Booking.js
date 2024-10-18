const mongoose = require('mongoose');   

const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    capacity: {
      type: String,
      enum: ["1", "2","3", "4", "+5" ],
      required: true  
    },
    tableNumber: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["pending", "rejected", "accepted"],
        required: true
    },
});

module.exports = mongoose.model('Booking', bookingSchema);