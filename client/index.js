import React from 'react';

import { render } from 'react-dom';

// Import Styles
import './styles/main.scss';

// Import Components
import Main from './components/Main';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

// Import react router deps
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

const router = (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <IndexRoute component={Index}></IndexRoute>
            <Route path="/view/:postid" component={Single}></Route>
        </Route>
    </Router>
)
render(<Main />, document.getElementById('root'));