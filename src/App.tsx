import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles'

import Home from './Pages/Home'
import Restaurants from './Pages/Restaurants'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/restaurantes/:id" element={<Restaurants />} />
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
