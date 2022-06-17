import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomePage from '../components/WelcomePage';
import HomePage from '../components/HomePage';
import PersonPage from '../components/PersonPage';
import AboutPage from '../components/AboutPage';
import CrudDemo from '../components/CrudDemo';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import DetailCard from '../components/DetailCard';

const DemoRouter = () => {
    return(
    <BrowserRouter>
        <Header />
        <Routes>
            <Route path="*"       element={<NotFoundPage />} /> 
            <Route path="/"       element={<WelcomePage />} />
            <Route path="/home"   element={<HomePage />} /> 
            <Route path="/person" element={<PersonPage />} /> 
            <Route path="/about"  element={<AboutPage />} /> 
            <Route path="/crud"   element={<CrudDemo />}/> 
            <Route path="/detail" element={<DetailCard/>} />
        </Routes>
    </BrowserRouter>
);}

export default DemoRouter;