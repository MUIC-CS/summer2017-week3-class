import React, { Component } from 'react';

export default class AddPerson extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      gender: 'male'
    }
  }

  onAddPersonClick() {
    console.log("AddPersonClick")
    this.props.onPersonAdd("Bright", "male")
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
    return(
      <div>
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
            onClick={()=>this.onAddPersonClick()}
          />
        </div>
      </div>
    )
  }
}
