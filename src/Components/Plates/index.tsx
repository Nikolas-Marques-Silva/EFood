import * as S from './styles'
import { getDescription } from '../../Pages/Restaurants'
import { ProductProps } from '../../Pages/Home'

type Props = {
  products: ProductProps['cardapio']
}

const Plates = ({ products }: Props) => {
  return (
    <S.Container>
      <S.Image src={products.foto} alt={products.nome} />
      <S.Title>{products.nome}</S.Title>
      <S.Description>{getDescription(products.descricao)}</S.Description>
      <S.Button>Ver mais</S.Button>
    </S.Container>
  )
}

export default Plates
