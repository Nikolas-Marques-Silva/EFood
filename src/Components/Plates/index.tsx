import { useState } from 'react'
import { useDispatch } from 'react-redux'

import close from '../../assets/images/close.png'

import { getDescription } from '../../Pages/Restaurants'
import { addToCart, openCart } from '../../store/reducers/cart'

import * as S from './styles'

type Props = {
  plate: Plate['cardapio']
}

const Plates = ({ plate }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const getPlatePrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const dispatch = useDispatch()

  const add = () => {
    dispatch(addToCart({ cardapio: plate }))
    dispatch(openCart())
  }

  return (
    <>
      <S.Container>
        <S.Image src={plate.foto} alt={plate.nome} />
        <S.Title>{plate.nome}</S.Title>
        <S.Description>{getDescription(plate.descricao, 122)}</S.Description>
        <S.Button onClick={() => setModalIsOpen(true)}>Ver mais</S.Button>
      </S.Container>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ModalContent>
          <S.Close
            onClick={() => setModalIsOpen(false)}
            src={close}
            alt="Fechar"
          />
          <S.ModalImage src={plate.foto} alt={plate.nome} />
          <S.ModalDetails>
            <S.ModalTitle>{plate.nome}</S.ModalTitle>
            <S.ModalDescription>{plate.descricao}</S.ModalDescription>
            <S.ModalPortion>Serve: {plate.porcao}</S.ModalPortion>
            <S.ModalButton onClick={add}>
              Adicionar ao carrinho - {getPlatePrice(plate.preco)}
            </S.ModalButton>
          </S.ModalDetails>
        </S.ModalContent>
        <S.Overlay onClick={() => setModalIsOpen(false)} />
      </S.Modal>
    </>
  )
}

export default Plates
