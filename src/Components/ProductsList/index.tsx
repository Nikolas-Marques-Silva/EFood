import Product from '../Product'
import { Container } from './styles'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  cols: 2 | 3
  type: 'restaurants' | 'products'
  buttontype: 'primary' | 'secondary'
  products?: ProductProps[]
}

const ProductsList = ({ cols, type, buttontype, products }: Props) => {
  return (
    <div className="container">
      <Container
        products={products}
        cols={cols}
        type={type}
        buttontype={buttontype}
      >
        {Array.isArray(products) &&
          products.map((item) => (
            <li key={item.id}>
              <Product product={item} type={type} buttontype={buttontype} />
            </li>
          ))}
      </Container>
    </div>
  )
}

export default ProductsList
