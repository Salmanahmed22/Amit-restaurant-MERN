"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Loading from "@/app/loading";
import toast, { Toaster } from "react-hot-toast";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get("http://localhost:5000/api/bookings/", {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });
        setBookings(response.data.data.bookings);
      } catch (error) {
        throw new Error(error.message);
      } finally {
        setTimeout(() => setIsLoading(false), 500);
      }
    };
    fetchBookings();
  }, []);

  const handleBookingStatus = async (bookingId, status) => {
    try {
      await axios.put(
        `http://localhost:5000/api/bookings/${bookingId}`,
        { status },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      status === "accepted"
        ? toast.success("Booking accepted")
        : toast.error("Booking rejected");

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  if (isLoading) return <Loading />;

  return (
    <div>
      <Toaster />
      <div className="flex flex-col items-center justify-center w-full h-auto bg-gray-100 p-4 gap-2">
        <h2 className="text-xl font-semibold text-gray-800 text-center">
          My Bookings
        </h2>

        <div className="h-full w-full max-w-6xl bg-white flex flex-col p-4 rounded-md shadow-md">
          {/* Desktop Table */}
          <div className="hidden md:block">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2">
                  <th className="px-4 py-2 text-left">Personal Info</th>
                  <th className="px-4 py-2 text-left">Date & Time</th>
                  <th className="px-4 py-2 text-left">Table Capacity</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {bookings.length > 0 ? (
                  bookings.map((booking, index) => (
                    <tr key={index} className="border-b">
                      <td className="px-4 py-2">
                        <div>
                          <h1>{booking.name}</h1>
                          <p>{booking.email}</p>
                          <p>{booking.phone}</p>
                        </div>
                      </td>
                      <td className="px-4 py-2">
                        <p>{booking.date}</p>
                        <p>{booking.time}</p>
                      </td>
                      <td className="px-4 py-2">{booking.capacity}</td>
                      <td className="px-4 py-2">
                        <div className="flex gap-2">
                          <button
                            onClick={() =>
                              handleBookingStatus(booking._id, "accepted")
                            }
                            className="w-[100px] py-2 bg-[#22c622] text-white rounded-[12px] hover:bg-[#32b732] transition"
                          >
                            Accept
                          </button>
                          <button
                            onClick={() =>
                              handleBookingStatus(booking._id, "rejected")
                            }
                            className="w-[100px] py-2 bg-[#c6131b] text-white rounded-[12px] hover:bg-[#8B2C34] transition"
                          >
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="text-center py-4">
                      No bookings found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Mobile Stacked View */}
          <div className="block md:hidden space-y-4">
            {bookings.length > 0 ? (
              bookings.map((booking, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 flex flex-col bg-gray-50"
                >
                  <div className="mb-2">
                    <h3 className="font-semibold">Personal Info</h3>
                    <p>{booking.name}</p>
                    <p>{booking.email}</p>
                    <p>{booking.phone}</p>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">Date & Time</h3>
                    <p>{booking.date}</p>
                    <p>{booking.time}</p>
                  </div>
                  <div className="mb-2">
                    <h3 className="font-semibold">Table Capacity</h3>
                    <p>{booking.capacity}</p>
                  </div>
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() =>
                        handleBookingStatus(booking._id, "accepted")
                      }
                      className="flex-1 py-2 bg-[#22c622] text-white rounded-[12px] hover:bg-[#32b732] transition"
                    >
                      Accept
                    </button>
                    <button
                      onClick={() =>
                        handleBookingStatus(booking._id, "rejected")
                      }
                      className="flex-1 py-2 bg-[#c6131b] text-white rounded-[12px] hover:bg-[#8B2C34] transition"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No bookings found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
