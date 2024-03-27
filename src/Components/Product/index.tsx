import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import * as S from './styles'
import estrela from '../../assets/images/estrela.png'

export type Props = {
  title: string
  description: string
  image: string
  stars?: number
  infos?: string[]
  id: number
  to?: string
  type: 'product' | 'restaurant'
  buttonType: 'primary' | 'secondary'
}

const Product = ({
  title,
  description,
  image,
  stars,
  infos,
  id,
  to,
  type,
  buttonType
}: Props) => {
  return (
    <S.Container type={type} id={id}>
      <S.Image src={image} alt={title} />
      <S.RatingContainer>
        <S.Title type={type}>{title}</S.Title>
        {stars !== undefined && (
          <div>
            <p>{stars}</p>
            <img src={estrela} alt="" />{' '}
          </div>
        )}
      </S.RatingContainer>
      <TagContainer>
        {infos !== undefined &&
          infos.map((info, index) => <Tag key={index}>{info}</Tag>)}
      </TagContainer>
      <S.Description type={type}>{description}</S.Description>
      <S.Button buttonType={buttonType} to={to ?? ''}>
        Saiba mais
      </S.Button>
    </S.Container>
  )
}

export default Product
