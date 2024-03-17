import CardSkill from "./CardSkill";
import PropTypes from "prop-types";

// const arr = ["HTML", "CSS", "JSON", "jQuery", "React"];

function Card({ title, description, skills }) {
  return (
    <div className="card__container">
      <div className="img__container">
        <img
          src="https://i0.wp.com/www.jenniferbland.com/wp-content/uploads/Learn-CSS-Create-The-React-Logo.png?fit=1200%2C630&ssl=1"
          alt="react_logo"
        />
      </div>

      <div className="content__container">
        <h1 className="card__title">{title}</h1>
        <p className="card__content">{description}</p>
        <ul className="skills__container">
          {skills?.map((skill, index) => (
            <CardSkill programmingLang={skill} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  skills: PropTypes.array,
  // styles: PropTypes.object,
};

export default Card;
