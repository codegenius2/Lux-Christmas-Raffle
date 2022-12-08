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
  trackNumber
}) {
  return (
    <>
      <div>
        Pannaux d'admin : <br />
        <p>Le mint {isMintOn ? "Live !" : "est en pause. Stay tuned !"}</p>
        {/* ------------------------------------------------------------ */}
        {isMintOn ? (
          <>
            Turn mint off
            <button onClick={stopMint}>Off</button>
          </>
        ) : (
          <>
            Turn mint on
            <button onClick={enableMint}>ON</button>
          </>
        )}
        {/* ------------------------------------------------------------ */}
        <br />
        <p>Le prix du mint est {mintPrice / 1000000000000000000} ETH</p>
        <br />
        <input
          onChange={handleChangePrice}
          type="number"
          value={price}
          placeholder="new price in wei"
        />
        <button onClick={changePrice}>set new price in wei</button>   Check this
        website to convert eth in wei : https://eth-converter.com/ <br />
        <br />
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
        <br />
        Nombre de NFt Mint :  {trackNumber} / 1000   
        <button onClick={checkNumberOfNftMinted}>Check</button>
        <br />
        <select onChange={handleNumberChange} value={number} id="mint">
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
      </div>
    </>
  );
}

export default AdminPage;
