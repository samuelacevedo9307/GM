import "@/styles/style.css";
import { SessionProvider } from "next-auth/react";
import "@/node_modules/bootstrap/dist/css/bootstrap.min.css";
import Mainjs from "@/Components/main";
import { useEffect } from "react";
import "@/node_modules/bootstrap-icons/font/bootstrap-icons.css";
import 'glightbox/dist/css/glightbox.min.css';
import "aos/dist/aos.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Mainjs();
  });
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
