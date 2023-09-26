import { useState, useEffect } from "react";

export function useScrollEvent() {
  const [isVisibleTopButton, setIsVisibleTopButton] = useState(false);

  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        setIsVisibleTopButton(true);
      } else {
        setIsVisibleTopButton(false);
      }

      prevScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return [isVisibleTopButton];
}
