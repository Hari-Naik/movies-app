import {Routes, Route} from 'react-router-dom'

import Login from './components/Login';
import Home from './components/MainPage';
import MovieSpecific from './components/MovieSpecificPage';


import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movies/:id' element={<MovieSpecific/>} />
      </Routes>
    </div>
  );
}

export default App;
