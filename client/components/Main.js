import React from 'react';
// import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>hello</li>
          </ul>
        </nav>
        { React.cloneElement(this.props.children, this.props) }
      </div>
    )
  }
});

export default Main;