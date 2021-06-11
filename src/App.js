import { Router } from "@reach/router";
import styled, { createGlobalStyle } from 'styled-components';

import { NotFound } from "./components/NotFound.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/Main.js";
import { About } from "./components/About.js"
import { Work } from "./components/Work.js";
import { Area } from "./components/Area.js";
import { Contact } from "./components/Contact.js";
import { Sitemap } from './components/Sitemap.js';
import { Footer } from "./components/Footer.js";

import { OnRouteChange } from './components/OnRouteChange.js';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Header/>
      <FlexRouter>
        <NotFound default/>
        <Main path="/"/>
        <About path="/about"/>
        <Work path="/work"/>
        <Area path="/work/:areaId"/>
        <Contact path="/contact"/>
        <Sitemap path="/sitemap"/>
      </FlexRouter>
      <OnRouteChange/>
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

  .App {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  h1, h2, h3, p, nav a, cite, label {
    font-family: "Calibri";
    text-transform: uppercase;
  }

  p, h3, label {
    font-size: small;
  }
`;

const FlexRouter = styled(Router)`
  flex: 1;
  display: flex;
  flex-direction: column;
`;