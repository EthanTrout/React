import React, { Component } from 'react'

export class EventsClass extends Component {
    clickHandler(){
        console.log("Class")
    }
  render() {
    return (
      <div>
        <button onClick ={this.clickHandler}>Click Me! Class-Comp</button>
      </div>
    )
  }
}

export default EventsClass
