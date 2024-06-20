import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'
import { useGetRestaurantsQuery } from '../../services/api'

export type Plate = {
  id: number
  titulo: string
  descricao: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}

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
