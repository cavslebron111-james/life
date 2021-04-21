import React, { Component } from 'react';

import './App.css';



  
  
class Child extends Component {
  
  constructor(props){
    console.log('child constructor')
    super(props)

    this.state = {
      counter: 0,
      seed: 0
    }
  }

  componentDidMount(){
    console.log('child componentdidmount')
  }

  static getDerivedStateFromProps(props,state){
    console.log('childgetderivedstatefromprops')
    if(props.seed && state.seed !== props.seed){
      return {
        seed: props.seed,
        counter: props.seed
      }
    }
    return null
  }

  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.ignoreProp && this.props.ignoreProp !== nextProps.ignoreProp){
      console.log('child should component update - do not render')
      return false
  }
  console.log('child should component update - do  render')
  return true

}
   
   

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('childgetsnapshotbeforeupdate')
    return null
  }
   
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('childcomponentdidupdate')
  }
   componentWillUnmount(){
     console.log('child component will unmount')
   } 
  
  
   increment = () =>{
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrement = () =>{
    this.setState({
      counter: this.state.counter - 1
    })
  }
      render() {
        console.log('child render')
        
    return (
      <div>
        <h1>child component</h1>
        <button onClick ={this.increment}>increment</button>
        <button onClick ={this.decrement}>decrement</button>
        
        <h2>counter: {this.state.counter}</h2>
        
         
         
      </div>
    );
  }
}

export default Child;