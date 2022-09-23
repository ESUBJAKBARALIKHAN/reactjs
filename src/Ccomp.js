import React, { Component } from 'react';
 class Ccomp extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"1.CLASS COMPONENTS"
        }
        this.user="2.FUNCTIONAL COMPONENTS"
    }
  render() {
    return (
        <>
        <h1>COMPONENTS</h1>
      <div>components are two types</div>
      <p>{this.state.name}<br></br>{this.user}</p>
      </>
    )
  }
}

export default Ccomp;

