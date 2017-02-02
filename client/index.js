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

render(<Main />, document.getElementById('root'));