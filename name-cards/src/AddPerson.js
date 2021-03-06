import React, {Component} from 'react';
import './App.css'

export default class AddPerson extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      gender: 'male'
    }
  }

  onAddPersonClick(name, gender) {
    console.log("AddPersonClick")
    if(name!==''){
      this.props.onPersonAdd(name, gender)
    }
  }

  onNameChange(e){
    const newName = e.target.value
    this.setState({name: newName})
  }

  onGenderChange(e) {
    const newGender = e.target.value
    this.setState({gender: newGender})
  }

  render() {
    const {name, gender} = this.state
    return(
      <div className="flex center">
        <div className="inline-flex red-bg box">
          <div>
            Name:
            <input
              type="text"
              value={this.state.name}
              onChange={(e)=>this.onNameChange(e)}
            />
          </div>
          <div>
            Gender:
            <select
              value={this.state.gender}
              onChange={(e)=>this.onGenderChange(e)}
            >
              <option value="male" > Male </option>
              <option value="female"> Female </option>
            </select>
          </div>
          <div>
            <input
              type="button"
              value="Add Person"
              onClick={()=>this.onAddPersonClick(name, gender)}
            />
          </div>
        </div>
      </div>
    )
  }
}
/*












*/
