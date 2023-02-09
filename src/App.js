import './App.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav';
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer';
import Skills from './components/skills/Skills';



function App() {
  return (
   <>
      <Header />
      <Nav />
      <About />
      <Skills/>
      <Portfolio />
      <Contact />
      <Footer />
   </>
  );
}

export default App;
