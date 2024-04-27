import Product from '../Product'
import { Container } from './styles'
import { ProductProps } from '../../Pages/Home'
import { useFetch } from '../../Hooks/Produtos'

export type Props = {
  cols: 2 | 3
  type: 'restaurants' | 'products'
  buttonType: 'primary' | 'secondary'
}

const ProductsList = ({ cols, type, buttonType }: Props) => {
  const { data: products } = useFetch<ProductProps[]>(
    'https://fake-api-tau.vercel.app/api/efood/restaurantes'
  )

  return (
    <div className="container">
      <Container cols={cols} type={type} buttonType={buttonType}>
        {products?.map((item) => (
          <li key={item.id}>
            <Product product={item} type={type} buttonType={buttonType} />
          </li>
        ))}
      </Container>
    </div>
  )
}

export default ProductsList
