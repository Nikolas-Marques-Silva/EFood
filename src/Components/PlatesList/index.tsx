import { Container } from './styles'
import Plates from '../Plates'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  products?: ProductProps['cardapio']
}

const ProductsList = ({ products }: Props) => {
  return (
    <div className="container">
      <Container>
        {Array.isArray(products) &&
          products.map((item) => (
            <li key={item.id}>
              <Plates products={item} />
            </li>
          ))}
      </Container>
    </div>
  )
}

export default ProductsList
