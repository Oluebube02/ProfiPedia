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
import RateProf from './pages/RateProf'

function App() {

  const {state} = useContext(AuthContext)
  const [ProfList, setProfList] = useState([])
  const [addedProf, setAddedProf] = useState(false)
  const [prof, setProf] = useState({})
  return (
      <div>
        <Navbar data = {state.data} setProfList={setProfList} />
        <Sidebar/>
        <Routes>
          <Route path='/' element = {<Home/>}> </Route>
          <Route path = '/login' element = {<Login/>}> </Route>
          <Route path = '/signup' element = {<SignUp/>}> </Route>
          <Route path = '/find-professor/:id' element = {<DisplayProfs prof_list={ProfList} setAddedProf={setAddedProf} setProf={setProf}/>}></Route>
          <Route path = '/add-professor' element = {<AddProf setAddedProf={setAddedProf} setProf={setProf}/>}></Route>
          <Route path = '/rate-professor' element = {<RateProf addedProf = {addedProf} prof = {prof}/>}></Route>
        </Routes>

      </div>
      
  )
}

export default App
