import { Routes, Route, BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'

import Home from './Pages/Home'
import HiokiSushi from './Pages/Restaurants'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante/:id" element={<HiokiSushi />} />
    </Routes>
  )
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
