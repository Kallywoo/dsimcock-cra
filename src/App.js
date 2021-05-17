import { Router } from "@reach/router";
import { createGlobalStyle } from 'styled-components';

import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { About } from "./components/About.js"
import { Work } from "./components/Work.js";
import { Residential } from "./components/Residential.js";
import { Industrial } from "./components/Industrial.js";
import { Contact } from "./components/Contact.js";
import { Sitemap } from './components/Sitemap.js';
import { Footer } from "./components/Footer.js";

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <Router>
        <Main path="/"/>
        <About path="/about"/>
        <Work path="/work"/>
        <Residential path="/residential"/>
        <Industrial path="/industrial"/>
        <Contact path="/contact"/>
        <Sitemap path="/sitemap"/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }

  h1, h2, h3, p, nav a, cite, label {
    font-family: "Calibri";
    text-transform: uppercase;
  }

  p, h3, label {
    font-size: small;
  }
`;