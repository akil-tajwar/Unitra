import React from "react";
import css from "./MentorCard.module.css";

const MentorCard = ({ mentor }) => {

  let card_color = ["#ff6b81", "#27dad5", "#ff7f50", "#2ed573"];

  return (
    <div className={css.card}>
      <div style={{ backgroundColor: card_color[(mentor.id - 1) % 4] }} className={css.upper_box}></div>
      <img
        className={css.card_image}
        alt="profile"
        src={mentor.profile_image}
      />
      <div className={css.lower_box}>
        <h4 className={css.card_title}>{mentor.name}</h4>
        <p className={css.college_name}>{mentor.college}</p>
        <p className={css.batch}>{mentor.passout_year}</p>
      </div>
    </div>
  );
};

export default MentorCard;
