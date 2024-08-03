import Product from '../Product'

import { Container } from './styles'

export type Props = {
  products: Plate[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <div className="container">
      <Container>
        {products.map((item) => (
          <li key={item.id}>
            <Product
              title={item.titulo}
              description={item.descricao}
              image={item.capa}
              rating={item.avaliacao}
              type={item.tipo}
              featured={item.destacado}
              id={item.id}
            />
          </li>
        ))}
        s
      </Container>
    </div>
  )
}

export default ProductsList
