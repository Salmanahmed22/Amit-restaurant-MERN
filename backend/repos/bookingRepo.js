const Booking = require('../models/Booking');

const createBooking = async (booking) => {
    try{
        const newBooking = new Booking(booking);
        return await newBooking.save();
    }catch(err){
        throw new Error(err.message);
    }
}

const getAllPendingBookings = async () => {
    try{
        return await Booking.find({status: "pending"});
    }catch(err){
        throw new Error(err.message);
    }
}

const updateBookingStatus = async (id, status) => {
    try{
        return await Booking.findByIdAndUpdate(id, status, {new: true});
    }catch(err){
        throw new Error(err.message);
    }
}



module.exports = { createBooking , updateBookingStatus, getAllPendingBookings }