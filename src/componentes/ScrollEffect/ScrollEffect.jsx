import React, { useEffect } from "react";
import "./ScrollEffect.scss";

const ScrollEffect = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".scroll-effect");
      elements.forEach((element) => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (elementPosition - windowHeight <= 0) {
          element.classList.add("scrolled");
        } else {
          element.classList.remove("scrolled");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
};

export default ScrollEffect;
