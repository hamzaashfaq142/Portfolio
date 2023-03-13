import Contact from './com/Contact';
import Home from './com/Home';
import Navbar from './com/Navbar';

function App() {


    return (
        <div id='App' data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset="0" tabIndex="0">
            <Navbar />
            <Home />
            <Contact />
        </div>
    )
};

export default App;