import React from "react";
import "./MintPage.css";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const MintPage = ({
  isMintOn,
  mintPrice,
  handleNumberChange,
  number,
  mint,
  mintPriceInETH
}) => {
  return (
    <>
      <div className="mint-selector">
        <div className="text-mint-container">
          <p>Le mint {isMintOn ? "est live !" : "est en pause. Stay tuned !"}</p>
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
        <CrossmintPayButton
        className="crossmint-button"
          clientId="8a54d4f3-de31-43a9-acda-a1361836bef0"
          mintConfig={{
            type: "erc-721",
            totalPrice: `${mintPriceInETH}`,
            _quantity: "1",
          }}
          environment="staging"
        />
      </div>
    </>
  );
};

export default MintPage;
