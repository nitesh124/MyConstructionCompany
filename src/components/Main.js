import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import {About} from './About';
import {Contact} from './Contact';
import {Projects} from './Projects';


const Main = () => (
  <BrowserRouter>
  <Switch>
    <Route exact path="/Header" component={Header} />
    <Route path="/About" component={About} />
    <Route path="/Contact" component={Contact} />
    <Route path="/Projects" component={Projects} />
  </Switch>
  </BrowserRouter>
)

export default Main;
