import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { useFetch } from '../../Hooks/Produtos'
import { useParams } from 'react-router-dom'
import React from 'react'
import PlatesList from '../../Components/PlatesList'
import { ProductProps } from '../Home'

export function getDescription(descricao: string) {
  if (descricao.length > 184) {
    return `${descricao.substring(0, 181)}...`
  }
  return `${descricao}`
}

const Restaurants = () => {
  const { id } = useParams()

  const { data: products } = useFetch<ProductProps['cardapio'][]>(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  )

  return (
    <>
      <Header />
      <Apresentation products={products} />
      <PlatesList products={products} />
      <Footer />
    </>
  )
}

export default Restaurants
