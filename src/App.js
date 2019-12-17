import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Menu from './components/Menu'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>          
          <Route exact path='/game' component={Game}/>
          <Route path='/' component={Menu}/>          
        </Switch>

      </Router>
            
    </div>
  );
}

export default App;
