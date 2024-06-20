import { Container } from './styles'
import Plates from '../Plates'
import { Plate } from '../../Pages/Home'

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
              <Plates
                title={item.nome}
                image={item.foto}
                description={item.descricao}
                portion={item.porcao}
                price={item.preco}
              />
            </li>
          ))}
      </Container>
    </div>
  )
}

export default ProductsList
