import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Clients from "./Clients";
import Contact from "./Contact";
import Feature from "./Feature";
import Home from "./Home";
import Prices from "./Prices";
import Teams from "./Teams";

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route index element={<Home/>} />
                    <Route path="contact" element={<Contact/>} />
                    <Route path="teams" element={<Teams/>} />
                    <Route path="prices" element={<Prices/>} />
                    <Route path="clients" element={<Clients/>} />
                    <Route path="feature" element={<Feature/>} />
                </Route>
            </Routes>
        </BrowserRouter>
            
    );
}

export default App;
