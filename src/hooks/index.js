import { useState, useEffect, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { newscontent } from "../content/newscontent";

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

export function useContactsHooks() {
  const handleButtonClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const saveInClipBoard = (num) => {
    navigator.clipboard.writeText(num);
  };

  return {
    handleButtonClick,
    saveInClipBoard,
  };
}

export function useNewsHooks() {
  const router = useNavigate();
  const [page, setPage] = useState(1);

  const pagination = useMemo(() => {
    const pagesCount = Math.ceil(newscontent.length / 5);

    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    return pages;
  }, []);

  const ourNews = useMemo(() => {
    return newscontent.slice((page - 1) * 5, page * 5);
  }, [page]);

  return {
    router,
    page,
    setPage,
    pagination,
    ourNews,
  };
}

export function useNewsSlotHooks() {
  const router = useNavigate();
  const location = useLocation();
  const { state } = location;
  const { text, img, img2 } = state;

  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [showDownloadButton] = useState(!!img2);

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = img2;
    a.download = "Result.jpg";
    a.click();
  };

  return {
    router,
    text,
    img,
    img2,
    isImageExpanded,
    setIsImageExpanded,
    showDownloadButton,
    handleDownload,
  };
}
export function useCallPhoneNumber() {
  const callPhoneNumber = (phoneNumber) => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return callPhoneNumber;
}