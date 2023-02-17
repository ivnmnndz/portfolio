import "../styles/index.css";
import "../styles/App.css";
import "../styles/About.css";
import "../styles/Contact.css";
import "../styles/Hero.css";
import "../styles/ProjectCard.css";
import "../styles/Projects.css";
import "../styles/Contact.css";
import "../styles/Modal.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { CssBaseline } from "@mui/material";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
