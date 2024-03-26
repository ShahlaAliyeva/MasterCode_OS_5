import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs ⚛️",
  "Invest your new income ⚛️",
];

function Step({ msj, children }) {
  // let step = 3;

  const [step, setStep] = useState(1); //arr
  const [isClosed, setIsClosed] = useState(false);

  function handleNext() {
    if (step >= 3) return;
    setStep(step + 1);

    // step = step + 1;
    // console.log(step);

    // setStep(step + 1);
    // setStep(step + 1);

    // ! duzgun yazilish
    // setStep((s) => s + 1);
    // setStep((s) => s + 1);

    // console.log(e.target);
  }
  function handlePrevious() {
    if (step > 1) setStep(step - 1);

    // step = step - 1;

    // setStep(step - 1);
    // setStep(step - 1);

    // ! duzgun yazilishF
    // setStep((s) => s - 1);
    // setStep((s) => s - 1);
  }

  return (
    <div>
      {children}
      <button className="btn" onClick={() => setIsClosed((closed) => !closed)}>
        &times;
      </button>
      {!isClosed && (
        <div className="container">
          <ul className="steps">
            <li className={`${step >= 1 ? "step active" : "step"}`}>1</li>
            <li className={`${step >= 2 ? "step active" : "step"}`}>2</li>
            <li className={`${step >= 3 ? "step active" : "step"}`}>3</li>
          </ul>

          <p className="step__message">{`Step ${step}: ${
            messages[step - 1]
          }`}</p>

          <div className="step__btns">
            <button onClick={handlePrevious} className="step__btn">
              previous
            </button>
            <button onClick={() => handleNext()} className="step__btn">
              next
            </button>
          </div>
        </div>
      )}
      <p>{msj}</p>
    </div>
  );
}

export default Step;
