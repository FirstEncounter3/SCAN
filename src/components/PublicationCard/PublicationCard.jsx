import React, {useState} from "react";
import { Link } from "react-router-dom";
import { parseXML } from "../../utils/utils";

import "./PublicationCard.css";

function PublicationCard({ attributes, content, issueDate, title, source, url }) {
  const parsedXml = parseXML(content.markup);
  const parsedDate = issueDate.split('T')[0].split('-').reverse().join('.');
  const text = Array.isArray(parsedXml.scandoc.sentence)
  ? parsedXml.scandoc.sentence.map(sentence => sentence._text).join(" ") : "";

  return (
    <section className="publication-card-wrapper">
      <div className="publication-date-and-source">
        <span>{parsedDate}</span>
        <Link to={url}>{source.name}</Link>
      </div>
      <div className="publication-header-and-bage">
        <h2>{title.text}</h2>
        <span>Технические новости</span>
      </div>
      <div className="publication-img-content">
        <img src={''} alt="publication" />
      </div>
      <div className="publication-text-content">
        <p>
          {text}
        </p>
      </div>
      <div className="publication-footer">
        <Link to={url}>Читать в источнике</Link>
        <span>{attributes.wordCount} слова</span>
      </div>
    </section>
  );
}

export default PublicationCard;
