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
  handleConnectWallet,
  accounts,
  isConnect
}) => {
  return (
    <>
      <div className="mint-selector">
        <div className="text-mint-container">
          <p>
            {isMintOn ? (
              <span>
                The Christmas sale is open! Discover the project by{" "}
                <a
                  href="https://luxresorts-nft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                 clicking here
                </a>
              </span>
            ) : (
              <span>
                The Christmas sale is open! Discover the project by{" "}
                <a
                  href="https://luxresorts-nft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  clicking here
                </a>
              </span>
            )}
          </p>
          <p>
            The price of the collectible is 0,79
            ETH $1000 ~ $1070  
          </p>
        </div>
        <div>Mint with wallet is currently disabled. It will resume tomorrow morning French time. <br /> You can still buy your collectible by credit card below. </div>
        {/* {isConnect ? "" : <button className="button-28 mintpage-connect-button" onClick={handleConnectWallet}>Connect wallet</button>}
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
        )} */}
        <CrossmintPayButton
          className="crossmint-button"
          clientId="5f7fdf88-f866-45b0-b5e2-f340aa62ae44"
          mintConfig={{
            type: "erc-721",
            totalPrice: "0.79",
            _quantity: "1",
          }}
        />
      </div>
    </>
  );
};
export default MintPage;
