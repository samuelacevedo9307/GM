


export default function Footer() {
    return(
    <footer>
        <div className="redessociales">
          <img className="logo2" src="img/logofinal.png" alt="logofinal" />
          <span className="redes">
            <a href="#"><i className="fa-brands fa-square-facebook" /></a>
            <a href="#"><i className="fa-brands fa-youtube" /></a>
            <a href="#"><i className="fa-brands fa-twitter" /></a>
            <a href="#"><i className="fa-brands fa-pinterest" /></a>
            <a href="#"><i className="fa-brands fa-instagram" /></a>
          </span>
        </div>
        {/*-enlaces del footer*/}
        <div className="footer">
          <nav className="navegacion1">
            <a href="#">Home</a>
            <a href="#">Pricing</a>
            <a href="#">Product</a>
            <a href="#">About Us</a>
          </nav>
        </div>
        <div>
          <nav className="navegacion2">
            <a href="#">Careers</a>
            <a href="#">Community</a>
            <a href="#">Privacy policy</a>
          </nav>
        </div>
        <div className="formulario">
          <form action="#" method="post">
            <input type="email" name="email" autoComplete="off" placeholder="Update in your inbox..." />
            <button>Go</button>
          </form>
          <p>Copyrigth 2020. All Rights Reserved</p>
        </div>
      </footer>
      )

}