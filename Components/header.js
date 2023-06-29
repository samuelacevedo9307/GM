import Head from "next/head";
import WalletConnect from "@/Components/ConnectionWallet";
import React, { useState, useEffect } from "react";
import Web3 from "web3";

import Registro from "@/pages/Registro.js";
import LoginPage from "@/pages/login.js";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Headlanding() {
  const { data: session } = useSession();
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

        // Cambiar a la red de Mumbai
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x13881" }], // ID de la red de Mumbai
        });
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
    <>
      <header>
        <img src="/images/LogoGmFinance.png" alt="logotipo" />
        <div></div>
        <nav className="menu">
          <a href="#">tokenizacion</a>
          <a href="#">Ranking</a>
          <a href="#">FAQ</a>
        </nav>
        {!isConnected ? (
          <>
            <div id="botonPrincipal">
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <i class="bi bi-person-fill"></i>
              </button>
            </div>
            <button onClick={connectToWeb3}>Conectar</button>
          </>
        ) : (
          <>
            <div id="botonPrincipal">
              <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                <i class="bi bi-person-fill"></i>
              </button>
            </div>
            <p>wallet: {account.slice(0, 7) + "..." + account.slice(35, 42)}</p>
            <button onClick={disconnectFromWeb3}>Desconectar</button>
          </>
        )}

        <i className="fa-sharp fa-solid fa-bars" />
      </header>
      <div className="registroLogin">
        <div className="row ">
          <div className="col d-flex justify-content-center align-items-center position-relative">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <img src="/images/LogoGmFinance.png" alt="logotipo" />
              <br></br>
              <div className="botonRegistro">
                {session ? (
                  <button
                    className="hbuton2"
                    onClick={() => {
                      signOut();
                    }}
                    type="button"
                  >
                    LOG OUT
                  </button>
                ) : (
                  <>
                    <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">
                      Crear cuenta
                    </button>
                    <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">
                      Iniciar Sesión
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
          <div id="miContenedorPadre">
            <div className="collapse multi-collapse" id="multiCollapseExample3" data-parent="#miContenedorPadre">
              <Registro></Registro>
            </div>
            <div className="collapse multi-collapse" id="multiCollapseExample4" data-parent="#miContenedorPadre">
              <LoginPage></LoginPage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
