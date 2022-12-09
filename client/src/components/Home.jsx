import useEth from "../contexts/EthContext/useEth";
import { useState } from "react";
import "./Home.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MintPage from "./MintPage/MintPage";
import AdminPage from "./AdminPage/AdminPage";
import web3 from "web3";

export default function Home() {
  const {
    state: { contract, accounts, isOwner, isMintOn, mintPrice },
  } = useEth();

  const [number, setNumber] = useState("choose");
  // Chaque composant doit gérer son state
  // Informations non nécéssaires pour admin
  // Number dans AdminPage changer le nom de variable
  // Mettre la fonction mint sur admin et sur mintpage (client)
  // si logique differente entre les deux composants vaut mieux les séparer
  // si même logique sur les deux --> home.jsx

  const handleNumberChange = (e) => {
    setNumber(parseInt(e.target.value));
  };

  const mint = () => {
    if (number == "choose"){
      contract.methods
        .mint(number, accounts[0])
        .send({ from: accounts[0], value: mintPrice });
    }
  };

  const [uri, setURI] = useState();
  const handleSetURI = (e) => {
    setURI(e.target.value);
  };

  const setBaseURI = async () => {
    await contract.methods.setBaseURI(uri).send({ from: accounts[0] });
  };

  const [currentUri, setCurrentUri] = useState("?");

  const getURI = async () => {
    const value = await contract.methods
      .tokenURI(0)
      .call({ from: accounts[0] });
    setCurrentUri(value);
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

  const mintPriceInETH = mintPrice / 1000000000000000000;
  const [trackNumber, setTrackNumber] = useState("?");

  const checkNumberOfNftMinted = async () => {
    const value = await contract.methods
      .checkNumberOfNftMinted()
      .call({ from: accounts[0] });
    setTrackNumber(value);
  };
  const [currentPrice, setCurrentPrice] = useState(mintPriceInETH);

  const checkPrice = async () => {
    const value = await contract.methods
      .checkPrice()
      .call({ from: accounts[0] });
    const temp = value / 1000000000000000000;
    setCurrentPrice(temp);
  };
 
  return (
    <>
      <section className="page-mint">
        <Navbar />
        <div className="page-container">
          <div className="container-bis">
            <section className="landing-page-container">
              Christmas Collectible Raffle
            </section>
            <div className="mintpage-container">
              {isOwner ? (
                <AdminPage
                  handleSetURI={handleSetURI}
                  uri={uri}
                  setBaseURI={setBaseURI}
                  currentUri={currentUri}
                  getURI={getURI}
                  handleChangePrice={handleChangePrice}
                  price={price}
                  isMintOn={isMintOn}
                  stopMint={stopMint}
                  enableMint={enableMint}
                  handleNumberChange={handleNumberChange}
                  number={number}
                  mintPartnership={mintPartnership}
                  changePrice={changePrice}
                  mintPriceInETH={mintPriceInETH}
                  currentPrice={currentPrice}
                  checkPrice={checkPrice}
                  checkNumberOfNftMinted={checkNumberOfNftMinted}
                  trackNumber={trackNumber}
                />
              ) : (
                <MintPage
                  isMintOn={isMintOn}
                  mintPrice={mintPrice}
                  handleNumberChange={handleNumberChange}
                  number={number}
                  mint={mint}
                  mintPriceInETH={mintPriceInETH}
                />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}
