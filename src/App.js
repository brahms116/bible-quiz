import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Game from './components/Game';
import Menu from './components/Menu'
import AuthContextProvider from './contexts/AuthContext'
import PrivateRoute from './components/PrivateRoute'
import GameContextProvider from './contexts/GameContext'

function App() {
  return (
    <div className="App">
      <Router>
        <AuthContextProvider>
        <GameContextProvider>
          <Switch>          
            <PrivateRoute exact path='/game' component={Game}/>
            <Route path='/' component={Menu}/>          
          </Switch>
        </GameContextProvider>
        </AuthContextProvider>
        
      </Router>
            
    </div>
  );
}

export default App;
