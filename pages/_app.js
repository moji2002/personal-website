import "../styles/globals.scss";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }) {
  const toasterStyle = {
    background: "#676cdb",
    fontSize: 20,
    padding: "40px 90px",
    borderRadius: 0,
    color: "#fff",
  };

  return (
    <>
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          style: toasterStyle,
        }}
      />
    </>
  );
}

export default MyApp;
