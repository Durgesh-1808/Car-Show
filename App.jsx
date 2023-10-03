import './App.css';
import SearchBar from './Search';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Page1 from './screens/Page1';
import Page2 from './screens/Page2';
import Page3 from './screens/Page3';
import Page4 from './screens/Page4';
import Page5 from './screens/Page5';
import Page6 from './screens/Page6';
import Page7 from './screens/Page7';
import Page8 from './screens/Page8';
import Page9 from './screens/Page9';
import Page10 from './screens/Page10';
import Nav from './Nav';

function App(){
  return(<>
  <SearchBar />
  <Router>
    <Routes>
      <Route index element={<Page1 />} />
      <Route path='/pages/1' Component={Page1}/>
      <Route path='/pages/2' Component={Page2}/>
      <Route path='/pages/3' Component={Page3}/>
      <Route path='/pages/4' Component={Page4}/>
      <Route path='/pages/5' Component={Page5}/>
      <Route path='/pages/6' Component={Page6}/>
      <Route path='/pages/7' Component={Page7}/>
      <Route path='/pages/8' Component={Page8}/>
      <Route path='/pages/9' Component={Page9}/>
      <Route path='/pages/10' Component={Page10}/>
    </Routes>
  </Router>
  </>)
}

export default App;