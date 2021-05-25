import React from 'react';
import Home from './pages/Home';
import Experiences from './pages/Experiences'
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Hobbies from './pages/Hobbies';
import Degrees from './pages/Degrees';
import Jeu from './pages/Jeu';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <AnimatePresence exitBeforeEnter>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/Experiences" exact component={Experiences} />
            <Route path="/Competences" component={Knowledges} />
            <Route path="/Hobbies" component={Hobbies} />
            <Route path="/Portfolio" component={Portfolio} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Degrees" component={Degrees} />
            <Route path="/Jeu" component={Jeu} />
            <Route component={NotFound} />
          </Switch>
        </AnimatePresence>
      </BrowserRouter>
    </>
  );
};

export default App;