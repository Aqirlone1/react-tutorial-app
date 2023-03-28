import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NewPlace from './places/pages/NewPlace';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import Users from './user/pages/Users.js'

function App() {
  return (
    <Router>    
    <MainNavigation />
    <main>
       <Routes>
       <Route path='/' element ={ <Users/>} exact/>
       <Route path='/places/new' element = {<NewPlace/>} exact />
      </Routes>
      </main>
    </Router>    
  
  );
}

export default App;
