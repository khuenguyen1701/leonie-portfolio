import React, { useRef, useEffect } from "react";

export const RevealOnScroll = ({ children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => el.classList.add("visible");

    const checkVisibilityNow = () => {
      const rect = el.getBoundingClientRect();
      const isVisible =
        rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
      if (isVisible) reveal();
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold: 0, rootMargin: "0px 0px -30% 0px" }
    );

    observer.observe(el);

    checkVisibilityNow(); 
    window.addEventListener("load", checkVisibilityNow);
    window.addEventListener("resize", checkVisibilityNow);
    window.addEventListener("orientationchange", checkVisibilityNow);

    const timeout1 = setTimeout(checkVisibilityNow, 500);
    const timeout2 = setTimeout(checkVisibilityNow, 1500);

    const handleScrollEnd = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        reveal();
      }
    };

    window.addEventListener("scroll", handleScrollEnd);

    return () => {
      observer.disconnect();
      clearTimeout(timeout1);
      clearTimeout(timeout2);
      window.removeEventListener("load", checkVisibilityNow);
      window.removeEventListener("resize", checkVisibilityNow);
      window.removeEventListener("orientationchange", checkVisibilityNow);
    };
  }, []);

  return (
    <div ref={ref} className="reveal overflow-visible">
      {children}
    </div>
  );
};
