import { Container, Logo } from '../../styles'
import LogoImg from '../../assets/images/logo.png'
import * as S from './styles'
import { openCart } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

const Header = () => {
  const dispatch = useDispatch()

  const open = () => {
    dispatch(openCart())
  }

  return (
    <Container>
      <S.HeroWrapper>
        <S.HeaderText>Restaurante</S.HeaderText>
        <Logo src={LogoImg} alt="efood logo" />
        <S.HeaderText onClick={open}>{0} produto(s) no carrinho</S.HeaderText>
      </S.HeroWrapper>
    </Container>
  )
}

export default Header
