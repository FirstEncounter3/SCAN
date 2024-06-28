import React from "react";

function PublicationCard({ accessToken, encodedIds }) {
  return (
    <section className="publication-card-wrapper">
      <div className="publication-date-and-source">
        <span>13.09.2021</span>
        <a href="#">Комсомольская правда</a>
      </div>
      <div className="publication-header-and-bage">
        <h3>Скиллфэктори - лучшая онлайн-школа для будущих айтишников</h3>
        <span>Технические новости</span>
      </div>
      <div className="publication-img-content">
        <img src="publication.png" alt="publication" />
      </div>
      <div className="publication-text-content">
        <p>
          SkillFactory — школа для всех, кто хочет изменить свою карьеру и
          жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4
          континентов, самому взрослому студенту сейчас 86 лет. Выпускники
          работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru,
          Яндексе, Ozon и других топовых компаниях. Принципы SkillFactory:
          акцент на практике, забота о студентах и ориентир на трудоустройство.
          80% обучения — выполнение упражнений и реальных проектов. Каждого
          студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А
          карьерный центр помогает составить резюме, подготовиться к
          собеседованиям и познакомиться с IT-рекрутерами.
        </p>
      </div>
      <div className="publication-footer">
        <button>Читать в источнике</button>
        <span>2 543 слова</span>
      </div>
    </section>
  );
}

export default PublicationCard;
