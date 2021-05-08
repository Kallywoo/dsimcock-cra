import {Router} from "@reach/router";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import About from "./components/About.js"
import Work from "./components/Work.js";
import Residential from "./components/Residential.js";
import Industrial from "./components/Industrial.js";
import Contact from "./components/Contact.js";
import Sitemap from './components/Sitemap.js';
import Footer from "./components/Footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Main path="/"/>
        <About path="/about.html"/>
        <Work path="/work.html"/>
        <Residential path="/residential.html"/>
        <Industrial path="/industrial.html"/>
        <Contact path="/contact.html"/>
        <Sitemap path="/sitemap.html"/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
