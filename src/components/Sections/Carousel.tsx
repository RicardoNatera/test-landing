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
    setStartIndex((prev) =>
      prev + 1 <= articles.length - visibleCount ? prev + 1 : prev
    );
  };

  const prev = () => {
    setStartIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const visibleArticles = articles.slice(startIndex, startIndex + visibleCount);

  if (articles.length === 0) return <p>Loading...</p>;

  return (
    <div className="carousel-wrapper">
      <div className="carousel-track">
        {visibleArticles.map((article, idx) => (
          <div className="carousel-item" key={idx}>
            <Card
              title={article.title}
              description={article.description}
              image={article.image}
            />
          </div>
        ))}
      </div>
      <div className="carousel-controls">
        <button className="carousel-btn" onClick={prev} disabled={startIndex === 0}>
          ‹
        </button>
        <button
          className="carousel-btn"
          onClick={next}
          disabled={startIndex + visibleCount >= articles.length}
        >
          ›
        </button>
      </div>
    </div>
  );
}
