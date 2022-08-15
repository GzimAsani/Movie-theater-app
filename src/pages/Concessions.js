import React from 'react'
import Body from './ConcessionsPages/Body'
import Header from './ConcessionsPages/Header'
import Show from './ConcessionsPages/Show'
import {Route, Link, Routes} from 'react-router-dom';

function Concessions() {
  return (
    <div>
     
        
          <Routes>
          <Route path="/" element={<Body />}>

          </Route>
          </Routes>
        
      <Header />
      <Show />
    </div>
  )
}

export default Concessions
