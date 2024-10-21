import React from 'react'
import Layout from './components/layout'
import HomePage from './pages/HomePage'
import ProjectDetails from './pages/ProjectDetails'
//import Detail from './components/Details'
import { Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/details/:id' element={<ProjectDetails/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App
