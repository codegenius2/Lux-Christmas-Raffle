import React from "react";
import "./MintPage.css";

const MintPage = ({
  isMintOn,
  mintPrice,
  handleNumberChange,
  number,
  mint,
}) => {
  return (
    <>
      <div className="mint-selector">
        <div className="text-mint-container">
          <p>Le mint {isMintOn ? "Live !" : "est en pause. Stay tuned !"}</p>
          <p>Le prix du mint est {mintPrice / 1000000000000000000} ETH</p>
        </div>
        <div className="select-mint">
            <select
              className="button-28 "
              onChange={handleNumberChange}
              value={number}
              id="mint"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <span>
              <button className="button-28" rol="button" onClick={mint}>
                MINT
              </button>
            </span>
        </div>
      </div>
    </>
  );
};

export default MintPage;
