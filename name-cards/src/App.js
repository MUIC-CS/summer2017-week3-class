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
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  onClick() {
    this.setState((st)=>({count: st.count+1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="App">
        <div>
          <input type="button" onClick={()=>this.onClick()} value="Click Me!" />
          Count: {count}
        </div>
        <div>
          {
            allPeople.map(
              (person) => {
                return <NameCard name={person.name} gender={person.gender}/>
              }
            )
          }
        </div>
      </div>
    );
  }
}

export default App;
/****







******/
