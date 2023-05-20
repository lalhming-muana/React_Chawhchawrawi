import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';

class App extends Component{

  render(){
    const name ='john doe';
    const loading = true;

  return (
    <React.Fragment>
      <h1> Hello from React </h1> 
      <h2>Goodbye</h2>
      {loading ? <h4>loading ....</h4> : <h4>Hello {name}</h4>}
    </React.Fragment>
  );
}
}

export default App;
