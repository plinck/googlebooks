import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Books from './components/Books/Books';

class App extends Component {

  render() {
    return (
        <Router>
            <div className="container">
                <Navigation />
                <Route exact path="/" component={Dashboard} /> 
                <Route path="/Books" component={Books} />      
            </div>
        </Router>
    );
  }
}
export default App;