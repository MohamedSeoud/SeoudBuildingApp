
import { BrowserRouter, Routes } from 'react-router-dom'
import './App.css'
import UnAuthRoutes from './routes/UnAuthorizedRoutes'
import AuthRoutes from './routes/AuthorizedRoutes'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        {UnAuthRoutes}
        {AuthRoutes}
      </Routes>   
    </BrowserRouter>
  )
}

export default App
