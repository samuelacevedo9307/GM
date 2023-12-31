import { Inter } from "next/font/google";
import { _approveUsdt, _approveGm, _setTokensAtContract, _setAddressContractGmToken, _setAddressContractUsdtToken, _buyTokens, _widthdrawGmToken, _widthdrawUsdtToken, _getSupply, _getUsdtInContract, _getGmAddress, _getUsdtAddress, _getPricePerToken } from "../ConexionBlockchain/DispersionContractFunctions.js";
import { useState, useEffect } from "react";
import Web3 from "web3";

const inter = Inter({ subsets: ["latin"] });

export default function Dispersionmodal() {
  //--------------comprar tokens---------------------
  const [usdtvalue, setusdt] = useState(0);
  const [gmvalue, setgm] = useState(0);
  const [tokenprice, settokenprice] = useState(1);
  useEffect(() => {
    async function loadData() {
      const value = await GetPricePerToken();
      settokenprice(parseInt(value));
    }
    loadData();
  }, []);

  async function handlesubmit(e) {
    e.preventDefault();
    const res = await approveUsdt(parseInt(usdtvalue))
      .then((e) => {
        console.log(e);
        handleSuccessApprove();
      })
      .catch((e) => {
        console.log(e.error);
      });
  }
  const handleSuccessApprove = async () => {
    const res = await buyTokens(parseInt(usdtvalue));
  };

  async function buyTokens(_value) {
    const result = await _buyTokens(_value)
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
  async function addtoken(){
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
    
        const tokenAddress = '0x8CA7aC87dE5D9DAf1A263cE5b844755B315A19F6';
        const tokenSymbol = 'GMS';
    
        const params = {
          method: 'wallet_watchAsset',
          params: {
            type: 'ERC20',
            options: {
              address: tokenAddress,
              symbol: tokenSymbol,
              decimals: 3,
              image: '', // URL de la imagen del token si está disponible
            },
          },
        };
    
        await window.ethereum.request(params);
      } catch (error) {
        console.error('Error al conectar a Web3:', error);
      }
    } else {
      console.error('Web3 no está disponible en este navegador.');
    }
    
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
    return result;
  }

  return (
    <>
      <div className="modal fade" id="comprar" tabIndex={-1} aria-labelledby="exampleModalLabel2" aria-hidden="true">
       
        <form className="compraGm" onSubmit={handlesubmit}>
          <div>
            <div className="gm1">
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              <p>Comprar GMCOINS</p>
              <input
                className="mb-4"
                type="number"
                placeholder={"USDT"}
                value={usdtvalue}
                onChange={(e) => {
                  setusdt(e.target.value);
                  setgm(e.target.value / tokenprice);
                }}
              ></input>
              <input
                readOnly
                className=""
                value={usdtvalue / tokenprice}
                placeholder={usdtvalue / tokenprice}
                on={(e) => {
                  setgm(e.target.value);
                }}
              ></input>

              <p>Obtienes 100 GMC por 100USD</p>
              <button type="submit" className="botonCompraGm">
                Continuar
              </button>
              <button type="button" className="botonCompraGm" onClick={()=>{addtoken()}}>
                añadir token a Metamask
              </button>

              <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Al continuar, aceptas nuestras politicas de uso</a>
            </div>
          </div>
        </form>
        <div className="modal-dialog" style={{display:"none"}}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel2">
                Comprar
              </h5>
            </div>
            <div className="modal-body"></div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
