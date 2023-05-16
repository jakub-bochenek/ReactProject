import './App.css';

import Products from "./components/Products";
import Payments from "./components/Payments";


import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Products</Link>
                        </li>
                        <li>
                            <Link to="/payments">Go to payments</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Products/>}/>
                    <Route path="/payments" element={<Payments/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;