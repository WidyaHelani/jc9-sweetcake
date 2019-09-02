import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Recipe from './components/Recipe'
import LoginPage from './components/LoginPage'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/recipe" component={Recipe}/>
                    <Route path="/login" component={LoginPage}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default connect(App)
