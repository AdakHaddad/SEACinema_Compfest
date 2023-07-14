import React, { useState } from "react";

const MovieCard = ({ movie }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const handleToggleDetails = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const handleBookTicket = () => {
    // Logic to handle ticket booking
    console.log("Book ticket:", movie.title);
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md my-10">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={movie.poster_url}
          alt={movie.title}
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-gray-900 text-2xl font-bold mb-2">{movie.title}</h2>

        <button
          onClick={handleToggleDetails}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          {isDescriptionVisible ? "Hide Details" : "View Details"}
        </button>
        {isDescriptionVisible && (
          <p className="text-gray-700 text-base mb-4">{movie.description}</p>
        )}
        <div className="flexbox items-center justify-between">
          <div className="mb-5">
            <p className="text-gray-700 text-base">
              Age Rating: {movie.age_rating}
            </p>
            <p className="text-gray-700 text-base">
              Ticket Price: Rp. {movie.ticket_price}
            </p>
          </div>
          <button
            onClick={handleBookTicket}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded"
          >
            Book Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
