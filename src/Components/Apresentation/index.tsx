import {
  ApresentationText,
  ApresentationTitle,
  ApresentationWrapper
} from './styles'

export type ApresentationProps = {
  image: string
  title: string
  description: string
}

const Apresentation = ({ image, title, description }: ApresentationProps) => {
  return (
    <ApresentationWrapper title={title} description={description} image={image}>
      <ApresentationText>{description}</ApresentationText>
      <ApresentationTitle>{title}</ApresentationTitle>
    </ApresentationWrapper>
  )
}

export default Apresentation
