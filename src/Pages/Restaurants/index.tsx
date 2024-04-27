import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'
import { ProductProps } from '../Home'
import { useFetch } from '../../Hooks/Produtos'

const Restaurants = () => {
  const { data: products } = useFetch<ProductProps>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )
  return (
    <>
      <Header />
      <Apresentation
        title={products?.cardapio.nome}
        description={products?.cardapio.descricao}
        image={products?.cardapio.foto}
      />
      <ProductsList buttonType="secondary" type="products" cols={3} />
      <Footer />
    </>
  )
}

export default Restaurants
