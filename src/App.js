import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import EnquirePage from './components/EnquirePage';
import FeePage from './components/FeePage';
import AdmissionsPage from './components/AdmissionsPage';
import PlaygroundPage from './components/PlaygroundPage';
import ErrorPage from './components/ErrorPage';
import './style/App.css';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/enquire" element={<EnquirePage />} />
                <Route path="/fee" element={<FeePage />} />
                <Route path="/admissions" element={<AdmissionsPage />} />
                <Route path="/playground" element={<PlaygroundPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </Router>
    );
};

export default App;
