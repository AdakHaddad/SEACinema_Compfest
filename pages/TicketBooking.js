import React, { useState } from "react";

const TicketBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats([...selectedSeats, seatNumber]);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Ticket booked and payment processed");
  };

  return (
    <div>
      <h2>Ticket Booking</h2>
      <h3>Selected Seats: {selectedSeats.join(", ")}</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <label>
          Age:
          <input type="number" value={age} onChange={handleAgeChange} />
        </label>
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default TicketBooking;
