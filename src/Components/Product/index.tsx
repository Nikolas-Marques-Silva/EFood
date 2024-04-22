import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'
import estrela from '../../assets/images/estrela.png'
import { ProductProps } from '../../Pages/Home'

export type Props = {
  type: 'product' | 'restaurant'
  buttonType: 'primary' | 'secondary'
  product: ProductProps
}

const Product = ({ product, type, buttonType }: Props) => {
  return (
    <S.Container type={type} product={product}>
      <S.Image src={product.capa} alt={product.titulo} />
      <S.RatingContainer>
        <S.Title product={product} type={type}>
          {product.titulo}
        </S.Title>
        {product.avaliacao !== undefined && (
          <div>
            <p>{product.avaliacao}</p>
            <img src={estrela} alt="" />{' '}
          </div>
        )}
      </S.RatingContainer>
      <TagContainer>
        <Tag>{type}</Tag>
        {product.destacado && <Tag>Destaque</Tag>}
      </TagContainer>
      <S.Description product={product} type={type}>
        {product.descricao}
      </S.Description>
      <S.Button
        type={type}
        product={product}
        buttonType={buttonType}
        to={`/product/${product.id}`}
      >
        Saiba mais
      </S.Button>
    </S.Container>
  )
}

export default Product
