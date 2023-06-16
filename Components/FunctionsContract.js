import Web3 from "web3";
import { useEffect } from "react";
import MiNFT from "../contracts/abi.json";
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const contractAddress = "0x1cD2b51A4EbeE363EA7faac523a243f6e2898D35";
const contractAbi = MiNFT.abi;
const abi = new web3.eth.Contract(contractAbi, contractAddress);



async function _mintNFT(name, description, imageURI,) {
  const accounts = await web3.eth.getAccounts();
  const gasPrice = await web3.eth.getGasPrice();
  console.log(gasPrice);
  const gasLimit = 5000000;
  const result = await abi.methods.mint(name, description, imageURI).send({from:accounts[0]});
  return result;
}
async function _setActive (){
    const accounts = await web3.eth.getAccounts();
    const result = await abi.methods.setActive().send({from:accounts[0]});
    return result
  }
async function _getwalletTokens (){
  const accounts = await web3.eth.getAccounts();
  const result = await abi.methods.getWalletTokens(accounts[0]).call();
  return result
}

async function _getTokenMeta (){
    let Data = [];
    const accounts = await web3.eth.getAccounts();
  const Tokens = await abi.methods.getWalletTokens(accounts[0]).call();
  console.log("Tokens = ", Tokens);
  for(let i = 0; i< Tokens.length; i++){
    const result = await abi.methods.getTokenMetadata(Tokens[i]).call();
    Data.push(result);
  }
  return Data
}
async function _setAddressForMint (){
    const accounts = await web3.eth.getAccounts();
    const result = await abi.methods.setAddressForMint(accounts[0]).send({from:accounts[0]});
    return result
  }

async function _getMinters (){
    const result = await abi.methods.getMinters().call();
    return result
  }

export {_mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters};