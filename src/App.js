import React from "react";

import {
  Footer,
  Blog,
  Possibility,
  WhatGPT3,
  Header,
  Features,
} from "./containers";
import { Brand,
     CTA,
     Navbar
} from "./components";
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="graident__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
