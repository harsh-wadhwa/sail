import { NextApiRequest, NextApiResponse } from "next";
import { Booking } from "../types/Booking";

let bookings: Booking[] = []; // This will act as an in-memory store for bookings

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case "GET":
      res.status(200).json(bookings);
      break;
    case "POST":
      const newBooking = req.body;
      bookings.push(newBooking);
      res.status(201).json(newBooking);
      break;
    case "PUT":
      const { id, ...updatedBooking } = req.body;
      bookings = bookings.map((booking) =>
        booking.id === id ? { ...booking, ...updatedBooking } : booking
      );
      res.status(200).json(updatedBooking);
      break;
    case "DELETE":
      const { bookingId } = req.body;
      bookings = bookings.filter((booking) => booking.id !== bookingId);
      res.status(204).end();
      break;
    default:
      res.setHeader("Allow", ["GET", "POST", "PUT", "DELETE"]);
      res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
