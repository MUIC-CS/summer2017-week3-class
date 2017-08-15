import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function NameCard({name, gender}) {
  return (
    <div>
      <img src={`https://avatars.dicebear.com/v1/${gender}/${name}/200.png`} />
      <div>
        <div>
          Name: {name}
        </div>
        <div>
          Age: 23
        </div>
        <div>
          Favorite Food: KFC
        </div>
      </div>
    </div>
  )
}

const allPeople = [
  {name: "Pan", gender:"male"},
  {name: "New", gender:"female"},
  {name: "Nice", gender:"female"},
  {name: "Bossy", gender:"male"},
  {name: "Poon", gender:"male"},
  {name: "France", gender:"male"}
]

class App extends Component {
  render() {

    return (
      <div className="App">
        {allPeople.map((person) => {
          return <NameCard name={person.name} gender={person.gender}/>
        })}
      </div>
    );
  }
}

export default App;
/****







******/
