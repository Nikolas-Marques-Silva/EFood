import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'
import Img from '../../assets/images/sushi.png'

const HiokiSushi = () => {
  return (
    <>
      <Header />
      <Apresentation title="Hioki Sushi" description="Sushi" image={Img} />
      <ProductsList type="products" cols={3} />
      <Footer />
    </>
  )
}

export default HiokiSushi
