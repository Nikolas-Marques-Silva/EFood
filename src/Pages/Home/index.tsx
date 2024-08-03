import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: products } = useGetRestaurantsQuery()
  if (products) {
    return (
      <>
        <Hero />
        <ProductsList products={products} />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
