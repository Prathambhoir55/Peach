import React from 'react';
import { render } from "react-dom";
import ReactDOM from 'react-dom';
import './index.css';
import Server from './Server';

import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Server/>
  </BrowserRouter>,
  document.getElementById("root"));