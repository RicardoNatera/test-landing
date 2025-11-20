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
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const next = () => setIndex((i) => (i + 1) % articles.length);
  const prev = () => setIndex((i) => (i - 1 + articles.length) % articles.length);

  if (articles.length === 0) return <p>Loading...</p>;

  return (
    <div className="carousel-container">
      <button className="carousel-btn" onClick={prev}>‹</button>
      <Card {...articles[index]} />
      <button className="carousel-btn" onClick={next}>›</button>
    </div>
  );
}
