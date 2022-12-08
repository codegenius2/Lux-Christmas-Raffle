import React from "react";
import { useState } from "react";
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
}) {
  var count = 0;
  const handleCheckPrice = async () => {
    await checkPrice();
    count = 1;
    console.log(count);
  };

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
                    Le mint est {isMintOn ? "en cours !" : "en pause"}
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
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
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
                      {count == 0 ? mintPriceInETH : currentPrice} ETH
                    </span>
                    <button onClick={handleCheckPrice}>Check price</button>
                  </div>
                </div>
                <div className="admin-content-2-price-container">
                  <div className="admin-content-2-price-wrap">
                    Change price
                    <a href="https://eth-converter.com/" target="_blank">
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
                    <span>Current URI : {currentUri}</span>
                    <button onClick={getURI}>Get URI</button>
                  </div>
                </div>
                <div className="admin-content-2-container">
                  <div className="admin-content-2-wrap">
                    <span>Change URI</span>
                    <div>
                      <input onChange={handleSetURI} value={uri} type="text" placeholder="new uri" />
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
    // <>
    //     <div className="admin-title-dashboard">Panneau administrateur :</div>
    //   <section className="admin-page-container">
    //     <br />
    //     <div className="admin-start-stop">
    //       <p>
    //         Le mint {isMintOn ? "est en live !" : "est en pause. Stay tuned !"}
    //       </p>

    //       {isMintOn ? (
    //         <>
    //           Cliquez ici pour arrêter le mint
    //           <button className="admin-button-onoff" onClick={stopMint}>
    //             Off
    //           </button>
    //         </>
    //       ) : (
    //         <>
    //           Cliquez ici pour commencer le mint
    //           <button className="admin-button-onoff" onClick={enableMint}>
    //             ON
    //           </button>
    //         </>
    //       )}
    //     </div>
    //     <br />
    //     <div className="admin-mint-price">
    //       <p>Le prix du mint est de {mintPrice / 1000000000000000000} ETH</p>
    //       <br />
    //       <input
    //         onChange={handleChangePrice}
    //         type="number"
    //         value={price}
    //         placeholder="new price in wei"
    //       />
    //       <button onClick={changePrice}>set new price in wei</button>   Check
    //       this website to convert eth in wei :
    //       <a href="https://eth-converter.com/">https://eth-converter.com/</a>
    //     </div>
    //     <br />
    //     <br />
    //     <div className="admin-set-uri">
    //       <input
    //         onChange={handleSetURI}
    //         type="text"
    //         value={uri}
    //         placeholder="new URI"
    //       />
    //       <button onClick={setBaseURI}>set new uri</button>
    //       <br />
    //       <br />
    //       Current URI : {rrr}
    //       <button onClick={getURI}>get URI</button>
    //     </div>
    //     <br />
    //     Nombre de NFt Mint : {trackNumber} / 1000
    //     <button onClick={checkNumberOfNftMinted}>Check</button>
    //     <br />
    //     <select onChange={handleNumberChange} value={number} className="admin-select-mint" id="mint">
    //       <option value="1">1</option>
    //       <option value="2">2</option>
    //       <option value="3">3</option>
    //       <option value="4">4</option>
    //       <option value="5">5</option>
    //       <option value="6">6</option>
    //       <option value="7">7</option>
    //       <option value="8">8</option>
    //       <option value="9">9</option>
    //       <option value="10">10</option>
    //     </select>
    //     <button onClick={mintPartnership}>
    //       Mint pour partenaire /!\ Limité à 9
    //     </button>
    //         Do not require to set mint on
    //   </section>
    // </>
  );
}

export default AdminPage;
