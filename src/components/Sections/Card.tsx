import React from "react";
import "./Card.css";

type Props = {
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
};

export default function Card({ title, description, image, source, date }: Props) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <small className="card-meta">
        {source} – {new Date(date).toLocaleDateString()}
      </small>
    </div>
  );
}
