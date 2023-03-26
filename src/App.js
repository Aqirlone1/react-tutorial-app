import React from 'react';
import { BrowserRouter as  Switch, Route,Routes } from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import Users from './user/pages/Users.js'

function App() {
  return (
     <Switch>
      <Routes>
       <Route path='/' element ={ <Users/>} exact/>
       <Route path='/places/new' element ={ <NewPlace/>} exact />
      </Routes>
     </Switch>
  );
}

export default App;
