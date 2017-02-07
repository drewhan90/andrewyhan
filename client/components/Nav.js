import React from 'react';

class Nav extends React.Component {
  render(){
    return (
        <nav id="mainNav">
            <ul>
            <li><button className="aboutBtn navBtn"></button></li>
            <li><button className="portfolioBtn navBtn"></button></li>
            <li><button className="contactBtn navBtn"></button></li>
            <li><button className="resumeBtn navBtn"></button></li>
            </ul>
        </nav>
    )
  }
}

export default Nav;