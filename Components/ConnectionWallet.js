import React, { useState, useEffect } from "react";
import Web3 from "web3";

const WalletConnect = () => {
  const [isConnected, setConnected] = useState(false);
  const [account, setAccount] = useState("");

  useEffect(() => {
    connectToWeb3();

    // Función de limpieza
    return () => {
      disconnectFromWeb3();
    };
  }, []);

  const connectToWeb3 = async () => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setConnected(true);

        // Cambiar a la Testnet de Binance
        const networkId = "97"; // ID de la Testnet de Binance
        const provider = web3.currentProvider;
        const chainId = `0x${networkId}`;
        const params = {
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId,
              chainName: "Binance Smart Chain Testnet",
              nativeCurrency: {
                name: "BNB",
                symbol: "bnb",
                decimals: 18,
              },
              rpcUrls: ["https://data-seed-prebsc-1-s1.binance.org:8545"],
              blockExplorerUrls: ["https://testnet.bscscan.com/"],
            },
          ],
        };

        await provider.request(params);
      } catch (error) {
        console.error("Error al conectar a Web3:", error);
      }
    } else {
      console.error("Web3 no está disponible en este navegador.");
    }
  };

  const disconnectFromWeb3 = () => {
    setConnected(false);
    setAccount("");
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={connectToWeb3}>Conectar</button>
      ) : (
        <div>
          <p>{account.slice(0, 7) + "..." + account.slice(35, 42)}</p>
          <button onClick={disconnectFromWeb3}>Desconectar</button>
        </div>
      )}
    </div>
  );
};

export default WalletConnect;
