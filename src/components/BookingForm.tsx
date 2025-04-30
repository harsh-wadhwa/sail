import { FormEvent, useEffect, useState } from "react";

interface BookingForm {
  articleId?: string;
}

const BookingForm: React.FC<BookingForm> = ({ articleId }) => {
  const [formArticleId, setFormArticleId] = useState<string | undefined>("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [customizationNotes, setCustomizationNotes] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const bookingData = {
      formArticleId,
      startDate,
      endDate,
      customizationNotes,
    };

    // Call API to create a booking
    const response = await fetch("/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    if (response.ok) {
      // Handle successful booking
      alert("Booking created successfully!");
      // Reset form
      setFormArticleId("");
      setStartDate("");
      setEndDate("");
      setCustomizationNotes("");
    } else {
      // Handle error
      alert("Failed to create booking. Please try again.");
    }
  };

  useEffect(() => {
    setFormArticleId(articleId);
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="formArticleId">Clothing Article ID:</label>
        <input
          type="text"
          id="formArticleId"
          value={formArticleId}
          onChange={(e) => setFormArticleId(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="startDate">Start Date:</label>
        <input
          type="date"
          id="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="endDate">End Date:</label>
        <input
          type="date"
          id="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="customizationNotes">Customization Notes:</label>
        <textarea
          id="customizationNotes"
          value={customizationNotes}
          onChange={(e) => setCustomizationNotes(e.target.value)}
        />
      </div>
      <button type="submit">Book Now</button>
    </form>
  );
};

export default BookingForm;
