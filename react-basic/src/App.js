import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Bpp from './Bpp';
import Cpp from './Cpp';

class App extends Component {
  constructor(props){
    super(props)
    //this.addList = this.addList.bind(this);
    //this.inputVa = this.inputVa.bind(this);
  }
  render(){
    return (
      <div className="">
        <header className="">
          <Bpp />
        </header>
      </div>  
    );
  }
}
export default App;
