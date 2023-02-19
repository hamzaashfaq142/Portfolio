import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './com/Home';
import Navbar from './com/Navbar';

function App() {
  return (
    <div id='App' style={{backgroundColor : "rgb(18, 0, 73)"}}>
            <Router>
                <Navbar />
                    {/* <Routes>
                        <Route path='/'>
                            <Route index element={<Home />} />
                        </Route>
                    </Routes> */}
            </Router>
        </div>
  )
};

export default App;