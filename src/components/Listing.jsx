import React from "react";

const Listing = ({ city, country, title, superHost, rating, maxGuests, type, bed, photo }) => {
  return (
    <div className="f6">
      {city}
      {country}
      {title}
    </div>
  )
};

export default Listing;