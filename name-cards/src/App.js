import React, { Component } from 'react';
import './App.css';
import AddPerson from './AddPerson'

function NameCard({name, gender}) {
  return (
    <div>
      <img
        alt={name}
        src={`https://avatars.dicebear.com/v1/${gender}/${name}/200.png`}
      />
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


class App extends Component {
  constructor(props){
    super(props)


    this.state = {
      count: 0,
      allPeople: [
        {name: "Pan", gender:"male"},
        {name: "New", gender:"female"},
        {name: "Nice", gender:"female"},
        {name: "Bossy", gender:"male"},
        {name: "Poon", gender:"male"},
        {name: "France", gender:"male"}
      ]
    }
  }

  onClick() {
    this.setState((st)=>({count: st.count+1}))
  }

  onPersonAdd(name, gender) {
    console.log('ADDDDDDDDDDDDDDDD!', name, gender)
  }

  render() {
    const {count, allPeople} = this.state
    return (
      <div className="App">
        <AddPerson onPersonAdd={(name, gender)=>this.onPersonAdd(name,gender)}/>
        <div>
          <input type="button" onClick={()=>this.onClick()} value="Click Me!" />
          Count: {count}
        </div>
        <div>
          {allPeople.map((person) => {
            return <NameCard key={person.name} name={person.name} gender={person.gender}/>
          })}
        </div>
      </div>
    );
  }
}

export default App;
/****







******/
