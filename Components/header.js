import Head from "next/head";
import WalletConnect from "@/Components/ConnectionWallet";
import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Link from "next/link";

import Registro from "@/pages/Registro.js";
import LoginPage from "@/pages/login.js";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Headlanding() {
  const { data: session } = useSession();
  const [isConnected, setConnected] = useState(false);
  const [account, setAccount] = useState("");

 /*/ useEffect(() => {
    connectToWeb3();

    // Función de limpieza
    return () => {
      disconnectFromWeb3();
    };
  }, []); /*/

  const connectToWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      const chainId = await web3.eth.getChainId();
      console.log("chainid " + chainId);

      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });

        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
        setConnected(true);

        // Cambiar a la Testnet de Binance
        await window.ethereum
          .request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: "0x38" }], // ID de la Testnet de Binance
          })
          .then(() => {
            if (chainId != "56") {
              location.reload();
            }
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
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasRight" data-bs-scroll="true" aria-labelledby="offcanvasRightLabel">
          <div className="offcanvas-header">

            <img src="/images/gm1b.png" alt="logotipo" width={300} />
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <div className="col ">
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
                    <button className="botonLogin" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample3" aria-controls="multiCollapseExample3" aria-expanded="false" aria-label="Toggle navigation">
                      Crear cuenta
                    </button>
                    <button className="botonLogin" type="button" data-bs-toggle="collapse" data-bs-target="#multiCollapseExample4" aria-controls="multiCollapseExample4" aria-expanded="false" aria-label="Toggle navigation">
                      Iniciar Sesión
                    </button>
                  </>
                )}
              </div>
              <div id="miContenedorPadre">
                <div className="collapse multi-collapse" id="multiCollapseExample3" data-bs-parent="#miContenedorPadre">
                  <Registro></Registro>
                </div>
                <div className="collapse multi-collapse" id="multiCollapseExample4" data-bs-parent="#miContenedorPadre">
                  <LoginPage></LoginPage>
                </div>
              </div>
            </div>
            <ul className="menu navbar-nav">
              <li>
              <Link className="text-white" href={`#section1`} passHref legacyBehavior>
              <a href="#section1">tokenizacion</a>
                  </Link>
                
              </li>
              <li>
                <a href="#rankin">Ranking</a>
              </li>
              <li>
                <a href="#inferior">FAQ</a>
              </li>
              {!isConnected ? (
                <></>
              ) : (
                <>
                  <Link className="text-white" href={`/`} passHref legacyBehavior>
                    <a href="#">dashboard</a>
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>

        
        <nav className="menu">
          <Link className="text-white" href={`/`} passHref legacyBehavior>
            <img src="/images/gm1b.png" alt="logotipo" />
          </Link>
            <div>
              <a href="#">tokenizacion</a>
              <a href="#">Ranking</a>
              <a href="#">FAQ</a>
            </div>

          {!isConnected ? (
            <></>
          ) : (
            <>
              <Link className="text-white" href={`#`} passHref legacyBehavior>
                <a href="#">dashboard</a>
              </Link>
            </>
          )}
        </nav>

        {!isConnected ? (
          <>
            <button onClick={connectToWeb3}>Conectar</button>
            <div id="botonPrincipal">
              <button className="btn btn-primary" type="button" id="offcanvasToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i class="bi bi-person-fill"></i>
              </button>
            </div>
          </>
        ) : (
          <>
            <p>wallet: {account.slice(0, 7) + "..." + account.slice(35, 42)}</p>
            <button onClick={disconnectFromWeb3}>Desconectar</button>
            <div id="botonPrincipal">
              <button className="btn btn-primary" type="button" id="offcanvasToggle" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
                <i className="bi bi-person-fill"></i>
              </button>
            </div>
          </>
        )}

        <i className="fa-sharp fa-solid fa-bars" />
      </header>
    </>
  );
}
