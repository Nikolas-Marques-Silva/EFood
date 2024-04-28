import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ProductsList from '../../Components/ProductsList'
import { ProductProps } from '../Home'
import { useFetch } from '../../Hooks/Produtos'
import { useParams } from 'react-router-dom'
import React from 'react'

const Restaurants = () => {
  const { id } = useParams()
  const { data: products } = useFetch<ProductProps[]>(
    `https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`
  )

  return (
    <>
      <Header />
      <Apresentation products={products} />
      <ProductsList
        products={products}
        buttontype="secondary"
        type="products"
        cols={3}
      />
      <Footer />
    </>
  )
}

export default Restaurants
