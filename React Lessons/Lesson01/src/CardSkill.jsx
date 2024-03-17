import PropTypes from "prop-types";
import styles from "./Skill.module.css";
console.log(styles.skill);

function CardSkill({ programmingLang }) {
  return <li className={styles.skill}>{programmingLang}</li>;
}

CardSkill.propTypes = {
  programmingLang: PropTypes.string,
};

export default CardSkill;
