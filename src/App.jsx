import { Routes, Route, Navigate } from 'react-router-dom'
import './App.scss'
import { PrivateRoute } from './Component/PrivateRouter'
import Home from './Container/Home'
import SignIn from './Container/Login'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/login" element={<SignIn />} />
        <Route path='*' element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
