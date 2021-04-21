import React, { Component } from 'react';
import Child from './Child'

import './App.css';




  
  
class App extends Component {
  
  constructor(props){
    console.log('master constructor')
    super(props)

    this.state = {
      mount: true,
      ignoreProp: 0,
      seed: 40
    }
  
  }

  componentDidMount(){
    console.log('mastercomponentdidmount')
  }

  static getDerivedStateFromProps(props,state){
    console.log('mastergetderivedstatefromprops')
    
    
    return null
  }

  shouldComponentUpdate(){
    console.log('mastershouldcomponentupdate')
    return true
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('mastergetsnapshotbeforeupdate')
    return null
  }
   
  componentDidUpdate(prevProps,prevState,snapshot){
    console.log('mastercomponentdidupdate')
  }

  mounting = ()=>{this.setState({mount: true})}
  unmounting = ()=>{this.setState({mount: false})}
  ignoreProp = ()=>{this.setState({ignoreProp: Math.random()})}
  seedgenerator = ()=>{this.setState({seed: Number.parseInt(Math.random()*100)})}
   
    
  
      render() {
        console.log('master render')
        
    return (
      <div>
        <h1>master component</h1>
        <button onClick={this.mounting} disabled ={this.state.mount}>mount</button>
        <button onClick={this.unmounting} disabled ={!this.state.mount}>unmount</button>
        
        
        <button onClick={this.ignoreProp} >ignoreProp</button>
        <button onClick={this.seedgenerator} >seedgenerator</button>
        {this.state.mount ? <Child ignoreProp={this.state.ignoreProp} seed={this.state.seed}/> : null}
         
      </div>
    );
  }
}

export default App;
