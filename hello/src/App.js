import React from "react";
import { Route,Routes,BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Header from "./components/Header";
import Teams from "./Teams";
import Feature from "./Feature";
import Prices from "./Prices";

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="teams" element={<Teams/>} />
                    <Route path="prices" element={<Prices/>} />
                    <Route path="feature" element={<Feature/>} />
                </Route>
            </Routes>
        </BrowserRouter>
            
    );
}

export default App;
