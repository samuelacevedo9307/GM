import Web3 from "web3";
import { useEffect } from "react";
import abiGmToken from "../contracts/abiGmToken.json";
import abiUsdtToken from "../contracts/abiUsdt.json";
import abiGmDispersion from "../contracts/abiGmDispersion.json";
let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  web3 = new Web3(window.ethereum);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

const contractGmToken = "0x4F8bE821F36dbFf8065E893404065BcdFd1C100A";
const contractUsdtToken = "0x55d398326f99059fF775485246999027B3197955";
const dispersionGmToken = "0x8897D514E1F77afdE2e53d147Ae89B3Fa6699882";
const contractAbiGmToken = abiGmToken.abi;
const contractAbiUsdt = abiUsdtToken.abi;
const contractAbiGmDispersion = abiGmDispersion.abi;

const abiGm = new web3.eth.Contract(contractAbiGmToken, contractGmToken);
const abiUsdt = new web3.eth.Contract(contractAbiUsdt, contractUsdtToken);
const abiGmDisper = new web3.eth.Contract(contractAbiGmDispersion, dispersionGmToken);



async function _approveUsdt(_value) {
  const accounts = await web3.eth.getAccounts();
  const gasPrice = await web3.eth.getGasPrice();
  console.log(gasPrice);
  const gasLimit = 5000000;
  const result = await abiUsdt.methods.approve(dispersionGmToken, _value).send({from:accounts[0]});
  return result;
}
async function _approveGm(_value) {
    const accounts = await web3.eth.getAccounts();
    const gasPrice = await web3.eth.getGasPrice();
    console.log(gasPrice);
    const gasLimit = 5000000;
    const result = await abiGm.methods.approve(dispersionGmToken, _value).send({from:accounts[0]});
    return result;
  }
async function _setTokensAtContract (_value){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.setValueToContract(_value).send({from:accounts[0]});
    return result
}
async function _setAddressContractGmToken (_address){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.setValueToContractGm(_address).send({from:accounts[0]});
    return result
}
async function _setAddressContractUsdtToken (_address){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.setValueToContractUsdt(_address).send({from:accounts[0]});
    return result
}

async function _buyTokens (_value){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.buyTokens(_value).send({from:accounts[0]});
    return result
}


  async function _widthdrawGmToken (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.withdrawGmToken().send({from:accounts[0]});
    return result
  }
  async function _widthdrawUsdtToken (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.withdrawUsdt().send({from:accounts[0]});
    return result
  }
  async function _getSupply (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.getTotalGmTokens().call();
    return result
  }
  async function _getUsdtInContract (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.getTotalUsdtTokens().call();
    return result
  }
  async function _getGmAddress (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.getGmToken().call();
    return result
  }
  async function _getUsdtAddress (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.getUsdtToken().call();
    return result
  }
  async function _getPricePerToken (){
    const accounts = await web3.eth.getAccounts();
    const result = await abiGmDisper.methods.getCurrentPrice().call();
    return parseInt(result)/100
  }


export {_approveUsdt, _approveGm, _setTokensAtContract, _setAddressContractGmToken, _setAddressContractUsdtToken, _buyTokens, _widthdrawGmToken,_widthdrawUsdtToken, _getSupply, _getUsdtInContract, _getGmAddress, _getUsdtAddress, _getPricePerToken };