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
import Sidebar from './components/Sidebar'
import AddedProf from './pages/AddedProf'
import RateProf from './pages/RateProf'
function App() {

  const {state} = useContext(AuthContext)
  const [ProfList, setProfList] = useState([])
  const [addedProf, setAddedProf] = useState(false)
  const [prof, setProf] = useState({})
  return (
      <div>
        <Navbar data = {state.data} setProfList={setProfList} />
        <div className='post-nav-app'>
          <Sidebar data = {state.data}/>
          <Routes>
            <Route path='/' element = {<Home/>}> </Route>
            <Route path = '/login' element = {<Login/>}> </Route>
            <Route path = '/signup' element = {<SignUp/>}> </Route>
            <Route path = '/find-professor/:id' element = {<DisplayProfs prof_list={ProfList} setAddedProf={setAddedProf} setProf={setProf}/>}></Route>
            <Route path = '/add-professor' element = {<AddProf setProf={setProf}/>}></Route>
            <Route path = '/add-success' element = {<AddedProf  prof = {prof}/>}></Route>
            <Route path = '/rate-professor/:id' element = {<RateProf prof = {prof}/>}></Route>
          </Routes>
        </div>
        
      </div>
      
  )
}

export default App
