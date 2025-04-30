import { useEffect, useState } from "react";
import { Booking } from "../types/Booking";

const BookingsPage = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      const response = await fetch("/api/bookings");
      const data = await response.json();
      setBookings(data);
    };

    fetchBookings();
  }, []);

  const handleDelete = async (id: string) => {
    await fetch(`/api/bookings/${id}`, {
      method: "DELETE",
    });
    setBookings(bookings.filter((booking: Booking) => booking.id !== id));
  };

  return (
    <div>
      <h1>Manage Bookings</h1>
      <table>
        <thead>
          <tr>
            <th>Article</th>
            <th>Renter</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking: Booking) => (
            <tr key={booking.id}>
              <td>{booking.articleName}</td>
              <td>{booking.renterName}</td>
              <td>{new Date(booking.startDate).toLocaleDateString()}</td>
              <td>{new Date(booking.endDate).toLocaleDateString()}</td>
              <td>
                <button onClick={() => handleDelete(booking.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingsPage;
