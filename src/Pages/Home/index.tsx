import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'
import { useFetch } from '../../Hooks/Produtos'

export type ProductProps = {
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
  const { data: products } = useFetch<ProductProps[]>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )
  return (
    <>
      <Hero />
      <ProductsList
        products={products}
        buttontype="primary"
        type="restaurants"
        cols={2}
      />
      <Footer />
    </>
  )
}

export default Home
