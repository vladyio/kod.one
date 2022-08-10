import React from "react";
import { ChakraProvider, Flex } from "@chakra-ui/react";
import "./App.css";
import Snippet from "./components/Snippet";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider resetCSS>
      <Router>
        <div className="app">
          <Flex direction="column">
            <Routes>
              <Route exact path="/" element={<Snippet />} />
              <Route exact path="/:snippetId" element={<Snippet />} />
            </Routes>
            <Footer />
          </Flex>
        </div>
      </Router>
    </ChakraProvider>
  );
}

export default App;
