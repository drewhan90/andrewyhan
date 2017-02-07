import React from 'react';

import Nav from './Nav';
import Home from '../pages/Home';
// import About from '../pages/About';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
        count: 0,
        speed: 3000,
        messages: ['Hey there!', "My name is Andrew Yeonsoo Han", 'You can just call me Andrew', 'My am a passionate web developer', 'Who takes UX/UI Design seriously!'],
        page: [<Home/>]
    };
  }
  _increment(){
    this.setState({
      count: this.state.count + 1
    })
    if(this.state.count >= this.state.messages.length){
      this.setState({ count: 0 })
    }
  }
  componentDidMount(){
    setInterval(this._increment.bind(this), this.state.speed);
  }
  render(){
    return (
      <div id="mainContainer">
        <Nav page={this.page}/>
        <div className="pageContainer">
          {this.state.page}
        </div>
      </div>
    )
  }
}

export default Main;

// <div id="mainMsg"><h1>{this.state.messages[this.state.count]}</h1></div>