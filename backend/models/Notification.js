const mongoose = require('mongoose');

const notificationsSchema = mongoose.Schema({
    massage: {
        type: String,
    },
    isRead: {
        type: Boolean,
        default: false
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
});

module.exports = mongoose.model('Notification', notificationsSchema);