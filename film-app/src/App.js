
import React from 'react';
import './App.scss';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Home from '../src/components/Home/Home'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import Moviedetail from '../src/components/Moviedetail/Moviedetail'
import PageNotFound from '../src/components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={Moviedetail} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
