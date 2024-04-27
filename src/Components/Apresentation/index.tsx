import * as S from './styles'

export type ApresentationProps = {
  image: string | undefined
  title: string | undefined
  description: string | undefined
}

const Apresentation = ({ image, title, description }: ApresentationProps) => {
  return (
    <S.Wrapper title={title} description={description} image={image}>
      <div className="container">
        <S.Text>{description}</S.Text>
        <S.Title>{title}</S.Title>
      </div>
    </S.Wrapper>
  )
}

export default Apresentation
