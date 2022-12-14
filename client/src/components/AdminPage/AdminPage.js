import React, {useState} from "react";
import { useEffect } from "react";
import "./AdminPage.css";

function AdminPage({
  handleSetURI,
  uri,
  setBaseURI,
  currentUri,
  getURI,
  handleChangePrice,
  price,
  isMintOn,
  stopMint,
  enableMint,
  handleNumberChange,
  number,
  mintPartnership,
  changePrice,
  currentPrice,
  checkPrice,
  checkNumberOfNftMinted,
  trackNumber,
  mintPriceInETH,
  count
}) {
  
  const handleCopy = () => {
    navigator.clipboard.writeText(currentUri);
  }

  const [concatenateURI, setConcatenateURI] = useState(currentUri)
  // const handleGetURI = async () => {
  //   await getURI();
  //   const temp = currentUri.slice(0,(currentUri.length*1)/5);
  //   const temp2 = currentUri.slice((currentUri.length * 4)/5, currentUri.length);
  //   const concat = `${temp}...${temp2}`;
  //   setConcatenateURI(concat);
  // }
  useEffect(() => {
    const temp = currentUri.slice(0,(currentUri.length*1)/5);
    const temp2 = currentUri.slice((currentUri.length * 4)/5, currentUri.length);
    const concat = `${temp}...${temp2}`;
    setConcatenateURI(concat);
  }, [currentUri])
  return (
    <>
      <section className="admin-section">
        <h2>Panneau d'administration</h2>
        <div className="admin-container">
          <div className="admin-wrap">
            <div className="admin-content-1">
              <div className="admin-content-1-container">
                <div className="admin-content-1-wrap">
                  <span>
                    Le mint des NFt est {isMintOn ? "en cours !" : "en pause"}
                  </span>
                  {isMintOn ? (
                    <button onClick={stopMint}>Stop mint</button>
                  ) : (
                    <button onClick={enableMint}>Start mint</button>
                  )}
                </div>
              </div>
              <div className="admin-content-1-container">
                <div className="admin-content-1-wrap">
                  <span>Nft minté : {trackNumber} / 1000 </span>
                  <button onClick={checkNumberOfNftMinted}>Check</button>
                </div>
              </div>
              <div className="admin-content-1-container">
                <div className="admin-content-1-wrap">
                  <span>Mint partenaires</span>
                  <div>
                    <select onChange={handleNumberChange} value={number}>
                      <option value="0">Sélectionner</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                    </select>
                    <button onClick={mintPartnership}>Mint</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-content-2">
              <div className="admin-content-2-price">
                <div className="admin-content-2-price-container">
                  <div className="admin-content-2-price-wrap">
                    <span>
                      Le prix du mint est de{" "}
                      {count === 0 ? mintPriceInETH : currentPrice} ETH
                    </span>
                    <button onClick={checkPrice}>Check price</button>
                  </div>
                </div>
                <div className="admin-content-2-price-container">
                  <div className="admin-content-2-price-wrap">
                    Change price
                    <a href="https://eth-converter.com/" rel="noreferrer" target="_blank">
                      ( Convert eth in wei )
                    </a>
                    <div>
                      <input
                        onChange={handleChangePrice}
                        type="number"
                        value={price}
                        placeholder="new price in wei"
                      />
                      <button onClick={changePrice}>Set new price</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admin-content-2-uri">
                <div className="admin-content-2-container">
                  <div className="admin-content-2-wrap">
                    <span>Current URI : {concatenateURI}</span>
                    {currentUri !== "?" ? <button onClick={handleCopy}>Copy</button> : ""}
                    <button onClick={getURI}>Get URI</button>
                  </div>
                </div>
                <div className="admin-content-2-container">
                  <div className="admin-content-2-wrap">
                    <span>Change URI</span>
                    <div>
                      <input
                        onChange={handleSetURI}
                        value={uri}
                        type="text"
                        placeholder="new uri"
                      />
                      <button onClick={setBaseURI}>Set new URI</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminPage;
