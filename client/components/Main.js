import React from 'react';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
        count: 0,
        speed: 3000,
        messages: ['Hey there!', "My name is Andrew Yeonsoo Han", 'You can just call me Andrew', 'My am a passionate web developer', 'Who takes UX/UI Design seriously!']
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
        <Nav />
        <div id="mainMsg">
          <h1>{this.state.messages[this.state.count]}</h1>
        </div>
      </div>
    )
  }
}

const Nav = () => 
  <nav id="mainNav">
    <ul>
      <li><button className="aboutBtn navBtn"></button></li>
      <li><button className="portfolioBtn navBtn"></button></li>
      <li><button className="contactBtn navBtn"></button></li>
      <li><button className="resumeBtn navBtn"></button></li>
    </ul>
  </nav>

export default Main;