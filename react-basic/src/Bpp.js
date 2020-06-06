import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';

class Bpp extends Component {
  constructor(props){
    super(props)
    //this.addList = this.addList.bind(this);
    //this.inputVa = this.inputVa.bind(this);
    this.state = {
      inputValue: [
        { name: "Meowsalot", species: "cat", age: "5", id: 123456789 },
        { name: "Barksalot", species: "dog", age: "3", id: 987654321 },
        { name: "Fluffy", species: "rabbit", age: "2", id: 123123123 },
        { name: "Purrsloud", species: "cat", age: "1", id: 456456456 },
        { name: "Paws", species: "dog", age: "6", id: 789789789 }
      ],
      inputObj: {name: "", species: "", age: "", id: (new Date()).getTime()},
      isEditing: true
    }
  }
  formSubmit(e) {
    const {inputValue, inputObj} = this.state;
    e.preventDefault();
    console.log(e);
    const stateArrayPush = this.state.inputValue.concat({name: inputObj.name, species: inputObj.species, age: inputObj.age, id: (new Date()).getTime()});
    this.setState({inputValue: stateArrayPush});
    // e.target.elements.name.value="";
    // e.target.elements.specie.value="";
    // e.target.elements.age.value="";
    this.setState({
        inputObj: Object.assign({}, this.state.inputObj, { 
         name: "",
         species: "",
         age:""
       })
     });
    e.target.elements.name.focus();

    }
  setName(e){

    //const vare = e ? e.target.value : hel;
    this.setState({
     inputObj: Object.assign({}, this.state.inputObj, { 
        name: e.target.value
      })
    });
   // e.target.value = hel
  }
  
  setSpecie(e){
    this.setState({
     inputObj: Object.assign({}, this.state.inputObj, {
        species: e.target.value
      })
    });
  }
  setAge(e){
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
        this.setState({
            inputObj: Object.assign({}, this.state.inputObj, {
               age: e.target.value
             })
           });
        } 
  }
  toggleEdit(){
    this.setState({isEditing: !this.state.isEditing})
  }

  deleteItem(e){
    const pareNod = e.target.parentElement;
    //const {inputValue} = this.state;
    var inputObjects = [...this.state.inputValue];

   let indexes = inputObjects.map((item) => {
        return item.id;
    });
    let inde = indexes.indexOf(parseInt(pareNod.id));
    console.log('indexOf', inde);
    if(inde !== -1){
      inputObjects.splice(inde, 1);
      this.setState({inputValue: inputObjects});
      //console.log(inputValue);
    } 
  }



  renderHeader() {
    const {inputValue} = this.state;
    if(this.state.isEditing){
    }
    return (
        <ul>
             {inputValue.map((item)=>{
              return( <li key={item.id} id={item.id}>{item.name} is a {item.species} and is {item.age} years old. {item.id}
                      <button onClick={this.toggleEdit.bind(this)}>Edit</button>
                      <button onClick={this.deleteItem.bind(this)}>Delete</button>
              </li>)
             })}
        </ul>
    )
  }


  render(){
    return (
      <div className="">
        <header className="">
          <h3>TODO App</h3>
          <form onSubmit= {this.formSubmit.bind(this)}>
            <fieldset>
              <legend className="legendW">Add New Pet</legend>
              <input placeholder="Name" name="name" value={this.state.inputObj.name} 
              onChange={this.setName.bind(this)} autoComplete="off" />
              <input placeholder="species" name="specie" value={this.state.inputObj.species} 
              onChange={this.setSpecie.bind(this)} autoComplete="off" />
              <input placeholder="age in years" name="age" value={this.state.inputObj.age} 
              onChange={this.setAge.bind(this)} autoComplete="off"/>
              <button>Add Pet</button>
            </fieldset>
          </form>
        </header>
        {this.renderHeader()}
      </div>  
    );
  }
}
export default Bpp;
