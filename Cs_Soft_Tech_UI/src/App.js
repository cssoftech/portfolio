import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from "react-router-dom";
import Home from './components/Home'
import About from './components/About';
import Profile from './components/Profile';
import Login from './components/Login';
import Register from './components/Register'


function App() {

  const footer = (
    <div>
      <button className="btn btn-primary">CONTINUE EXPLORING</button>
      <button className="btn btn-danger">LOGOUT</button>
    </div>
  );


  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <a className="navbar-brand" href="/">React Application</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="/About">About Us</Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
              <Route exact path="/a" component={Home}></Route>
              <Route exact path="/home" component={Home}></Route>
              <Route exact path="/About" component={About}></Route>
              <Route exact path="/Profile" component={Profile}></Route>
              <Route exact path="/" component={Login}></Route>
              <Route exact path="/register" component={Register}></Route>
              <Route path="/**" render={() => <Redirect to="/" />}></Route>
            </Switch>
      </Router>
      <footer className="bg-black text-center text-white-50">
          Copyright &copy; Bidisha Poddar 2021
      </footer>
    </div>
  );
}

export default App;