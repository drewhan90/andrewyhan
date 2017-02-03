import React from 'react';

class Main extends React.Component {
  constructor(){
    super();
    this.state = {
    };
  }
  render(){
    return (
      <div id="mainContainer">
        <Nav />
        <div id="mainMsg">
          <h1></h1>
        </div>
      </div>
    )
  }
}

const Nav = (props) => 
  <nav id="mainNav">
    <ul>
      <li><button className="aboutBtn navBtn"></button></li>
      <li><button className="portfolioBtn navBtn"></button></li>
      <li><button className="contactBtn navBtn"></button></li>
      <li><button className="resumeBtn navBtn"></button></li>
    </ul>
  </nav>

export default Main;