import Product from '../Product'
import { Container } from './styles'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  products?: ProductProps[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <div className="container">
      <Container>
        {Array.isArray(products) &&
          products.map((item) => (
            <li key={item.id}>
              <Product product={item} />
            </li>
          ))}
      </Container>
    </div>
  )
}

export default ProductsList
