import useEth from "../contexts/EthContext/useEth";
import { useState } from "react";
import "./Home.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import TestSelector from "./TestSelector/TestSelector";

export default function Home() {
  const {
    state: { contract, accounts, isOwner, isMintOn, mintPrice },
  } = useEth();

  const [number, setNumber] = useState(1);

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const mint = () => {
    contract.methods.mint(number).send({ from: accounts[0], value: mintPrice });
  };

  // const [myNft, setMyNft] = useState("?");

  // const balanceOf = async () => {
  //   const value = await contract.methods.balanceOf(accounts[0]).call();
  //   setMyNft(value);
  // };
  const [uri, setURI] = useState();

  const handleSetURI = (e) => {
    setURI(e.target.value);
  };
  const setBaseURI = async () => {
    await contract.methods.setBaseURI(uri).send({ from: accounts[0] });
  };

  const [rrr, setRrr] = useState("?");
  const getURI = async () => {
    const value = await contract.methods
      .tokenURI(0)
      .call({ from: accounts[0] });
    setRrr(value);
  };

  const [price, setPrice] = useState();
  const handleChangePrice = (e) => {
    if (e.target.value < 0) {
      setPrice(0);
    } else {
      setPrice(parseInt(e.target.value));
    }
  };
  const enableMint = async () => {
    await contract.methods.enableMint().send({ from: accounts[0] });
  };
  const stopMint = async () => {
    await contract.methods.stopMint().send({ from: accounts[0] });
  };

  const mintPartnership = async () => {
    await contract.methods.mintPartnership(number).send({ from: accounts[0] });
  };
  return (
    <>
      {isOwner ? (
        <div>
          Pannaux d'admin : <br />
          <input
            onChange={handleSetURI}
            type="text"
            value={uri}
            placeholder="new URI"
          />
          <button onClick={setBaseURI}>set new uri</button>
          <br />
          Current URI : {rrr}
          <button onClick={getURI}>get URI</button>
          <br />
          <input
            onChange={handleChangePrice}
            type="number"
            value={price}
            placeholder="new price in wei"
          />
          <button onClick={setBaseURI}>set new price in wei</button>   Check
          this website to convert eth in wei : https://eth-converter.com/ <br />
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
          <button onClick={mintPartnership}>Mint</button>    Do not require to
          set mint on
        </div>
      ) : (
        // FIN PAGE ADMIN
        // (par défaut)Page de base quand on est connecté
        <section>
          <Navbar />
          <div className="page-container">
            <LandingPage />
            <div className="mint-selector">
              Le mint {isMintOn ? "Live !" : "en pause. Stay tuned !"}
              <br />
              <br />
              Le prix du mint est {mintPrice / 1000000000000000000} eth
              <br />
              <br />
              <div className="select-mint">
                {/* <span> */}
                  <select className="button-28"
                    onChange={handleNumberChange}
                    value={number}
                    id="mint"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                  </select>
                {/* </span> */}
                <span>
                  <button className="button-28" rol="button" onClick={mint}>MINT</button>
                </span>
              </div>
              <br />
              <br />
              {/* <div>My NFT</div>
      <div>{myNft}</div><br />
    <button onClick={balanceOf}>Check</button> */}
            </div>
          </div>
        </section>
      )}
      <TestSelector />
    </>
  );
}
