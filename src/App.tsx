
import { BrowserRouter} from 'react-router-dom'
import AuthRoutes from './routes/AuthRoutes'
import UnAuthRoutes from './routes/UnAuthRoutes'

function App() {

  return (
    <BrowserRouter>
        <AuthRoutes/>
        <UnAuthRoutes/>
    </BrowserRouter>
  )
}

export default App
