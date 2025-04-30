import axios from "axios";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";

// Define interfaces for your data structures
interface ClothingArticle {
  id: string;
  name: string;
  // Add other properties as needed
}

interface Booking {
  id?: string;
  userId: string;
  items: string[];
  startDate: string;
  endDate: string;
  status?: string;
  // Add other properties as needed
}

interface PaymentData {
  bookingId: string;
  amount: number;
  paymentMethod: string;
  // Add other properties as needed
}

export const fetchClothingArticles = async (): Promise<ClothingArticle[]> => {
  const response = await axios.get(`${API_BASE_URL}/clothing`);
  return response.data;
};

export const fetchBookingById = async (id: string): Promise<Booking> => {
  const response = await axios.get(`${API_BASE_URL}/bookings/${id}`);
  return response.data;
};

export const createBooking = async (bookingData: Booking): Promise<Booking> => {
  const response = await axios.post(`${API_BASE_URL}/bookings`, bookingData);
  return response.data;
};

export const updateBooking = async (
  id: string,
  bookingData: Partial<Booking>
): Promise<Booking> => {
  const response = await axios.put(
    `${API_BASE_URL}/bookings/${id}`,
    bookingData
  );
  return response.data;
};

export const deleteBooking = async (id: string): Promise<void> => {
  const response = await axios.delete(`${API_BASE_URL}/bookings/${id}`);
  return response.data;
};

export const processPayment = async (
  paymentData: PaymentData
): Promise<{ id: string; status: string }> => {
  const response = await axios.post(`${API_BASE_URL}/payments`, paymentData);
  return response.data;
};
