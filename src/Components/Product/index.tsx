import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'
import estrela from '../../assets/images/estrela.png'
import { ProductProps } from '../../Pages/Home'
import { getDescription } from '../../Pages/Restaurants'

export type Props = {
  product: ProductProps
}

const Product = ({ product }: Props) => {
  return (
    <S.Container>
      <S.Image src={product.capa} alt={product.titulo} />
      <S.RatingContainer>
        <S.Title>{product.titulo}</S.Title>
        <div>
          <p>{product.avaliacao}</p>
          <img src={estrela} alt="" />{' '}
        </div>
      </S.RatingContainer>
      <TagContainer>
        <Tag>{product.tipo}</Tag>
        {product.destacado && <Tag>Destaque</Tag>}
      </TagContainer>
      <S.Description>{getDescription(product.descricao, 184)}</S.Description>
      <S.Button to={`/restaurantes/${product.id}`}>Saiba mais</S.Button>
    </S.Container>
  )
}

export default Product
