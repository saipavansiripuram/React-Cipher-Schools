import React, { Component } from 'react'

export default class Counter extends Component {
  //Giving birth to state=> Mounting 
    state={count:1} //declare states
    
  render() {
    let a=10
    return (
      <div>
          {/* render like this */}
          <p>{this.state.count}</p> 
          {/* //update state values */}
          {/* //Updated the state known as count  */}
          <button onClick={()=>{this.setState({count:this.state.count+1})}}>plus</button>
          
      </div>
    )
  }
}
