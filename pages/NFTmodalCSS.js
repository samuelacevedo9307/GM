import Image from "next/image";
import { Inter } from "next/font/google";
import Headlanding from "@/Components/headlanding";
import Footer from "@/Components/Footer";
import WalletConnect from "@/Components/ConnectionWallet";
import { _approveUsdt, _approveGm, _setTokensAtContract, _setAddressContractGmToken, _setAddressContractUsdtToken, _buyTokens, _widthdrawGmToken,_widthdrawUsdtToken, _getSupply, _getUsdtInContract, _getGmAddress, _getUsdtAddress, _getPricePerToken } from "../ConexionBlockchain/DispersionContractFunctions.js";
import { useState, useEffect } from "react";
import Images from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Nftmodal() {
  const [adressbool, setadressbool] = useState(false);
  const [mintbool, setmintbool] = useState(false);
  useEffect(() => {
    var miModal = new bootstrap.Modal(document.getElementById("miModal"));
    miModal.show();
  }, []);

  async function buyTokens() {
    const result = await _buyTokens(100)
      .then((e) => {
        console.log(e);
        
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function approveUsdt(_value) {
    const result = await _approveUsdt(_value)
      .then((e) => {
        console.log(e);
        
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function approveGm(_value) {
    const result = await _approveGm(_value)
      .then((e) => {
        console.log(e);
        
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetTokensToContract(_value) {
    const result = await _setTokensAtContract(_value)
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetAddressGm(_value) {
    const result = await _setAddressContractGmToken(_value)
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetAddressUsdt(_value) {
    const result = await _setAddressContractUsdtToken(_value)
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function widthdrawGm() {
    const result = await _widthdrawGmToken(_value)
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function widthdrawUsdt() {
    const result = await _widthdrawUsdtToken()
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function getSupply() {
    const result = await _getSupply()
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function getUsdtInContract() {
    const result = await _getUsdtInContract()
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function getGmTokenAddress() {
    const result = await _getGmAddress()
      .then((e) => {
        console.log(result);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function getUsdtAddress() {
    const result = await _getUsdtAddress()
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
  async function GetPricePerToken() {
    const result = await _getPricePerToken()
      .then((e) => {
        console.log(e);
        return e;
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }

 
  return (
    <>
      <div class="modal fade" id="miModal" tabindex="-1" aria-labelledby="miModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="miModalLabel">
                Get your Reward
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              {!adressbool && !mintbool ? (
                <>
                  <div className="compraGm">
                    <div>
                      <div className="gm1">
                        <p>Comprar GMCOINS</p>
                        <button>12850</button>
                        <button>12850</button>
                        <button>Obtienes 100 GMC por 100USD</button>
                        <button className="botonCompraGm" onClick={buyTokens}>
                          Continuar
                        </button>
                        <a>Al continuar, aceptas nuestras politicas de uso</a>
                      </div>
                    </div>
                  </div>
                  <div className="modalNft">
                    <div className="modal1">
                      <img className="compra1" src="/images/NFT GM FINANCE.gif" alt="nft1" />
                      <h2>¡Gracias por Registrarte!</h2>
                      <button >RECLAMAR</button>
                      <img className="serp1" src="/images/serpentina.png" alt="serp1" />
                      <img className="serp2" src="/images/serpentina.png" alt="serp2" />
                    </div>
                  </div>
                  <div className="modalNft">
                    <div className="modal1">
                      <br></br>
                      <h2>Set Address</h2>
                      <p>Send your wallet for mint</p>
                      <button >Set</button>
                      <br></br>
                      <img className="serp1" src="/images/serpentina.png" alt="serp1" />
                      <img className="serp2" src="/images/serpentina.png" alt="serp2" />
                    </div>
                  </div>
                  <div className="modalNft">
                    <div className="modal1">
                      <br></br>
                      <h2>Congrats</h2>
                      <p>you Mint successfuly</p>
                      <br></br>
                      <img className="serp1" src="/images/serpentina.png" alt="serp1" />
                      <img className="serp2" src="/images/serpentina.png" alt="serp2" />
                    </div>
                  </div>
                  <div className="usuario">
                    <div className="comentario1">
                      <h2>Congrats</h2>
                      <p>you Mint successfuly</p>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {!mintbool == true ? (
                    <div className="usuario">
                      <div className="comentario1">
                        <h2>Claim</h2>
                        <img src="https://www.forbes.com/advisor/wp-content/uploads/2022/08/bored_ape_yacht_club.jpeg-1.jpg" width={130} alt="logotipo" />
                        <p>Get your Nft</p>
                        <button >Mint</button>
                      </div>
                    </div>
                  ) : (
                    <div className="usuario">
                      <div className="comentario1">
                        <h2>Congrats</h2>
                        <p>you Mint successfuly</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
