import { TranslationProvider } from "../components/TranslationProvider/TranslationProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <TranslationProvider>
      <Component {...pageProps} />
    </TranslationProvider>
  );
}

export default MyApp;
