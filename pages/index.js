import Image from "next/image";
import { Inter } from "next/font/google";
import Headlanding from "@/Components/headlanding";
import Footer from "@/Components/Footer";
import WalletConnect from "@/Components/ConnectionWallet";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useState } from "react";
import Images from "next/image";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { signIn } from "next-auth/react";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data: session } = useSession();
  async function startMint() {
    const result = await _mintNFT("Gm", "Phase 1", "https://www.construyehogar.com/wp-content/uploads/2014/06/Plano-de-apartamento-peque%C3%B1o-moderno-Tiziana-Caroleo-en-Pinterest.jpg")
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetActive() {
    const result = await _setActive()
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function GetWalletTokens() {
    const result = await _getwalletTokens()
      .then((e) => {
        console.log(e);
        return e;
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }

  async function GetTokenMetadata() {
    const result = await _getTokenMeta()
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetAddressForMint() {
    const result = await _setAddressForMint()
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function GetMinters() {
    const result = await _getMinters()
      .then((e) => {
        console.log(e);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }

  return (
    <div>
      <Headlanding />
      <header id="header">
        <img src="/images/Logo GM Finance.svg" alt="logotipo" />
        <div></div>
        <nav className="menu">
          <a href="#">tokenizacion</a>
          <a href="#">Ranking</a>
          <a href="#">FAQ</a>
        </nav>
        {session ? (
          <>
            <button
              className=""
              onClick={() => {
                signOut();
              }}
              type="button"
            >
              LOG OUT
            </button>
          </>
        ) : (
          <>
            <button
              className=""
              onClick={() => {
                signIn();
              }}
              type="button"
            >
              LOG IN
            </button>
            <Link href={`/Registro`}>
              <button className="" type="button">
                REGÍSTRATE
              </button>
            </Link>
          </>
        )}
        <WalletConnect />
        <i className="fa-sharp fa-solid fa-bars" />
      </header>
      {/*section izquierda con h1 texto-*/}
      <main>
        <section className="section">
          <h1>Empresas Tokenizadas</h1>
          <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga ganancias al ayudar a expandir empresas sólidas y confiables!</p>
          <button>Iniciar</button>
        </section>
        {/*-grafica lado derecho section*/}
        <section>
          <img className="fondo" src="/images/fondo.png" alt="fondoprovisional" />
        </section>
      </main>
      {/*-comienzo del articulo-*/}
      <section className="section1">
        <h1>Tokenización</h1>
        <h2>Los Tokens Corporativos son una forma digital de acceder a los productos y servicios de las empresas.</h2>
      </section>
      {/*-section segundo texto izquierda h3 -*/}
      {/*-section lado derecho con botones-*/}
      <section className="section2">
        <div className="servicio1">
          <button></button>
          <h4>GM NFT</h4>
          <p>¡Al apoyar financieramente a empresas tokenizadas, los usuarios pueden obtener NFT de GM como recompensa!</p>
        </div>
        <div className="servicio2">
          <button></button>
          <h4>DAF</h4>
          <p>Un token corporativo está vinculado a un DAF (Fondo Autónomo Descentralizado).</p>
        </div>
        <div className="servicio3">
          <button></button>
          <h4>OFERTAS</h4>
          <p>Las empresas emiten ofertas digitales para invitara personas de todo el mundo a ayudar a expandir sus negocios.</p>
        </div>
        <div className="servicio4">
          <button></button>
          <h4>GM DEX</h4>
          <p>Las Fichas Corporativas están construidas en la red principal de Binance Smart Chain Podrás Almacenar de forma seguran Metamask, Binance Wallet o Trust Wallet</p>
        </div>
      </section>
      {/*-grafica lado izquierdo section*/}
      <section className="section3">
        <div className="tokenizar">
          <div className="tokenizar1"></div>
          <div className="tokenizar2">
            <h1>Tokenizar</h1>
            <h2>Las empresas que cuentan con una estructura legal pueden emitir tokens de activos productivos, que pueden ser adquiridos por los usuarios para ayudar a financiar sus procesos y realizar inversiones seguras.</h2>
            <button>Ver video</button>
          </div>
        </div>
      </section>
      {/*-fin articulo y comienza nueva seccion*/}
      <section className="usuario">
        <div className="comentario1">
          <h2>GM Holding</h2>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
          <button>Ofertar</button>
        </div>
        <div className="comentario2">
          <h2>Coccoloba SAS</h2>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
          <button>Ofertar</button>
        </div>
        <div className="comentario3">
          <h2>Kubitech SAS</h2>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
          <button>Ofertar</button>
        </div>
        <div className="comentario4">
          <h2>Deko Bambu</h2>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
          <button>Ofertar</button>
        </div>
        <div className="comentario5">
          <h2>ID FACTORY SAS</h2>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
          <button>Ofertar</button>
        </div>
        <div className="comentario6">
          <h2>Avante Jet SAS</h2>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
          <button>Ofertar</button>
        </div>
      </section>
      {/*-seccion inferior con article-*/}
      <section className="inferior">
        <h1> PREGUNTAS FRECUENTES </h1>
        <div className="pregunta">
          <div className="pregunta2">
            <button>¿Cómo funciona?</button>
            <button className="botonMas">+</button>
          </div>
          <div className="pregunta1">
            <button>¿Cómo funciona?</button>
            <p>
              es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
              económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
            </p>
          </div>
          <div className="pregunta2">
            <button>¿Cómo funciona?</button>
            <button className="botonMas">+</button>
          </div>
          <div className="pregunta3">
            <button>¿Cómo funciona?</button>
            <button className="botonMas">+</button>
          </div>
          <div className="pregunta4">
            <button>¿Cómo funciona?</button>
            <button className="botonMas">+</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
