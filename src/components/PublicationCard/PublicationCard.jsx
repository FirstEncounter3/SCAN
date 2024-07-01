import React from "react";
import { Link } from "react-router-dom";
import { smallFormattedText, concatenateXmlText, tryFindImg, badge } from "../../utils/utils";

import "./PublicationCard.css";

function PublicationCard({
  attributes,
  content,
  issueDate,
  title,
  source,
  url,
}) {
  const parsedDate = issueDate.split("T")[0].split("-").reverse().join(".");
  const text = concatenateXmlText(content.markup);
  const aLittleFormattedText = smallFormattedText(text);
  const imgUrl = tryFindImg(content.markup);
  const badgeText = badge(attributes.isTechNews, attributes.isAnnouncement, attributes.isDigest)
  return (
    <section className="publication-card-wrapper">
      <div className="publication-date-and-source">
        <span>{parsedDate}</span>
        <Link to={url} target="_blank">
          {source.name}
        </Link>
      </div>
      <div className="publication-header-and-bage">
        <h2>{title.text.slice(0, 100) + " ..."}</h2>
        <span>{badgeText}</span>
      </div>
      <div className="publication-img-content">
        {imgUrl ? (
          <img src={imgUrl} alt="publication" />
        ) : (
          <img src="no_image.png" alt="publication" />
        )}
      </div>
      <div className="publication-text-content">
        <p>{aLittleFormattedText}</p>
      </div>
      <div className="publication-footer">
        <Link to={url} target="_blank">
          Читать в источнике
        </Link>
        <span>{attributes.wordCount} слова</span>
      </div>
    </section>
  );
}

export default PublicationCard;
