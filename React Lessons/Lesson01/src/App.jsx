// import React from "react";
// import Example from "./Example";

import Card from "./Card";

// const styleSecondCard = {
//   color: "red",
//   cursor: "pointer",
//   backgroundColor: "#ccc",
// };

function App() {
  return (
    <div className="container">
      <Card
        title="Gulcin"
        description="Men Gulcin, dolor sit amet consectetur adipisicing elit. Iste eaque
          aliquam illum ipsum nostrum sint architecto voluptas eum quam facilis."
        skills={["HTML", "CSS", "JSON", "jQuery", "React"]}
      />

      <Card
        title="Refi"
        description="Men Refi, dolor sit amet consectetur adipisicing elit. Iste eaque
          aliquam illum ipsum nostrum sint architecto voluptas eum quam facilis."
        skills={["CSS", "JSON", "Angular", "React"]}

        // styles={styleSecondCard}
      />

      <Card
        title="Shehla"
        description="Men Refi, dolor sit amet consectetur adipisicing elit. Iste eaque
          aliquam illum ipsum nostrum sint architecto voluptas eum quam facilis."
      />
    </div>
  );
}

export default App;

//! JSX qaydalari
//? 1. butun teqlerin baglanisi olmalidir
//? 2. 1 root elementi olmalidir (<></> React Fragment)
//? 3. HTML -> onclick, onmouseover, onmouseout.... ; React -> camelCase: onClick, onMouseOver, onMouseOut...
//* Istisna: aria-... , data-...HTML ile eyni yazilir

//! SPA --> Single Page Applications

//? React rule ==> Data flow 1 istiqametdedir

//! Props
//? 1. Komponente tesir gostere bilmek ucun (style, text ve s. deyismek)
//? 2. readonly olur
//? 3. parent komponentden child komponente oturule bilir
//? 4. props xaricden gelen datadir
