import React, { Component } from 'react';
import './App.css';
import AddPerson from './AddPerson'
import Layout from './Layout'
import NameCard from './NameCard'

function App() {
  return (
    <Layout>
      <Content/>
    </Layout>
  )
}

class Content extends Component {
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
    const newPerson = {name, gender} // {name: name, gender: gender}
    const newAllPeople = [newPerson, ...this.state.allPeople]
    this.setState({allPeople: newAllPeople})
  }

  render() {
    const {count, allPeople} = this.state
    return (
      <div>
        <AddPerson onPersonAdd={(name, gender)=>this.onPersonAdd(name,gender)}/>
        {/* <div>
          <input type="button" onClick={()=>this.onClick()} value="Click Me!" />
          Count: {count}
        </div> */}
        <div className="flex space-around wrap child-v-space">
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
