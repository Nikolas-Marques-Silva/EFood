import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import {
  Container,
  Description,
  Image,
  RatingContainer,
  Title,
  Button
} from './styles'
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
    <Container type={type} id={id}>
      <Image src={image} alt={title} />
      <RatingContainer>
        <Title type={type}>{title}</Title>
        {stars !== undefined && (
          <div>
            <p>{stars}</p>
            <img src={estrela} alt="" />{' '}
          </div>
        )}
      </RatingContainer>
      <TagContainer>
        {infos !== undefined &&
          infos.map((info, index) => <Tag key={index}>{info}</Tag>)}
      </TagContainer>
      <Description type={type}>{description}</Description>
      <Button buttonType={buttonType} to={to ?? ''}>
        Saiba mais
      </Button>
    </Container>
  )
}

export default Product
