import React from 'react';
// import App from './App';
import './Show.css';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import App from './App';

function Show() {
  // return <App />;
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/app" component={App} />
    </HashRouter>
  );
}

export default Show;