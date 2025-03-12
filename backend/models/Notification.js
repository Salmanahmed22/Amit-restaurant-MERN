const mongoose = require('mongoose');

const notificationsSchema = mongoose.Schema({
    message: {
        type: String,
    },
    seen: {
        type: Boolean,
        default: false
    },
    time: {
        type: String,
        default: Date.now,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Notification', notificationsSchema);