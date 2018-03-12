import React, { Component } from 'react';
import logo from './exp_logo.png';
import {Button, PageHeader} from 'react-bootstrap';
import {Route,Switch, Redirect} from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Round1 from './Round1.js';
import Round2 from './Round2.js';
import Round3 from './Round3.js';
import Round4 from './Round4.js';
import Round5 from './Round5.js';

import Round6 from './Round6.js';

class App extends Component {
  render() {
    return (
     <div className="App">
    
    <PageHeader bsClass="App-header">
      <img src={logo} className="App-logo" alt="logo"/>
      Expedia Bangalore Team Quiz Competition
    </PageHeader>
    

        
           <Switch>
                <Route path="/home" exact component={Home}/>
                <Route path="/home/round1" component={Round1}/>
                <Route path="/home/round2" component={Round2}/>
                <Route path="/home/round3" component={Round3}/>
                <Route path="/home/round4" component={Round4}/>
                <Route path="/home/round5" component={Round5}/>
               
                <Route path="/home/round6" component={Round6}/>
               <Redirect from="/" to="/home"/>
            </Switch>
       
   
</div>
    );
  }
}

export default App;
