import Image from "next/image";
import { Inter } from "next/font/google";
import Headlanding from "@/Components/headlanding";
import Footer from "@/Components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Headlanding/>
      <header>
        <img src="img/logo.svg" alt="logotipo" />
        <nav className="menu">
          <a href="#">Pricing</a>
          <a href="#">Product</a>
          <a href="#">About Us</a>
          <a href="#">Careers</a>
          <a href="#">Community</a>
        </nav>
        <button>Get Started</button>
        <i className="fa-sharp fa-solid fa-bars" />
      </header>
      {/*section izquierda con h1 texto-*/}
      <main>
        <section className="section1">
          <h1>Bring everyone together to build better products.</h1>
          <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the large team goals in view</p>
          <button>Get Started</button>
          <button>Get Started</button>
        </section>
        {/*-grafica lado derecho section*/}
        <section>
          <img className="grafica" src="img/illustration-intro.png" alt="graficos" />
        </section>
      </main>
      {/*-comienzo del articulo-*/}
      <section>
        <article>What they've said</article>
        <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
      </section>
      {/*-section segundo texto izquierda h3 -*/}
      {/*-section lado derecho con botones-*/}
      <section className="section2">
        <div>
          <button>heading1</button>
          <div className="fondo">
            <span>Track company-wide progress</span>
          </div>
          <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
        </div>
        <div>
          <button>heading2</button>
          <div className="fondo">
            <span>Advance built-in reports</span>
          </div>
          <p>Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.</p>
        </div>
        <div>
          <button>heading3</button>
          <div className="fondo">
            <span> Everything you need in one place </span>
          </div>
          <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
        </div>
        <div>
          <button>heading3</button>
          <div className="fondo">
            <span> Everything you need in one place </span>
          </div>
          <p>Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.</p>
        </div>
      </section>
      {/*-grafica lado izquierdo section*/}
      <section className="section3">
        <img className="grafica" src="img/illustration-intro.png" alt="graficos" />
        <div>
          <h1>Bring everyone together to build better products.</h1>
          <p>Manage makes it simple for software teams to plan day-to-day tasks while keeping the large team goals in view</p>
          <button>Get Started</button>
        </div>
      </section>
      {/*-fin articulo y comienza nueva seccion*/}
      <section className="usuarios">
        <div className="comentarios1">
          <img src="img/avatar-anisha.png" alt="anisha" />
          <h4> Anisha </h4>
          <p>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
        </div>
        <div className="comentarios2">
          <img src="img/avatar-ali.png" alt="ali" />
          <h4> Ali Bravo </h4>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
        </div>
        <div className="comentarios3">
          <img src="img/avatar-richard.png" alt="richard" />
          <h4> Richard </h4>
          <p>"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone i talk to!"</p>
        </div>
        <div className="comentarios1">
          <img src="img/avatar-anisha.png" alt="anisha" />
          <h4> Anisha </h4>
          <p>"Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated."</p>
        </div>
        <div className="comentarios2">
          <img src="img/avatar-ali.png" alt="ali" />
          <h4> Ali Bravo </h4>
          <p>"We have been able to cancel so many other subscriptions since using manage. There is no more croos-channel confusion and everyone is much more focused."</p>
        </div>
        <div className="comentarios3">
          <img src="img/avatar-richard.png" alt="richard" />
          <h4> Richard </h4>
          <p>"Manage allows us to provide structure and process. It keeps us organized and focused. I can't stop recommending them to everyone i talk to!"</p>
        </div>
      </section>
      {/*-seccion inferior con article-*/}
      <section className="inferior">
        <div className="menuInferior1">
          <button>Get Started</button>
          <button>Get Started</button>
        </div>
        <div className="menuInferior2">
          <button>Get Started</button>
          <button>Get Started</button>
          <button>Get Started</button>
        </div>
      </section>
      <section>
        <article>What they've said</article>
        <p>See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.</p>
      </section>
      <Footer />
    </div>
  );
}
