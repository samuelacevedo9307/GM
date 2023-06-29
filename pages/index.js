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
import Registro from "./Registro.js";
import LoginPage from "./login.js";


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
      <Headlanding/>
      <header>
        <img src="/images/LogoGmFinance.png" alt="logotipo" />
        <div></div>
        <nav className="menu">
          <a href="#">tokenizacion</a>
          <a href="#">Ranking</a>
          <a href="#">FAQ</a>
        </nav>
        <WalletConnect/>
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
                      <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample3" aria-expanded="false" aria-controls="multiCollapseExample3">Crear cuenta
                      </button>
                      <button className="botonLogin" type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">Iniciar Sesión
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
      {/*------seccion carousel---------*/}
      <main>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                            <section className="section">
                              <div>
                                <h1>Empresas Tokenizadas</h1>
                                  <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga
                                      ganancias al ayudar a expandir empresas sólidas y confiables!</p>
                                <button>Ofertar</button>
                                </div>
                              {/*-grafica lado derecho section*/}
                              <div>
                                <img className="fondo" src="/images/imgBanner2.png" alt="banner1" />
                              </div>
                            </section>
                      </div>
                      <div class="carousel-item">
                            <section className="section">
                              <div>
                                <h1>Empresas Tokenizadas</h1>
                                  <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga
                                      ganancias al ayudar a expandir empresas sólidas y confiables!</p>
                                <button>Ofertar</button>
                                </div>
                              {/*-grafica lado derecho section*/}
                              <div>
                                <img className="fondo" src="/images/imgBanner2.png" alt="banner1" />
                              </div>
                            </section>
                      </div>
                      <div class="carousel-item">
                            <section className="section">
                              <div>
                                <h1>Empresas Tokenizadas</h1>
                                  <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga
                                      ganancias al ayudar a expandir empresas sólidas y confiables!</p>
                                <button>Ofertar</button>
                                </div>
                              {/*-grafica lado derecho section*/}
                              <div>
                                <img className="fondo" src="/images/imgBanner2.png" alt="banner1" />
                              </div>
                            </section>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
                </div>
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
      {/*------------ video tokenizacion seccion 3-_-------------*/}
      <section className="section3">
        <div className="tokenizar">
        <div className="tokenizar1">
        </div>
        <div className="tokenizar2">
          <h1>Tokenizar</h1>
          <h2>Las empresas que cuentan con una estructura legal pueden emitir tokens de activos productivos, que pueden ser adquiridos por los usuarios para ayudar a financiar sus procesos y realizar inversiones seguras.</h2>
          <button>Ver video</button>
        </div>
        </div>
      </section>
      {/*------------texto ranking-_-------------*/}
      <section className="section1">
        <h1>Ranking</h1>
        <h2>Los tokens productivos están vinculados a la facturación de empresas de diferentes sectores que ofrecen productos o servicios probados y validados en el mercado.</h2>
      </section>
      {/*------------seccion ranking-_-------------*/}
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





      <section id="preguntas">
        <h1>¿ PREGUNTAS ?</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-lg-10 align-self-center">
            <div className="container-preguntas">
              <div className="preguntas">
                <div className="container-fluid">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    ¿Cómo funciona legalmente Invermit ? ¿Es legal? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent">
                  <div className=" p-4">
                    <span className="text-muted">
                      Invermint es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos
                      de valoración económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent2" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    ¿Por qué sumarte a las finanzas del futuro? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent2">
                  <div className=" p-4">
                    <span className="text-muted">
                      Invermint facilita la inversión en el sector inmobiliario y productivo en Colombia. Nuestra misión es darte acceso a invertir en proyectos productivos seleccionados por nuestro equipo de profesionales, que ofrecen un activo eficiente con la mejor relación riesgo / rentabilidad. El inversor obtendrá los beneficios en forma de dividendos de la explotación del proyecto en el que invierta a través de una participación tokenizada. La digitalización de la participación en forma
                      de token ofrece ventajas únicas.
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent3" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    ¿Cómo es el proceso de inversión? ¿Cuánto tarda? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent3">
                  <div className=" p-4">
                    <span className="text-muted">Es muy rápido y sencillo, te puede llevar unos pocos minutos y 3 sencillos pasos: · 1. Registrate y realiza el proceso de validación de identidad. 2.Selecciona los tokens que deseas y realiza la compra desde tu wallet. 3. Firma el Acuerdo de Inversión.</span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent4" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    ¿Puedo vender mi token? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent4">
                  <div className=" p-4">
                    <span className="text-muted">Ventadirecta a un tercero &#40; siempre que esté acreditado en nuestra plataforma &#41;. Venta a través de un Pool de liquidez &#40;ídem&#41;.</span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent5" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    ¿Cómo declarar los intereses recibidos? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent5">
                  <div className=" p-4">
                    <span className="text-muted">
                      Antes de establecer los aspectos tributarios relevantes, es importante señalar que en Colombia las operaciones con criptoactivos no están del todo regulados. Así las cosas, a pesar de no contar con una regulación específica para este tipo de activos intangibles, existen algunas medidas regulatorias que se han tomado para proteger a los usuarios y garantizar la estabilidad financiera. En septiembre de 2020, la Superintendencia Financiera de Colombia emitió una circular en la
                      que se establecen algunas medidas para el uso de los cripto activos en le país. Esta circular establece que los cripto activos no son considerados como moneda legal en curso y por lo tanto no pueden ser utilizados para pagar bienes y servicios. No obstante, la legislación colombiana prevé la posibilidad de realizar operaciones contractuales como la permuta para este tipo de activos. La Superintendencia Financiera estableció que las personas pueden invertir en cripto activos
                      como forma de inversión y se deberán cumplir con las obligaciones tributarias establecidas por la legislación colombiana. En Colombia, los cripto activos están sujetos a la regulación tributaria, la DIAN ha emitido varias resoluciones y conceptos en relación con al tributación de los criptoactivos, en términos generales, estos son considerados como un activo financiero y, como tal, están sujetos a impuestos. Las ganancias obtenidas por la compra y venta de cripto activos
                      están sujetos al impuesto sobre la renta al igual que cualquier otra ganancia de capital. La Resolución 000010 de 2021 de la DIAN estableció los requisitos para la declaración y pago de impuestos sobre cripto activos en Colombia
                    </span>
                  </div>
                </div>
              </div>
              <div className="preguntas">
                <div className="container-fluid">
                  <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent6" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    ¿Cómo pagamos los intereses / dividendos? <i className="bi bi-chevron-down"></i>
                  </button>
                  <hr></hr>
                </div>
                <div className="collapse" id="navbarToggleExternalContent6">
                  <div className=" p-4">
                    <span className="text-muted">Puedes escoger, o reclamar tus dividendos trimestrales a través de la web y recibirlos en tu wallet o reinvertirlo en otras oportunidades para así poder alcanzar una mayor rentabilidad gracias al interés compuesto. Los intereses son generados en USDT, una stablecoin que equivale a un dólar. Así evitamos las fluctuaciones de otras criptomonedas y obtienen sus rendimientos íntegros.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>





      
      <Footer />
    </div>
  );
}
