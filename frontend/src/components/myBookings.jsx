"use client"
import axios from "axios";
import {useState, useEffect} from "react"
import Cookies from "js-cookie"
import Loading from "@/app/loading";

const MyBookings = () => {
    const [bookings, setBookings] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        const fetchBookings = async () => {
            try{
                setIsLoading(true);
                const response = await axios.get("http://localhost:5000/api/users/bookings/",{
                    headers: {
                      Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                  });
                setBookings(response.data.data.bookings);
            }catch(error){
                throw new Error(error.message);
            }finally{
                setTimeout(() => setIsLoading(false), 500);
            }
        }
        fetchBookings();
    },[])

  if (isLoading) return <Loading />;
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto bg-gray-100 p-2 md:p-4 gap-2">
        <h1 className="text-xl md:text-2xl font-semibold text-gray-800 text-center mb-2">My Bookings</h1>
        <div className="h-full w-full md:w-[90%] lg:w-[85%] bg-white flex flex-col p-2 md:p-4 rounded-lg shadow-sm">
            {/* Desktop view - Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2">
                            <th className="px-2 md:px-4 py-2">Personal Info</th>
                            <th className="px-2 md:px-4 py-2">Date and Time</th>
                            <th className="px-2 md:px-4 py-2">Table Capacity</th>
                            <th className="px-2 md:px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        { bookings.length > 0 ? (
                            bookings.map((booking, index) => (
                                <tr key={index} className="border-b">
                                    <td className="px-2 md:px-4 py-2 text-center">
                                        <div className="flex flex-col justify-center items-center">
                                            <h1 className="font-medium">{booking.name}</h1>
                                            <p className="text-sm text-gray-600">{booking.email}</p>
                                            <p className="text-sm text-gray-600">{booking.phone}</p>
                                        </div>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 text-center">
                                        <div className="flex flex-col justify-center items-center">
                                            <p>{booking.date}</p>
                                            <p>{booking.time}</p>
                                        </div>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 text-center">
                                        <div className="flex justify-center items-center">
                                            {booking.capacity}
                                        </div>
                                    </td>
                                    <td className="px-2 md:px-4 py-2 text-center">
                                        <div className={`inline-block text-white font-semibold rounded-md px-3 py-1
                                            ${booking.status === "pending" ? "bg-yellow-500" : 
                                              booking.status === "accepted" ? "bg-green-500" : 
                                              "bg-red-500"}`}>
                                            {booking.status}
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center py-4">No bookings found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* Mobile view - Cards */}
            <div className="md:hidden">
                {bookings.length > 0 ? (
                    bookings.map((booking, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm mb-3 p-3 border border-gray-200">
                            <div className="mb-2">
                                <h3 className="font-medium text-lg">{booking.name}</h3>
                                <p className="text-sm text-gray-600">{booking.email}</p>
                                <p className="text-sm text-gray-600">{booking.phone}</p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-2 text-sm">
                                <div>
                                    <p className="font-semibold">Date & Time:</p>
                                    <p>{booking.date}</p>
                                    <p>{booking.time}</p>
                                </div>
                                
                                <div>
                                    <p className="font-semibold">Table Capacity:</p>
                                    <p>{booking.capacity}</p>
                                </div>
                            </div>
                            
                            <div className="mt-3 flex justify-end">
                                <div className={`text-white font-semibold rounded-md px-3 py-1 text-center
                                    ${booking.status === "pending" ? "bg-yellow-500" : 
                                      booking.status === "accepted" ? "bg-green-500" : 
                                      "bg-red-500"}`}>
                                    {booking.status}
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-4">No bookings found</div>
                )}
            </div>
        </div>
    </div>
  )
}

export default MyBookings