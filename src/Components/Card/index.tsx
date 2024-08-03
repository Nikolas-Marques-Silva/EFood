import * as S from './styles'

type Props = {
  title: string
  children: JSX.Element
}

const Card = ({ title, children }: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {children}
    </S.Container>
  )
}

export default Card
