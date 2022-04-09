import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { AppProvider } from './../data/context/AppContext';

function MyApp({ Component, pageProps }) {
  <AppProvider>
    <Component {...pageProps} />
  </AppProvider>

}

export default MyApp
