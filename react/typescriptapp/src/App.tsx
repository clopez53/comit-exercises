import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import HomePage from "./pages/HomePage";
import ReservationsPage from "./pages/ReservationsPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProductPage from "./pages/ProductPage";


function App() {

  
  return (
    <>
    <BrowserRouter>
        <header></header>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products/:productId" component={ProductPage}/>
          <Route path="/reservations" component={ReservationsPage} />
          <Route component={NotFoundPage} />
        </Switch>
    </BrowserRouter>
    <footer>This is the Footer</footer>
    </>
  );
}


export default App;
