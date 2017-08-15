import React, { Component } from 'react';

export default class AddPerson extends Component {

  onAddPersonClick() {
    console.log("AddPersonClick")
    this.props.onPersonAdd("Bright", "male")
  }

  render() {
    return(
      <div>
        <div>
        Name: <input type="text" />
        </div>
        <div>
          Gender:
          <select>
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
