function Card() {
  return (
    <div className="card__container">
      <div className="img__container">
        <img
          src="https://i0.wp.com/www.jenniferbland.com/wp-content/uploads/Learn-CSS-Create-The-React-Logo.png?fit=1200%2C630&ssl=1"
          alt="react_logo"
        />
      </div>

      <div className="content__container">
        <h1 className="card__title">Shehla Eliyeva</h1>
        <p className="card__content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste eaque
          aliquam illum ipsum nostrum sint architecto voluptas eum quam facilis.
        </p>
        <ul className="skills__container">
          <li className="skill">
            <span>HTML</span>
          </li>
          <li className="skill">
            <span>CSS</span>
          </li>
          <li className="skill">
            <span>JS</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
