/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import '../styles/sidebar.css';
import Bloglist from './blogs/Bloglist';

function App() {
  return (
    <div>
      <nav className="sidebar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/bloglist">Bloglist</Link>
          </li>
        </ul>
      </nav>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <div style={{ marginLeft: '110px', float: 'left' }}>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/bloglist">
            <Bloglist />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
