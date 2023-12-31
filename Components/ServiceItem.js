import React, { useState } from 'react';


function ServiceItem({ title, description }) {
  const [rating, setRating] = useState();

  const handleRatingChange = (event) => {
    const inputValue = parseInt(event.target.value, 10);
    if (!isNaN(inputValue) && inputValue >= 0 && inputValue <= 5) {
      setRating(inputValue);
    }
  };

  return (
    <div className="servicio">
      <button></button>
      <h4>{title}</h4>
      <div className="star-rating">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? 'rated' : ''}`}
          >
            &#9733;
          </span>
        ))}
      </div>
      <input
        type="number"
        value={rating}
        onChange={handleRatingChange}
        min="1"
        max="5"
      />
      <p>{description}</p>
    </div>
  );
}

export default ServiceItem;