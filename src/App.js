import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import About from './pages/about'
import './App.css';
import Header from './components/header';
import { Container } from 'react-bootstrap';
import Home from './pages/home';


class App extends Component {


  render() {

    return (
      <Router>

        <Container>
          <Header />
         
          <Route exact path='/' component={Home} />
        </Container>
        <Route path='/about' component={About} />
      </Router>
    )
  }
}

export default App;
