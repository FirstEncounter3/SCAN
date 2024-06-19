import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

export const useLoginHandler = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate("/login");
  };

  return { handleLoginClick };
};

export const useSearchHandler = () => {
  const navigate = useNavigate();

  const handleSearchClick = () => {
    navigate("/search");
  };

  return { handleSearchClick };
};

export const useSearchResultsHandler = () => {
  const navigate = useNavigate();

  const handleSearchResultsClick = () => {
    navigate("/results");
  };

  return { handleSearchResultsClick };
};
