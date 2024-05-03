import * as S from './styles'
import { getDescription } from '../../Pages/Restaurants'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  products?: ProductProps
}

const Apresentation = ({ products }: Props) => {
  return (
    <S.Container>
      <S.Wrapper style={{ backgroundImage: `url(${products?.capa})` }}>
        <div className="container">
          <S.Title>{products?.titulo}</S.Title>
          <S.Text>{getDescription(products?.descricao || '', 69)}</S.Text>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Apresentation
