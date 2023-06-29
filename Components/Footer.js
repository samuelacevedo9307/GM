


export default function Footer() {
    return(
    <footer>
      <div>
        <img src="/images/LogoGmFinance2.png" alt="logotipo" />
        <div className="redesSociales">
          <span className="redes">
            <a href="#"><i className="fa-brands fa-square-facebook" /></a>
            <a href="#"><i className="fa-brands fa-youtube" /></a>
            <a href="#"><i className="fa-brands fa-twitter" /></a>
            <a href="#"><i className="fa-brands fa-pinterest" /></a>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
          </span>
        </div>
      </div>
        
        {/*-enlaces del footer*/}
        <div className="footer">
          <nav className="navegacion1">
            <h2>Menu</h2>
            <a href="#">tokenizacion</a>
            <a href="#">Ranking</a>
            <a href="#">Preguntas Frecuentes</a>
            <a href="#">Conectar Wallet</a>
          </nav>
        </div>
        <div className="footer">
          <nav className="navegacion1">
            <h2>Social</h2>
            <a href="#">Facebook</a>
            <a href="#">LinkedIn</a>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
          </nav>
        </div>
        <div className="formulario">
          <h2>Suscribirse a nuestro sitio</h2>
          <form action="#" method="post">
            <input type="email" name="email" autoComplete="off" placeholder="Correo electronico" />
            <button>Suscribirse</button>
            <p>Copyrigth 2020. All Rights Reserved</p>
          </form>
        </div>
      </footer>
      )

}