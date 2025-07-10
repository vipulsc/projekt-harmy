"use client";
import React, { useState, useEffect } from "react";

const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Success is not the key to happiness. Happiness is the key to success.",
    author: "Albert Schweitzer",
  },
  {
    text: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Don`t watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    text: "Creativity is intelligence having fun.",
    author: "Albert Einstein",
  },
];

function getRandomIndex(exclude: number) {
  let idx = Math.floor(Math.random() * quotes.length);
  while (idx === exclude && quotes.length > 1) {
    idx = Math.floor(Math.random() * quotes.length);
  }
  return idx;
}

const FinishQuote: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(getRandomIndex(0));
    const interval = setInterval(() => {
      setIndex((prev) => getRandomIndex(prev));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const quote = quotes[index];

  return (
    <div
      style={{
        height: "240px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        padding: "0",
        background: "var(--btn-primary-bg, #059669)",
        borderRadius: 0,
        boxShadow: "none",
        margin: 0,
      }}
    >
      <div
        style={{
          fontSize: "1.6rem",
          fontWeight: 500,
          fontStyle: "italic",
          color: "#fff",
          marginBottom: "1.2rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        “{quote.text}”
      </div>
      <div
        style={{
          fontWeight: 600,
          color: "#e0ffe0",
          fontSize: "1.1rem",
          textAlign: "center",
          width: "100%",
        }}
      >
        — {quote.author}
      </div>
    </div>
  );
};

export default FinishQuote;
