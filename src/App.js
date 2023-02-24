import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './com/Home';
import Navbar from './com/Navbar';
import NoPageFound from "./com/NoPageFound";

function App() {
    return (
        <div id='App'>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/'>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path="*" element={<NoPageFound />}/>
                </Routes>
            </Router>
        </div>
    )
};

export default App;