import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'
import estrela from '../../assets/images/estrela.png'

export type Props = {
  type: 'products' | 'restaurants'
  buttonType: 'primary' | 'secondary'
  product: {
    id: number
    titulo: string
    descricao: string
    destacado: boolean
    tipo: string
    avaliacao: number
    capa: string
    cardapio: {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  }
}

const Product = ({ product, type, buttonType }: Props) => {
  return (
    <S.Container type={type}>
      <S.Image
        src={type === 'restaurants' ? product.capa : product.cardapio.foto}
        alt={type === 'restaurants' ? product.titulo : product.cardapio.nome}
      />
      <S.RatingContainer>
        <S.Title type={type}>
          {type === 'restaurants' ? product.titulo : product.cardapio.nome}
        </S.Title>
        {type === 'restaurants' && (
          <div>
            <p>{product.avaliacao}</p>
            <img src={estrela} alt="" />{' '}
          </div>
        )}
      </S.RatingContainer>
      {type === 'restaurants' && (
        <TagContainer>
          <Tag>{product.tipo}</Tag>
          {product.destacado && <Tag>Destaque</Tag>}
        </TagContainer>
      )}
      <S.Description type={type}>
        {type === 'restaurants'
          ? product.descricao
          : product.cardapio.descricao}
      </S.Description>
      <S.Button buttonType={buttonType} to={`/restaurantes/${product.id}`}>
        Saiba mais
      </S.Button>
    </S.Container>
  )
}

export default Product
