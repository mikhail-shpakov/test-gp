
import './App.css';
import Header from "../../container/Header/Header";
import Home from "../../container/Home/Home";
import Contacts from "../../container/Contacts/Contacts";
import Catalog from "../../container/Catalog/Catalog";
import CartList from '../../container/CartList/CartList';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import React from "react";

const main = [
  {"link" : "/" , "name" : "Главная"}, 
  {"link" : "/catalog", "name" : "Каталог"}, 
  {"link" : "/contact" ,"name" : "Контакты"}
];

function App() {
    return (
      <div className="container">
        <Router>
          <Header main={main}/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/catalog" element={<Catalog/>}/>
            <Route path="/contact" element={<Contacts/>}/>
            <Route path="/cart" element={<CartList/>}/>
          </Routes>
        </Router>  
      </div>
    )
}

export default App;
