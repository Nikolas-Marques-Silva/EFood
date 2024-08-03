import { useDispatch, useSelector } from 'react-redux'

import LogoImg from '../../assets/images/logo.png'

import { openCart } from '../../store/reducers/cart'
import { RootReducer } from '../../store'

import { Container, Logo } from '../../styles'
import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const open = () => {
    dispatch(openCart())
  }

  return (
    <Container>
      <S.HeroWrapper>
        <S.HeaderText>Restaurante</S.HeaderText>
        <Logo src={LogoImg} alt="efood logo" />
        <S.HeaderText onClick={open}>
          {items.length} produto(s) no carrinho
        </S.HeaderText>
      </S.HeroWrapper>
    </Container>
  )
}

export default Header
