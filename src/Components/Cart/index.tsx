import { Button } from '../Plates/styles'
import * as S from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { closeCart, removeFromCart } from '../../store/reducers/cart'

const Cart = () => {
  const { active, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const close = () => {
    dispatch(closeCart())
  }

  const remove = (id: number) => {
    dispatch(removeFromCart({ id }))
  }

  const getPlatePrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  return (
    <S.Container className={active ? 'active' : ''}>
      <S.Overlay onClick={close} />
      <S.Sidebar>
        <ul>
          {items.map((item) => (
            <S.Item key={item.id}>
              <img src={item.foto} alt={item.nome} />
              <div>
                <S.Title>{item.nome}</S.Title>
                <S.Price>{getPlatePrice(item.preco)}</S.Price>
              </div>
              <button onClick={() => remove(item.id)} />
            </S.Item>
          ))}
        </ul>
        <S.Total>
          Valor total <span>{getPlatePrice(getTotal())}</span>
        </S.Total>
        <Button>Continuar com a entrega</Button>
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
