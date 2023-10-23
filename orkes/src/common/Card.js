import React from "react";
import "./Card.css";

const formatDate = (timestamp) => {
  const date = new Date(timestamp * 1000);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  return `${month} ${day}, ${year} ${formattedHours}:${
    (minutes < 10 ? "0" : "") + minutes
  } ${ampm} IST`;
};
const Card = ({ data }) => {
  const { title, field_photo_image_section, last_update } = data;
  const truncatedTitle =
    title?.length > 58 ? title.slice(0, 58) + "..." : title;

  return (
    <div className="card">
      <img src={field_photo_image_section} alt="BTS" className="card-image" />
      <div className="card-content">
        <div className="card-title">{truncatedTitle}</div>
        <div className="card-date">{formatDate(last_update)}</div>
      </div>
    </div>
  );
};

export default Card;
