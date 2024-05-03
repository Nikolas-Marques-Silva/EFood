import { Container, Logo } from '../../styles'
import LogoImg from '../../assets/images/logo.png'
import * as S from './styles'

const Header = () => {
  return (
    <Container>
      <S.HeroWrapper>
        <S.HeaderText>Restaurante</S.HeaderText>
        <Logo src={LogoImg} alt="efood logo" />
        <S.HeaderText>{0} produto(s) no carrinho</S.HeaderText>
      </S.HeroWrapper>
    </Container>
  )
}

export default Header
