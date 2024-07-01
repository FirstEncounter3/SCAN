import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { xml2js } from "xml-js";

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

export const parseXML = (xml) => {
  const json = xml2js(xml, { compact: true });
  return json;
};

export const smallFormattedText = (text) => {
  const formattedText = text
    .replace(/<[^>]*>?/gm, '')
    .replace(/[\s\n]+/g, ' ')
    .replace(/[\u00A0\u2000-\u200B\u2028-\u202F\u205F\u3000]/g, ' ')
    .trim()
    .slice(0, 500);
  return formattedText;
};

export const concatenateXmlText = (xmlString) => {
  const textParser = new DOMParser();
  const xmlDoc = textParser.parseFromString(xmlString, "text/xml");

  // Получаем корневой элемент XML-документа
  const rootElement = xmlDoc.documentElement;

  // Создаем пустую строку для хранения текста
  let text = "";

  // Идем по всем дочерним элементам корневого элемента
  const childNodes = rootElement.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const childNode = childNodes[i];

    // Если элемент является текстовым узлом, добавляем его текст к нашей строке
    if (childNode.nodeType === Node.TEXT_NODE) {
      text += childNode.textContent;
    }

    // Если элемент имеет дочерние элементы, рекурсивно обрабатываем их
    else if (childNode.hasChildNodes()) {
      text += processChildNodes(childNode);
    }
  }

  function processChildNodes(node) {
    let text = "";

    // Идем по всем дочерним элементам текущего узла
    const childNodes = node.childNodes;
    for (let i = 0; i < childNodes.length; i++) {
      const childNode = childNodes[i];

      // Если элемент является текстовым узлом, добавляем его текст к нашей строке
      if (childNode.nodeType === Node.TEXT_NODE) {
        text += childNode.textContent;
      }

      // Если элемент имеет дочерние элементы, рекурсивно обрабатываем их
      else if (childNode.hasChildNodes()) {
        text += processChildNodes(childNode);
      }
    }

    return text;
  }

  return text;
};

export const tryFindImg = (text) => {
  let imgUrl = null;
  const imgSearch = text.match(/img src=["'](.*?)["']/g);
  if (imgSearch) {
    imgUrl = imgSearch[0].split("=")[1].replace(/^"|"$/g, "");
  } else {
    imgUrl = false;
  }
  return imgUrl
};

export const badge = (tech, announcement, digest) => {
  let badgeText = ''
  switch(true) {
    case tech:
      badgeText = "Технические новости"
      break;

    case announcement:
      badgeText = "Анонсы и события"
      break;
    
    case digest:
      badgeText = "Сводки новостей"
      break;
    default:
      badgeText = "Новости"
  }
  return badgeText
};