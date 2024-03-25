import { Routes, Route, BrowserRouter } from 'react-router-dom'
import GlobalStyle from './styles'

import Home from './Pages/Home'
import HiokiSushi from './Pages/HiokiSushi'
import LaDolceVitaTrattoria from './Pages/LaDolceVitaTrattoria'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurante1" element={<HiokiSushi />} />
      <Route path="/restaurante2" element={<LaDolceVitaTrattoria />} />
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
