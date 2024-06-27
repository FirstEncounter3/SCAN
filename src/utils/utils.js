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

export const getQueryParams = (location) => {
  const search = location.search;
  const query = new URLSearchParams(search);

  const startDate = query.get("startDate");
  const endDate = query.get("endDate");
  const documentsCount = query.get("documentsCount");
  const inn = query.get("inn");
  const tonality = query.get("tonality");
  const mainRole = query.get("mainRole");
  const riskFactors = query.get("riskFactors");
  const completeness = query.get("completeness");
  const businessContext = query.get("businessContext");
  const technicalNews = query.get("technicalNews");
  const announcements = query.get("announcements");
  const summaries = query.get("summaries");

  return {
    startDate,
    endDate,
    documentsCount,
    inn,
    tonality,
    mainRole,
    riskFactors,
    completeness,
    businessContext,
    technicalNews,
    announcements,
    summaries,
  };
};