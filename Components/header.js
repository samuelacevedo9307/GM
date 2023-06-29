import Head from "next/head";
import WalletConnect from "@/Components/ConnectionWallet";

import Registro from "@/pages/Registro.js";
import LoginPage from "@/pages/login.js";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Headlanding() {
  const { data: session } = useSession();
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
        <div id="botonPrincipal">
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
            <i class="bi bi-person-fill"></i>
          </button>
        </div>
        <WalletConnect />

        <i className="fa-sharp fa-solid fa-bars" />
      </header>
      <div className="registroLogin">
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
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
                <img src="/images/LogoGmFinance.png" alt="logotipo" />
                <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">
                  Crear cuenta
                </button>
                <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">
                  Iniciar Sesión
                </button>
              </>
            )}
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
        </div>
      </div>
    </>
  );
}
