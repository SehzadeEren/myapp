import React from 'react';
import './App.css';
import Header from './Components/Header/index.js';
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