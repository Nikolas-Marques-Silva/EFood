import Apresentation from '../../Components/Apresentation'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import { useParams } from 'react-router-dom'
import PlatesList from '../../Components/PlatesList'
import { useGetPlatesQuery } from '../../services/api'

export function getDescription(descricao: string, Length: number) {
  if (descricao.length > Length) {
    return `${descricao.substring(0, Length - 3)}...`
  }
  return `${descricao}`
}

const Restaurants = () => {
  const { id } = useParams()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data: product } = useGetPlatesQuery(id!)

  if (product) {
    return (
      <>
        <Header />
        <Apresentation
          image={product.capa}
          title={product.titulo}
          type={product.tipo}
        />
        <PlatesList products={product.cardapio} />
        <Footer />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Restaurants
