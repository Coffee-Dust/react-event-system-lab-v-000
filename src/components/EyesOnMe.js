import React, {Component} from "react"
// Code EyesOnMe Component Here
export default class EyesOnMe extends Component {
  render() {
    return (
      <button 
        onFocus={(e)=> console.log("Good!")}
        onBlur={(e)=> console.log("Hey! Eyes on me!")}
      >

      </button>
    )
  }
}