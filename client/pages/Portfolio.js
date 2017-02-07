import React from 'react';

class Portfolio extends React.Component {
  render(){
    return (
      <div id="about">
        <article className="prj-container col-6">
            <header className="prj-tag">
                <h1>project title</h1>
            </header>
            <img src="src/images/web_design.jpg" alt="web design" />
            <div className="prj-overlay isHidden">
                <header>
                    <h1>project title</h1>
                    <h3>11/01/2016 - 2/30/2017</h3>
                </header>
                <div>
                    <h2>used skills</h2>
                    <ul>
                        <li> adobe creative cloud</li>
                        <li>axure rp</li>
                        <li>wordpress</li>
                    </ul>
                </div>
            </div>
        </article>
      </div>
    )
  }
}

export default Portfolio;