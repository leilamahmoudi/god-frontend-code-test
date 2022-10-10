import type { AppProps } from "next/app";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../public/css/styles.css";

const VolvoApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default VolvoApp;
