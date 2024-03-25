import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'
import Img from '../../assets/images/spagueti.png'

const LaDolceVitaTrattoria = () => {
  return (
    <>
      <Header />
      <Apresentation
        title="La Dolce Vita Trattoria"
        description="Italiana"
        image={Img}
      />
      <ProductsList type="products" cols={3} />
      <Footer />
    </>
  )
}

export default LaDolceVitaTrattoria
