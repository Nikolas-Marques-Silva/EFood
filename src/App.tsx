import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalStyle from './styles'

import Home from './Pages/Home'
import Restaurants from './Pages/Restaurants'
import store from './store'
import Cart from './Components/Cart'

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
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <AppRoutes />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
