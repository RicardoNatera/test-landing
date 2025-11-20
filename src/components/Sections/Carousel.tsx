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
  const [visibleCount, setVisibleCount] = useState(5);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width >= 1920) setVisibleCount(5);
      else if (width >= 1536) setVisibleCount(4);
      else if (width >= 1201) setVisibleCount(3);
      else if (width >= 769) setVisibleCount(2);
      else setVisibleCount(1);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
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

  const count = visibleArticles.length;
  const isSingle = count === 1;
  const isTwo = count === 2;

  return (
    <div className={`carousel-wrapper ${isSingle ? "single" : ""}`}>
      <div className={`carousel-track ${isSingle ? "single" : ""}`}>
        {visibleArticles.map((article, idx) => {
          const isEdge = count > 2 && (idx === 0 || idx === count - 1);

          return (
            <div
              className={`carousel-item ${isEdge ? "edge-card" : ""} ${isSingle ? "single" : ""}`}
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
