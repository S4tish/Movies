"use client";
import { useEffect, useState } from "react";
import "./Scroll.css";

export default function Page() {
  let [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Your website content goes here */}
      <button
        className={`scrollButton ${showScrollButton ? "show" : ""}`}
        onClick={scrollToTop}
      >
        &#9650;
      </button>
    </div>
  );
}
