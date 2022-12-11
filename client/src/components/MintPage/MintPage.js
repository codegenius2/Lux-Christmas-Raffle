import React from "react";
import "./MintPage.css";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";

const MintPage = ({
  isMintOn,
  mintPrice,
  handleNumberChange,
  number,
  mint,
  mintPriceInETH,
}) => {
  return (
    <>
      <div className="mint-selector">
        <div className="text-mint-container">
          <p>
            {isMintOn ? (
              <span>
                The Christmas sale is open! Discover the project by clicking{" "}
                <a
                  href="https://resorts-nft.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </span>
            ) : (
              <span>
                The Christmas sale coming soon! Discover the project by clicking{" "}
                <a
                  href="https://resorts-nft.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  here
                </a>
              </span>
            )}
          </p>
          <p>
            The price of the collectible is 0,78800463
            {/* {mintPrice / 1000000000000000000}{" "} */}
            ETH ~ $1000
          </p>
        </div>
        {isMintOn && (
          <>
            <div className="select-mint">
              <select
                className="button-28 button-select"
                onChange={handleNumberChange}
                value={number}
              >
                <option value="0">Select</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <span>
                <button className="button-28" rol="button" onClick={mint}>
                  MINT
                </button>
              </span>
            </div>
            <span className="mint-ou">OR</span>
          </>
        )}
        <CrossmintPayButton
          className="crossmint-button"
          clientId="5f7fdf88-f866-45b0-b5e2-f340aa62ae44"
          mintConfig={{
            type: "erc-721",
            totalPrice: `${mintPriceInETH}`,
            _quantity: "1",
          }}
        />
      </div>
    </>
  );
};
export default MintPage;
