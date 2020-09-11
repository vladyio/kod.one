import React from 'react';
import './App.css';
import Snippet from './components/snippet'
import Footer from './components/footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path='/' component={Snippet} />
          <Route exact path='/:snippetId' component={Snippet} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
