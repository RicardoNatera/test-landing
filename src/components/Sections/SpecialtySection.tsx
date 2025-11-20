"use client";

import React from "react";
import Carousel from "./Carousel";
import "./SpecialtySection.css";

export default function SpecialtySection() {
  return (
    <section className="specialty-section">
      <div className="specialty-header">
        <h2 className="specialty-title">What is the Specialty of us</h2>
        <p className="specialty-subtitle">
          Noticias dinámicas obtenidas desde NewsAPI.
        </p>
      </div>

      <Carousel />
    </section>
  );
}
