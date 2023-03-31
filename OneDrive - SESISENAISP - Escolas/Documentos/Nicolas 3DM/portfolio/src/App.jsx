import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Projetos from './pages/Projetos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route path='/projetos' element={<Projetos/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
