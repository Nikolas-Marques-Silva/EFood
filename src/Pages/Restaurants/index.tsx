import { useEffect, useState } from 'react'
import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'
import Img from '../../assets/images/sushi.png'
import { ProductProps } from '../Home'

const HiokiSushi = () => {
  const [products, setProducts] = useState<ProductProps[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setProducts(response))
  })

  if (!products) return <h3>Carregando</h3>
  return (
    <>
      <Header />
      <Apresentation title="Hioki Sushi" description="Sushi" image={Img} />
      <ProductsList products={products} type="products" cols={3} />
      <Footer />
    </>
  )
}

export default HiokiSushi
