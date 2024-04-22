import Product from '../Product'
import { Container } from './styles'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  cols: 2 | 3
  type: 'restaurants' | 'products'
  products: ProductProps[]
}

const ProductsList = ({ cols, type, products }: Props) => {
  return (
    <div className="container">
      <Container products={products} cols={cols} type={type}>
        {products.map((item) => (
          <li key={item.id}>
            <Product product={item} type="restaurant" buttonType="primary" />
          </li>
        ))}
      </Container>
    </div>
  )
}

export default ProductsList
