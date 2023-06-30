import "@/styles/style.css";
import { SessionProvider } from "next-auth/react";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";

import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css" ;
import { MoralisProvider } from "react-moralis";

export default function App({ Component, pageProps }) {
  return (
    <>
      <MoralisProvider initializeOnMount={false}>
        <SessionProvider session={pageProps.session}>
          <Component {...pageProps} />
        </SessionProvider>
      </MoralisProvider> 

    </>
  );
}
