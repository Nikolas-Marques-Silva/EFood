import * as S from './styles'
import { getDescription } from '../../Pages/Restaurants'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  products?: ProductProps['cardapio'][]
}

const Apresentation = ({ products }: Props) => {
  return (
    <div className="container">
      {Array.isArray(products) &&
        products.map((item) => (
          <li key={item.id}>
            <S.Wrapper style={{ backgroundImage: `url(${item.foto})` }} />
            <S.Title>{item.nome}</S.Title>
            <S.Text>{getDescription(item.descricao)}</S.Text>
          </li>
        ))}
    </div>
  )
}

export default Apresentation
