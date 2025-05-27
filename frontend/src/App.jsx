import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home"; // Adjust the import path as necessary
import Footer from "./components/Footer/Footer";
import MoodTracker from "./pages/MoodTracker/MoodTracker";
import JournalPage  from "./pages/Journal/Journal";

function App(){
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mood-tracker" element={<MoodTracker />} />
                    {/* Add other routes as needed */}
                    <Route path="/journal" element={<JournalPage />} />
                </Routes>
                <Footer />
                
                
            </BrowserRouter>
        


        </div>
        
    );

}

export default App;