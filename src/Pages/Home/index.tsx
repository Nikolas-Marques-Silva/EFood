import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'

const Home = () => {
  return (
    <>
      <Hero />
      <ProductsList type="restaurants" cols={2} />
      <Footer />
    </>
  )
}

export default Home
