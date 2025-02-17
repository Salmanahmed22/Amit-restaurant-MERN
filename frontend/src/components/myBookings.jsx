"use client"
import axios from "axios";
import {useState ,useEffect} from "react"
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
    <div className="flex flex-col items-center justify-center w-full h-auto bg-gray-100 p-4 gap-2">
        <h1 className="text-xl font-semibold text-gray-800 text-center">My Bookings</h1>
        <div className="h-full w-[85%] bg-white flex flex-col p-4">
        <table className="w-full">
                <thead>
                    <tr className="border-b-2">
                        <th className="px-4 py-2">Personal Info</th>
                        <th className="px-4 py-2">date and time</th>
                        <th className="px-4 py-2">Table Capacity</th>
                        <th className="px-4 py-2">Status</th>
                    </tr>
                </thead>
                <tbody className="w-full h-[100px]">
                    { bookings.length > 0 ?(
                        bookings.map((booking,index)=> (
                            <tr key={index} className="border-b">
                                <td data-title="Personal Info" className="px-4 py-2 text-center">
                                    <div className="flex flex-col justify-center items-center">
                                        <h1>{booking.name}</h1>
                                        <p>{booking.email}</p>
                                        <p>{booking.phone}</p>
                                    </div>
                                    
                                    </td>
                                <td data-title="date and time" className="px-4 py-2 text-center">
                                    <div className="flex flex-col justify-center items-center">
                                            <p>{booking.date}</p>
                                            <p>{booking.time}</p>
                                    </div>
                                </td>
                                <td data-title="Table Capacity" className="px-4 py-2 flex h-[115px] justify-center items-center ">
                                    <div className="flex justify-center items-center">
                                        {booking.capacity}
                                    </div>
                                </td>
                                <td data-title="Status" className="px-4 py-2 text-center">
                                    <div className={`flex justify-center items-center text-white font-semibold rounded-[5px] px-[8px] py-2
                                    ${booking.status === "confirmed" ? "bg-green-500" : "bg-red-500"}
                                    ${booking.status === "pending" ? "bg-yellow-500" : "bg-red-500"}`}>
                                        {booking.status}
                                    </div>
                                </td>
                            </tr>
                        ))
                    ):(
                        <tr>
                            <td colSpan="4" className="text-center py-4">No bookings found</td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    </div>
  )
}

export default MyBookings