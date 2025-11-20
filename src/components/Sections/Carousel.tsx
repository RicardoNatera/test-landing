"use client";

import React, { useEffect, useState } from "react";
import Card from "./Card";
import "./Carousel.css";

type Article = {
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
};

export default function Carousel() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 5;

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const next = () => {
    setStartIndex((prev) => (prev + 1) % articles.length);
  };

  const prev = () => {
    setStartIndex((prev) => (prev - 1 + articles.length) % articles.length);
  };

  const visibleArticles =
    startIndex + visibleCount <= articles.length
      ? articles.slice(startIndex, startIndex + visibleCount)
      : [
          ...articles.slice(startIndex),
          ...articles.slice(0, (startIndex + visibleCount) % articles.length),
        ];

  if (articles.length === 0) return <p>Loading...</p>;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {visibleArticles.map((article, idx) => {
          const isEdge = idx === 0 || idx === visibleArticles.length - 1;
          return (
            <div
              className={`carousel-item ${isEdge ? "edge-card" : ""}`}
              key={idx}
            >
              <Card
                title={article.title}
                description={article.description}
                image={article.image}
              />
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev}>‹</button>
        <button className="carousel-btn" onClick={next}>›</button>
      </div>
    </div>
  );
}
