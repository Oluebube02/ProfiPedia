import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import { useContext } from 'react'
import { AuthContext } from './AuthContext/AuthContext'
import { useState } from 'react'
import DisplayProfs from './pages/DisplayProfs'
import AddProf from './pages/AddProf'

function App() {

  const {state} = useContext(AuthContext)
  const [ProfList, setProfList] = useState([])
  return (
      <div>
        <Navbar data = {state.data} setProfList={setProfList} />
        <Routes>
          <Route path='/' element = {<Home/>}> </Route>
          <Route path = '/login' element = {<Login/>}> </Route>
          <Route path = '/signup' element = {<SignUp/>}> </Route>
          <Route path = '/find-professor/:id' element = {<DisplayProfs prof_list={ProfList}/>}></Route>
          <Route path = '/add-professor' element = {<AddProf/>}></Route>
        </Routes>

      </div>
      
  )
}

export default App
