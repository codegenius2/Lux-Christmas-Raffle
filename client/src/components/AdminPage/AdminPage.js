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
        <div className="admin-title-dashboard">Panneau administrateur :</div>
      <section className="admin-page-container">
        <br />
        <div className="admin-start-stop">
          <p>
            Le mint {isMintOn ? "est en live !" : "est en pause. Stay tuned !"}
          </p>
          {/* ------------------------------------------------------------ */}

          {isMintOn ? (
            <>
              Cliquez ici pour arrêter le mint
              <button className="admin-button-onoff" onClick={stopMint}>
                Off
              </button>
            </>
          ) : (
            <>
              Cliquez ici pour commencer le mint
              <button className="admin-button-onoff" onClick={enableMint}>
                ON
              </button>
            </>
          )}
        </div>
        {/* ------------------------------------------------------------ */}
        <br />
        <div className="admin-mint-price">
          <p>Le prix du mint est de {mintPrice / 1000000000000000000} ETH</p>
          <br />
          <input
            onChange={handleChangePrice}
            type="number"
            value={price}
            placeholder="new price in wei"
          />
          <button onClick={changePrice}>set new price in wei</button>   Check
          this website to convert eth in wei :
          <a href="https://eth-converter.com/">https://eth-converter.com/</a>
        </div>
        <br />
        <br />
        <div className="admin-set-uri">
          <input
            onChange={handleSetURI}
            type="text"
            value={uri}
            placeholder="new URI"
          />
          <button onClick={setBaseURI}>set new uri</button>
          <br />
          <br />
          Current URI : {rrr}
          <button onClick={getURI}>get URI</button>
        </div>
        <br />
        Nombre de NFt Mint : {trackNumber} / 1000   
        <button onClick={checkNumberOfNftMinted}>Check</button>
        <br />
        <select onChange={handleNumberChange} value={number} className="admin-select-mint" id="mint">
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
        <button onClick={mintPartnership}>
          Mint pour partenaire /!\ Limité à 9
        </button>
            Do not require to set mint on
      </section>
    </>
  );
}

export default AdminPage;
