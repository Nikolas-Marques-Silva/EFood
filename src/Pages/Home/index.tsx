import { useEffect, useState } from 'react'
import Footer from '../../Components/Footer'
import Hero from '../../Components/Hero'
import ProductsList from '../../Components/ProductsList'

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
  const [products, setProducts] = useState<ProductProps[]>()

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setProducts(response))
  })

  if (!products) return <h3>Carregando</h3>

  return (
    <>
      <Hero />
      <ProductsList products={products} type="restaurants" cols={2} />
      <Footer />
    </>
  )
}

export default Home
