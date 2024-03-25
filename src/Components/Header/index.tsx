import { Container, Logo } from '../../styles'
import LogoImg from '../../assets/images/logo.png'
import { HeaderText, HeroWrapper } from './styles'

const Header = () => {
  return (
    <Container>
      <HeroWrapper>
        <HeaderText>Restaurante</HeaderText>
        <Logo src={LogoImg} alt="efood logo" />
        <HeaderText>{0} produto(s) no carrinho</HeaderText>
      </HeroWrapper>
    </Container>
  )
}

export default Header
