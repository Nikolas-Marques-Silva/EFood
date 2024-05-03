import * as S from './styles'
import { getDescription } from '../../Pages/Restaurants'
import { ProductProps } from '../../Pages/Home'
import close from '../../assets/images/close.png'
import { useState } from 'react'

type Props = {
  products: ProductProps['cardapio']
}

const Plates = ({ products }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  function getPlatePrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  return (
    <>
      <S.Container>
        <S.Image src={products.foto} alt={products.nome} />
        <S.Title>{products.nome}</S.Title>
        <S.Description>{getDescription(products.descricao, 122)}</S.Description>
        <S.Button onClick={() => setModalIsOpen(true)}>Ver mais</S.Button>
      </S.Container>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ModalContent>
          <S.Close
            onClick={() => setModalIsOpen(false)}
            src={close}
            alt="Fechar"
          />
          <S.ModalImage src={products.foto} alt={products.nome} />
          <S.ModalDetails>
            <S.ModalTitle>{products.nome}</S.ModalTitle>
            <S.ModalDescription>{products.descricao}</S.ModalDescription>
            <S.ModalPortion>Serve: {products.porcao}</S.ModalPortion>
            <S.ModalButton>
              Adicionar aocarrinho - {getPlatePrice(products.preco)}
            </S.ModalButton>
          </S.ModalDetails>
        </S.ModalContent>
        <S.Overlay onClick={() => setModalIsOpen(false)} />
      </S.Modal>
    </>
  )
}

export default Plates
