import React from 'react';
import { Dashboard } from './Components/Dashboard/Dashboard';
import { Header } from './Components/Header/Header';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Extrato } from './Components/Extrato/Extrato';
import { GlobalStorage } from './Components/UserContex/UserContex';


function App() {
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='extrato' element={<Extrato/>} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
}

export default App;
