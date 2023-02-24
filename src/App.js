import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './com/Contact';
import Home from './com/Home';
import Navbar from './com/Navbar';
import NoPageFound from "./com/NoPageFound";
import IndexRouter from './com/IndexRouter';
import HomeRouter from './com/HomeRouter';
import Config from './config';

function App() {


    return (
        <div id='App'>
            <Router>
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path={Config.staticLinks.main.href} element={<IndexRouter />} />
                        <Route path={Config.staticLinks.portfolio.href}>
                            <Route index element={<HomeRouter />} />
                            <Route path='home' element={<Home />} />
                            <Route path='contact' element={<Contact />} />
                        </Route>
                        <Route path="*" element={<NoPageFound />} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
};

export default App;