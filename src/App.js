import Contact from './com/Contact';
import Home from './com/Home';
import Navbar from './com/Navbar';
import Footer from './com/Footer';
import About from './com/About';

function App() {


    return (
        <>
            <Navbar />
            <div id='App'>
                <Home />
                <About />
                <Contact />
                <Footer />
            </div>
        </>
    )
};

export default App;