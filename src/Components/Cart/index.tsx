import { Button } from '../Plates/styles'
import pizza from '../../assets/images/pizza.png'
import * as S from './styles'

const Cart = () => {
  return (
    <S.Container>
      <S.Overlay />
      <S.Sidebar>
        <ul>
          <S.Item>
            <img src={pizza} alt="" />
            <div>
              <S.Title>Pizza</S.Title>
              <S.Price>R$XXX.XX</S.Price>
            </div>
            <button />
          </S.Item>
          <S.Item>
            <img src={pizza} alt="" />
            <div>
              <S.Title>Pizza</S.Title>
              <S.Price>R$XXX.XX</S.Price>
            </div>
            <button />
          </S.Item>
        </ul>
        <S.Total>
          Valor total <span>R$XXX.XX</span>
        </S.Total>
        <Button>Continuar com a entrega</Button>
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
