import useEth from "../contexts/EthContext/useEth";
import { useState } from "react";
import "./Home.css"
import React from "react";

export default function Home() {
  const {
    state: { contract, accounts },
  } = useEth();

  const [number, setNumber] = useState(1);

  const handleNumberChange = (e) => {
      setNumber(parseInt(e.target.value));
  };

  const mint = () => {
    contract.methods.mint(number).send({ from: accounts[0] });
  };
  const _mint = () => {
    contract.methods._mint(accounts[0],number).send({ from: accounts[0] });
  };

  const [myNft, setMyNft] = useState("?");

  const balanceOf = async () => {
    const value = await contract.methods.balanceOf(accounts[0]).call();
    setMyNft(value);
  };

  return (
    <>
    <div id="App">
      <select onChange={handleNumberChange} value={number} id="mint">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <button onClick={mint}>Mint</button>
      <button onClick={_mint}>_mint</button>
      <div>My NFT</div>
      <div>{myNft}</div>
      <button onClick={balanceOf}>Check</button>
    </div>
    </>
  );
}
