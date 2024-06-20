import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'
import estrela from '../../assets/images/estrela.png'
import { getDescription } from '../../Pages/Restaurants'

export type Props = {
  title: string
  image: string
  rating: number
  description: string
  type: string
  featured: boolean
  id: number
}

const Product = ({
  title,
  image,
  rating,
  description,
  type,
  featured,
  id
}: Props) => {
  return (
    <S.Container>
      <S.Image src={image} alt={title} />
      <S.RatingContainer>
        <S.Title>{title}</S.Title>
        <div>
          <p>{rating}</p>
          <img src={estrela} alt="" />{' '}
        </div>
      </S.RatingContainer>
      <TagContainer>
        <Tag>{type}</Tag>
        {featured && <Tag>Destaque</Tag>}
      </TagContainer>
      <S.Description>{getDescription(description, 184)}</S.Description>
      <S.Button to={`/restaurantes/${id}`}>Saiba mais</S.Button>
    </S.Container>
  )
}

export default Product
