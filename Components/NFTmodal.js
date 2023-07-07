import Image from "next/image";
import { Inter } from "next/font/google";
import Headlanding from "@/Components/headlanding";
import Footer from "@/Components/Footer";
import WalletConnect from "@/Components/ConnectionWallet";
import { _mintNFT, _setActive, _getwalletTokens, _getTokenMeta, _setAddressForMint, _getMinters } from "./FunctionsContract.js";
import { useState } from "react";
import Images from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Nftmodal() {
  const [adressbool, setadressbool] = useState(false);
  const [mintbool, setmintbool] = useState(false);
  async function startMint() {
    const result = await _mintNFT("Gm", "Phase 1", "https://www.construyehogar.com/wp-content/uploads/2014/06/Plano-de-apartamento-peque%C3%B1o-moderno-Tiziana-Caroleo-en-Pinterest.jpg")
      .then((e) => {
        console.log(e);
        setmintbool(true);
        setadressbool(false);
      })
      .catch((e) => {
        console.log("Error = ", e);
      });
  }
  async function SetActive() {
    const result = await _setActive(true)
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
        setadressbool(true);
        setmintbool(false);
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
                <div className="modalNft">
                  <div className="modal1">
                    <br></br>
                    <h2>Set Address</h2>
                    <p>Send your wallet for mint</p>
                    <button onClick={SetAddressForMint}>Set</button>
                    <br></br>
                    <img className="serp1" src="/images/serpentina.png" alt="serp1" />
                    <img className="serp2" src="/images/serpentina.png" alt="serp2" />
                  </div>
                </div>
              ) : (
                <>
                  {!mintbool == true ? (
                    <div className="modalNft">
                      <div className="modal1">
                        <img className="compra1" src="/images/NFT GM FINANCE.gif" alt="nft1" />
                        <h2>¡Gracias por Registrarte!</h2>
                        <button onClick={startMint}>RECLAMAR</button>
                        <img className="serp1" src="/images/serpentina.png" alt="serp1" />
                        <img className="serp2" src="/images/serpentina.png" alt="serp2" />
                      </div>
                    </div>
                  ) : (
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
