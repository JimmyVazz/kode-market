import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Products from './Components/Products/Products';

class App extends Component{
  render(){
    return (
      <div className="App">
          <Navbar />
      </div>
    );
  }
}

export default App;

