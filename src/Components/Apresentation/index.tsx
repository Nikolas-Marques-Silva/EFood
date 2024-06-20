import * as S from './styles'

export type Props = {
  image: string
  title: string
  type: string
}

const Apresentation = ({ title, type, image }: Props) => {
  return (
    <S.Container>
      <S.Wrapper style={{ backgroundImage: `url(${image})` }}>
        <div className="container">
          <S.Title>{title}</S.Title>
          <S.Text>{type}</S.Text>
        </div>
      </S.Wrapper>
    </S.Container>
  )
}

export default Apresentation
