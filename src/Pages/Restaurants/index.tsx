import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { useFetch } from '../../Hooks/Produtos'
import { useParams } from 'react-router-dom'
import React from 'react'
import PlatesList from '../../Components/PlatesList'
import { ProductProps } from '../Home'

export function getDescription(descricao: string, Length: number) {
  if (descricao.length > Length) {
    return `${descricao.substring(0, Length - 3)}...`
  }
  return `${descricao}`
}

const Restaurants = () => {
  const { id } = useParams()

  const { data: products } = useFetch<ProductProps>(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  )

  return (
    <>
      <Header />
      <Apresentation products={products} />
      <PlatesList products={products?.cardapio} />
      <Footer />
    </>
  )
}

export default Restaurants
