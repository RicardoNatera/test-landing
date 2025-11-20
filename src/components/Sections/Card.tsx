import React from "react";
import "./Card.css";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: Props) {
  const fallback = "/assets/fallback.png";
  const validImage = image?.startsWith("http") && image?.length > 10
  ? image
  : fallback;

  return (
    
    <div className="card-wrapper">
        <img src={validImage} alt={title} className="card-photo" 
            onError={(e) => {
                e.currentTarget.src = "/assets/fallback.png";
            }}
        />
        <h3 className="card-heading">{title || "No title provided"}</h3>
        <p className="card-text">{description || "No description provided"}</p>
    </div>
  );
}
