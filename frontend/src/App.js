import React from 'react';
import {
  ChakraProvider,
  Flex
} from "@chakra-ui/core"
import './App.css';
import Snippet from './components/Snippet'
import Footer from './components/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router>
        <div className="app">
          <Flex direction='column'>
            <Switch>
              <Route exact path='/' component={Snippet} />
              <Route exact path='/:snippetId' component={Snippet} />
            </Switch>
            <Footer />
          </Flex>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
