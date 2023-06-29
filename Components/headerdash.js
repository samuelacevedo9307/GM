import Head from "next/head";
import WalletConnect from "@/Components/ConnectionWallet";
export default function Headlanding() {
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
        <WalletConnect />
        <div id="botonPrincipal">
          <button className="btn btn-primary" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2"></button>
        </div>
        <i className="fa-sharp fa-solid fa-bars" />
      </header>
      <div className="registroLogin">
        <div className="row">
          <div className="col">
            <div className="collapse multi-collapse" id="multiCollapseExample2">
              <div className="botonRegistro">
                <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">
                  Crear cuenta
                </button>
                <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">
                  Iniciar Sesión
                </button>
              </div>
              <div className="collapse multi-collapse" id="multiCollapseExample3">
                <Registro></Registro>
              </div>
              <div className="collapse multi-collapse" id="multiCollapseExample4">
                <LoginPage></LoginPage>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
