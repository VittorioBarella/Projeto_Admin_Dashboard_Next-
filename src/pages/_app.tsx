import "@fortawesome/fontawesome-free/css/all.min.css";
import "tailwindcss/tailwind.css";
import { AppProvider } from "../data/context/AppContext";
import { AuthProvider } from "../data/context/AuthContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AuthProvider>
  );
}

export default MyApp;
