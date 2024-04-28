import * as S from './styles'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  products?: ProductProps[]
}

const Apresentation = ({ products }: Props) => {
  return (
    <div className="container">
      {Array.isArray(products) &&
        products.map((item) => (
          <li key={item.id}>
            <S.Wrapper
              style={{ backgroundImage: `url(${item.cardapio.foto})` }}
            >
              <S.Text>{item.cardapio.descricao}</S.Text>
              <S.Title>{item.cardapio.nome}</S.Title>
            </S.Wrapper>
          </li>
        ))}
    </div>
  )
}

export default Apresentation
