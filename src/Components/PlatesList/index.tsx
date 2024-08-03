import Plates from '../Plates'

import { Container } from './styles'

export type Props = {
  products: Plate['cardapio']
}

const ProductsList = ({ products }: Props) => {
  return (
    <div className="container">
      <Container>
        {Array.isArray(products) &&
          products.map((item) => (
            <li key={item.id}>
              <Plates plate={item} />
            </li>
          ))}
      </Container>
    </div>
  )
}

export default ProductsList
