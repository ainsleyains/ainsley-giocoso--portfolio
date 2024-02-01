import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Works from './components/Works';
function App() {
    return (
        <div className='App'>
            <Navbar />
            <Hero />
            <About />
            {/* <Skills /> */}
            <Works />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
