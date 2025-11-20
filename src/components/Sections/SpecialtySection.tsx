
"use client";
import React, { useEffect, useState } from "react";
import "./SpecialtySection.css";

type Article = {
  title: string;
  description: string;
  image: string;
  source: string;
  date: string;
};

export default function SpecialtySection() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section className="specialty-section">
      <div className="specialty-header">
        <h2 className="specialty-title">What is the Specialty of us</h2>
        <p className="specialty-subtitle">
          Noticias dinámicas obtenidas desde NewsAPI.
        </p>
      </div>

      <div className="specialty-cards">
        {articles.map((article, idx) => (
          <div className="card" key={idx}>
            <img
              src={article.image}
              alt={article.title}
              className="card-image"
            />
            <h3 className="card-title">{article.title}</h3>
            <p className="card-desc">{article.description}</p>
            <small className="card-meta">
              {article.source} – {new Date(article.date).toLocaleDateString()}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}
