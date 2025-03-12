const bookingRepo = require('../repos/bookingRepo');
const userRepo = require('../repos/userRepo');
const notificationServices = require('./notificationServices');

const createBooking = async (booking) => {
    try{
        const newBooking = await bookingRepo.createBooking(booking);
        const user = await userRepo.findUserById(booking.userId);
        user.bookings.push(newBooking._id);        
        userRepo.updateUser(user._id, user);
        return newBooking;
    }catch(err){
        throw new Error(err.message);
    }
}

const updateBookingStatus = async (id, status) => {
    try{
        const newookingStatus = await bookingRepo.updateBookingStatus(id, status);
        const notification = {
            userId: newookingStatus.userId,
             message: `Your booking at day: ${newookingStatus.date}, time: ${newookingStatus.time} has been ${newookingStatus.status}`
            }
        const newNotification = await notificationServices.createNotification(notification);
        return newookingStatus;
    }catch(err){
        throw new Error(err.message);
    }
}

const getAllPendingBookings = async () => {
    try {
        const pendingBookings = await bookingRepo.getAllPendingBookings();
        return pendingBookings;
    } catch (error) {
        throw new Error(error.message);
    }
}

const getAllUserBookings = async (id) => {
    try {
        const userBookings = await bookingRepo.getAllUserBookings(id);
        return userBookings;
    } catch (error) {
        throw new Error(error.message);
    }
}

module.exports = { createBooking, updateBookingStatus, getAllPendingBookings, getAllUserBookings }