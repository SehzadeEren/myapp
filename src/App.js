import React from 'react';
import './App.css';
import Contact from './Components/Contact.js';
import Header from './Components/Header/index.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from './Components/AppRouter';

function App() {
   return (
     
     <div>
         <Header />
         <AppRouter />
         
      </div>

   );
}

export default App;