import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`star ${ (hovered || rating) >= star ? "filled" : "" }`}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHovered(star)}
          onMouseLeave={() => setHovered(0)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 17.25l-6.172 3.763 1.179-6.873L2.5 9.987l6.9-1.004L12 2.25l2.6 6.733 6.9 1.004-5.007 4.153 1.179 6.873z"
          />
        </svg>
      ))}
    </div>
  );
}
