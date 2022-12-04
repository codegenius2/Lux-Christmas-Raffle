import useEth from "../contexts/EthContext/useEth";
import { useState } from "react";
import "./Home.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import LandingPage from "./LandingPage/LandingPage";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import web3 from "web3";

export default function Home() {
  const {
    state: { contract, accounts, isOwner, isMintOn, mintPrice },
  } = useEth();

  const [number, setNumber] = useState(1);

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const mint = () => {
    contract.methods.mint(number, accounts[0]).send({ from: accounts[0], value: mintPrice });
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
  const changePrice = async () => {
    const newPrice = web3.utils.toBN(price);
    await contract.methods.changePrice(newPrice).send({ from: accounts[0] });
  }
  const enableMint = async () => {
    await contract.methods.enableMint().send({ from: accounts[0] });
  };
  const stopMint = async () => {
    await contract.methods.stopMint().send({ from: accounts[0] });
  };

  const mintPartnership = async () => {
    await contract.methods.mintPartnership(number).send({ from: accounts[0] });
  };
  const mintPriceInETH = mintPrice/1000000000000000000;

  return (
    <>
      {isOwner ? (
        <section>
          <Navbar />
          <div className="page-container">
            <LandingPage />
            Panneau d'admin : <br />
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
            <button onClick={changePrice}>set new price in wei</button>   Check
            this website to convert eth in wei : https://eth-converter.com/
            <br />
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
                <br />
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
            <br />
            {/* <CrossmintPayButton
                clientId="e83380fa-5f27-4aad-a0b5-213724f97691"
                mintConfig={{"type":"wen-mint-erc721a","totalPrice":`${mintPriceInETH}`,"quantity":`${number}`}}
                environment="staging"
                
            /> */}
            <CrossmintPayButton
                clientId="8a54d4f3-de31-43a9-acda-a1361836bef0"
                mintConfig={{"type":"erc-721","totalPrice":`${mintPriceInETH}`,"_quantity":"1"}}
                environment="staging"
            />
          </div>
        </section>
      ) : (
        // FIN PAGE ADMIN
        // (par défaut)Page de base quand on est connecté
        <section>
          <Navbar />
          <div className="page-container">
            <LandingPage />
            Le mint est {isMintOn ? "Live !" : "en pause. Stay tuned !"}
            <br />
            <br />
            Le prix du mint est {mintPriceInETH} eth
            <br />
            <br />
            <select onChange={handleNumberChange} value={number} id="mint">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
            <button onClick={mint}>Mint</button>
            <br />
            <br />
            {/* <div>My NFT</div>
      <div>{myNft}</div><br />
    <button onClick={balanceOf}>Check</button> */}
          </div>
        </section>
      )}
    </>
  );
}
