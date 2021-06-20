
import React , { Component} from 'react';

import Cardlist from '../components/Cardlist';
//import robots from './robots';
import './App.css';
import Scroll from '../components/Scroll'


import SearchBox from '../components/SearchBox';


import 'tachyons';

class  App extends Component {
  constructor(){
   super()
    this.state = {
     robots:[],             //  robots:robots,
      searchfield:''
    }
  }


  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value})
    console.log('event data', event.target.value);
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')                             
    .then(res=> res.json())
    .then(users=>this.setState({robots:users}))
  }


  // componentDidMount(){
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(res=> res.json())
  //   .then(users=>this.setState({robots:users}))
  // }

  render() {
    const filterdata = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
    })
    if(this.state.robots.length === 0) {
      return <h1>Loading...</h1>

    }
    else{
    return (
      <div className='tc'>
      <h1>RoboFriends</h1>
      <SearchBox searchChange = {this.onSearchChange}/>
      <Scroll>
      <Cardlist robots={filterdata}/>
      </Scroll>
      
      </div>
    );
    }
  }
 
}

export default App;
