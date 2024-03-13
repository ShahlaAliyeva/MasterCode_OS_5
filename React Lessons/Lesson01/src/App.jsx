// import React from "react";
// import Example from "./Example";

import Card from "./Card";

function App() {
  return (
    <div className="container">
      <Card />
      <Card />
      <Card />
      <Card />
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
