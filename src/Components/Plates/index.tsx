import * as S from './styles'
import { getDescription } from '../../Pages/Restaurants'
import close from '../../assets/images/close.png'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../store/reducers/cart'

type Props = {
  title: string
  image: string
  description: string
  portion: string
  price: number
}

const Plates = ({ title, image, description, portion, price }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function getPlatePrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const dispatch = useDispatch()

  const add = () => {
    dispatch(addToCart())
  }

  return (
    <>
      <S.Container>
        <S.Image src={image} alt={title} />
        <S.Title>{title}</S.Title>
        <S.Description>{getDescription(description, 122)}</S.Description>
        <S.Button onClick={() => setModalIsOpen(true)}>Ver mais</S.Button>
      </S.Container>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ModalContent>
          <S.Close
            onClick={() => setModalIsOpen(false)}
            src={close}
            alt="Fechar"
          />
          <S.ModalImage src={image} alt={title} />
          <S.ModalDetails>
            <S.ModalTitle>{title}</S.ModalTitle>
            <S.ModalDescription>{description}</S.ModalDescription>
            <S.ModalPortion>Serve: {portion}</S.ModalPortion>
            <S.ModalButton>
              Adicionar ao carrinho - {getPlatePrice(price)}
            </S.ModalButton>
          </S.ModalDetails>
        </S.ModalContent>
        <S.Overlay onClick={() => setModalIsOpen(false)} />
      </S.Modal>
    </>
  )
}

export default Plates
