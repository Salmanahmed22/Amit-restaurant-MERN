const bookingRepo = require('../repos/bookingRepo');

const createBooking = async (booking) => {
    try{
        const newBooking = await bookingRepo.createBooking(booking);
        return newBooking;
    }catch(err){
        throw new Error(err.message);
    }
}

const updateBookingStatus = async (id, status) => {
    try{
        const newookingStatus = await bookingRepo.updateBookingStatus(id, status);
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