import React, { Component } from 'react'
import Child from './Child';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      name:"tom"
    }
  }
  handdleClick=()=>{
    this.setState({
      name:"jarry"
    })
  }
  render() {
    let {name}=this.state;
    return (
      <div>
         <h3>App组件</h3>
         <p>{name}</p>
         <button onClick={this.handdleClick}>change name</button>
         <hr />
         <Child name="tom" age={19}/>
      </div>
    )
  }
}
