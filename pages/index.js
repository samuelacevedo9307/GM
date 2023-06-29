import Image from "next/image";
import { Inter } from "next/font/google";
import Footer from "@/Components/Footer";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "../Components/FunctionsContract.js";
import { useSession } from "next-auth/react";
import Headlanding from "@/Components/header.js";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Headlanding></Headlanding>
      
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
                  <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga ganancias al ayudar a expandir empresas sólidas y confiables!</p>
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
                  <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga ganancias al ayudar a expandir empresas sólidas y confiables!</p>
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
                  <p>¡Obtenga acceso a los Activos Productivos Tokenizados y obtenga ganancias al ayudar a expandir empresas sólidas y confiables!</p>
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
          <div className="tokenizar1"></div>
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
            <button type="button" data-toggle="collapse" data-target="#multiCollapseExample4" aria-expanded="false" aria-controls="multiCollapseExample4">¿Cómo funciona?</button>
            <button className="botonMas">+</button>
            <div className="collapse multi-collapse" id="multiCollapseExample4">
              <p>
                es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
              </p>
            </div>
          </div>
          <div className="pregunta1">
            <button type="button" data-toggle="collapse" data-target="#multiCollapseExample5" aria-expanded="false" aria-controls="multiCollapseExample5">
              ¿Cómo funciona?
            </button>
            <div className="collapse multi-collapse" id="multiCollapseExample5">
              <p>
                es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
              </p>
            </div>
          </div>
          <div className="pregunta2">
            <button type="button" data-toggle="collapse" data-target="#multiCollapseExample6" aria-expanded="false" aria-controls="multiCollapseExample6">¿Cómo funciona?</button>
            <button className="botonMas">+</button>
            <div className="collapse multi-collapse" id="multiCollapseExample6">
              <p>
                es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
              </p>
            </div>
          </div>
          <div className="pregunta3">
            <button type="button" data-toggle="collapse" data-target="#multiCollapseExample7" aria-expanded="false" aria-controls="multiCollapseExample7">¿Cómo funciona?</button>
            <button className="botonMas">+</button>
            <div className="collapse multi-collapse" id="multiCollapseExample7">
              <p>
                es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
              </p>
            </div>
          </div>
          <div className="pregunta4">
            <button type="button" data-toggle="collapse" data-target="#multiCollapseExample8" aria-expanded="false" aria-controls="multiCollapseExample8">¿Cómo funciona?</button>
            <button className="botonMas">+</button>
            <div className="collapse multi-collapse" id="multiCollapseExample8">
              <p>
                es una sociedad legalmente constituida bajo las leyes de la República de Colombia cuyo objetivo es la realización de operaciones no reguladas por la Superintendencia Financiera a través de la operación de activos intangibles suscpetibles de valoración económica. A través de Invermint podrás obtener asesoría técnica para la obtención de información educativa en la que se podrán ejecutar actividades de tokenización de toda clase de bienes, especialmente, proyectos de valoración
                económica como por ejemplo proyectos inmobiliarios. Las operaciones de Invermint están respaldadas a nivel contractual y están reguladas por la legislación mercantil, especialmente, para la suscripción de contratos atípicos e innominados en las que se ejecutarán actividades relacionadas con operaciones de inversión diferentes a las bursátiles, de seguros o reguladas por la Superintendencia Financiera.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
