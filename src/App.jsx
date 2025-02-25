import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Header from './Components/header'

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </>
  )
}

export default App