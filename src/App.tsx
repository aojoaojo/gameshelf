import './global.css'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { BoardgamesContextProvider } from './contexts/BoardgamesContext'

function App() {

  return (
    <BoardgamesContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </BoardgamesContextProvider>
  )
}

export default App
