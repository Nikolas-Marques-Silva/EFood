import Tag from '../Tag'
import { TagContainer } from '../Tag/styles'
import {
  Container,
  Description,
  Image,
  RatingContainer,
  Title,
  TitleAndRatingContainer,
  Button
} from './styles'
import estrela from '../../assets/images/estrela.png'

type Props = {
  title: string
  description: string
  image: string
  stars: number
  infos: string[]
  id: number
}

const Product = ({ title, description, image, stars, infos, id }: Props) => {
  return (
    <Container>
      <Image src={image} alt={title} />
      <TitleAndRatingContainer>
        <Title>{title}</Title>
        <RatingContainer>
          <p>{stars}</p> <img src={estrela} alt="" />
        </RatingContainer>
      </TitleAndRatingContainer>
      <TagContainer>
        {infos.map((info) => (
          <Tag key={id}>{info}</Tag>
        ))}
      </TagContainer>
      <Description>{description}</Description>
      <Button>Saiba mais</Button>
    </Container>
  )
}

export default Product
