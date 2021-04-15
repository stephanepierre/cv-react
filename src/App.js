import React from 'react';
import Home from './pages/Home';
import Experiences from './pages/Experiences'
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import { BrowserRouter, Route, Switch } from 'react-router-dom';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Experiences" exact component={Experiences} />
          <Route path="/Competences" component={Knowledges} />
          <Route path="/Portfolio" component={Portfolio} />
          <Route path="/Contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;