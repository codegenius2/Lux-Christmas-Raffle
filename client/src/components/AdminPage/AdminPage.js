import React from "react";
import "./AdminPage.css";

function AdminPage({
  handleSetURI,
  uri,
  setBaseURI,
  rrr,
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
  mintPrice,
  checkNumberOfNftMinted,
  trackNumber,
}) {
  return (
    <>
      <section className="admin-section">
        <h2>Panneau d'administration</h2>
        <div className="admin-container">
          <div className="admin-wrap">
            <div className="admin-content-1">
              <div className="admin-content-1-container">
                <div className="admin-content-1-wrap">
                  <span>Le mint est en cours ! </span>
                  <button>Stop mint</button>
                </div>
              </div>
              <div className="admin-content-1-container">
                <div className="admin-content-1-wrap">
                  <span>Nft minté : ? / 1000 </span>
                  <button>Check</button>
                </div>
              </div>
              <div className="admin-content-1-container">
                <div className="admin-content-1-wrap">
                  <span>Mint partenaires</span>
                  <div>
                    <select
                      onChange={handleNumberChange}
                      value={number}
                      id="mint"
                    >
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
                    <button>Mint</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="admin-content-2">
              <div className="admin-content-2-price">
                <div className="admin-content-2-price-container">
                  <div className="admin-content-2-price-wrap">
                    <span>Le prix du mint est de ? ETH </span>
                    <button>Check price</button>
                  </div>
                </div>
                <div className="admin-content-2-price-container">
                  <div className="admin-content-2-price-wrap">
                    Change price
                    <a href="https://eth-converter.com/" target="_blank">
                    ( Convert eth in wei )
                    </a>
                    <div>
                      <input type="text" placeholder="new price in wei" />
                      <button>Set new price</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="admin-content-2-uri">
                <div className="admin-content-2-container">
                  <div className="admin-content-2-wrap">
                    <span>Current URI : ?</span>
                    <button>Get URI</button>
                  </div>
                </div>
                <div className="admin-content-2-container">
                  <div className="admin-content-2-wrap">
                    <span>Change URI</span>
                    <div>
                      <input type="text" placeholder="new uri" />
                      <button>Set new URI</button>
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
