import React from "react";
import "./TestSelector.css";

function TestSelector() {
  return (
    <div className="test-selector-container">
      TestSelector
      <div className="select" tabIndex={1}>
        <input
          className="selectopt"
          name="test"
          type="radio"
          id="opt1"
          defaultChecked=""
        />
        <label htmlFor="opt1" className="option">
          Séléctionner le nombre de NFT
        </label>
        <input className="selectopt" name="test" type="radio" id="opt2" />
        <label htmlFor="opt2" className="option">
          1
        </label>
        <input className="selectopt" name="test" type="radio" id="opt3" />
        <label htmlFor="opt3" className="option">
          2
        </label>
        <input className="selectopt" name="test" type="radio" id="opt4" />
        <label htmlFor="opt4" className="option">
          3
        </label>
        <input className="selectopt" name="test" type="radio" id="opt5" />
        <label htmlFor="opt5" className="option">
          4
        </label>
        <input type="radio" name="test" id="opt6" />
        <label htmlFor="opt6" className="option">
          Nombre de NFT
        </label>
      </div>
    </div>
  );
}

export default TestSelector;
