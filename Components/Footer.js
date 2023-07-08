import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="/images/logoGmFinance2.png" alt="logotipo" />
        <div className="redesSociales">
          <span className="redes">
            <a href="#">
              <i className="fa-brands fa-square-facebook" />
            </a>
            <a href="#">
              <i className="fa-brands fa-youtube" />
            </a>
            <a href="#">
              <i className="fa-brands fa-twitter" />
            </a>
            <a href="#">
              <i className="fa-brands fa-pinterest" />
            </a>
            <a href="#">
              <i className="fa-brands fa-instagram" />
            </a>
          </span>
        </div>
      </div>

      {/*-enlaces del footer*/}
      <div className="footer">
        <nav className="navegacion1">
          <h2>Menú</h2>
          <a href="#section1">tokenizacion</a>
          <a href="#rankin">Ranking</a>
          <a href="#inferior">FAQ</a>
          <a href="#">Conectar Wallet</a>
        </nav>
      </div>
      <div className="footer">
        <nav className="navegacion1">
          <h2>Social</h2>
          <Link href={`https://web.facebook.com/TokenGMHolding`} passHref legacyBehavior>
            <a href="https://web.facebook.com/TokenGMHolding">Facebook</a>
          </Link>
          <Link href={`https://www.instagram.com/gm_holding/?hl=es`} passHref legacyBehavior>
            <a href="https://www.instagram.com/gm_holding/?hl=es">Instagram</a>
          </Link>
          <Link href={`https://twitter.com/GMHOLDING09`} passHref legacyBehavior>
            <a href="https://twitter.com/GMHOLDING09">Twitter</a>
          </Link>
          <Link href={`https://wa.me/573128152713`} passHref legacyBehavior>
            <a href="https://wa.me/573128152713">Whatsapp</a>
          </Link>
        </nav>
      </div>
      <div className="formulario">
        <Link href={`https://blockfy.app/`} passHref legacyBehavior>
          <p href="https://blockfy.app/" target="blank">
            powered by: Block<span>Fy</span>
          </p>
        </Link>
      </div>
    </footer>
  );
}
