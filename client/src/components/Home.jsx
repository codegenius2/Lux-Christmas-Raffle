import useEth from "../contexts/EthContext/useEth";
import { useState } from "react";
import "./Home.css";
import React from "react";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import MintPage from "./MintPage/MintPage";
import AdminPage from "./AdminPage/AdminPage";
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
      <section className="page-mint">
        <Navbar />
        <div className="page-container">
          <div className="container-bis">
            <section className="landing-page-container">
              Christmas Collectible Raffle
            </section>
            <div className="mintpage-container">
              {isOwner2 ? (
                <AdminPage
               
                handleSetURI={handleSetURI}
                uri={uri}
                setBaseURI={setBaseURI}
                rrr={rrr}
                getURI={getURI}
                handleChangePrice={handleChangePrice}
                price={price}
                isMintOn={isMintOn}
                stopMint={stopMint}
                enableMint={enableMint}
                handleNumberChange={handleNumberChange}
                number={number}
                mintPartnership={mintPartnership}
                
                />
              ) : (
                <MintPage
                  isMintOn={isMintOn}
                  mintPrice={mintPrice}
                  handleNumberChange={handleNumberChange}
                  number={number}
                  mint={mint}
                />
              )}
            </div>
          </div>
        </div>
          <Footer />
        
        <CrossmintPayButton
                clientId="8a54d4f3-de31-43a9-acda-a1361836bef0"
                mintConfig={{"type":"erc-721","totalPrice":`${mintPriceInETH}`,"_quantity":"1"}}
                environment="staging"
            />
            <CrossmintPayButton
                clientId="d2e0ba10-7854-42d3-a2a1-39d900467779"
                mintConfig={{"type":"erc-721","totalPrice":"0.001","_quantity":"1"}}
                
            />
      </section>
    </>
  );
}
