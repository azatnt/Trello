// import logo from './logo.svg';
import './App.css';
import React,{useState, useEffect} from 'react';
import { Route } from "react-router-dom";
import MainPage from './MainPage';
import CardDetail from './CardDetail';

const App = () => {
  return (
    <div className="App">
        <Route exact path={'/'} render={()=><MainPage/>}/>
        <Route exact path={'/detail/:id'} render={()=><CardDetail/>}/>
    </div>
  );
}

export default App;
