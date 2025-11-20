"use client";

import React from "react";
import Carousel from "./Carousel";
import "./SpecialtySection.css";

export default function SpecialtySection() {
  return (
    <section className="specialty-section">
      <div className="specialty-header">
        <h2 className="specialty-title">
          <span className="line-top">What is the</span><br />
          <span className="line-bottom">Specialty Of Us?</span>
        </h2>

      </div>

      <Carousel />
    </section>
  );
}
