import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import SearchPage from './pages/SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/search'>
            <SearchPage />
          </Route>
          <Route exact path='/'>
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
