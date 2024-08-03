declare type Plate = {
  id: number
  titulo: string
  descricao: string
  destacado: boolean
  tipo: string
  avaliacao: number
  capa: string
  cardapio: {
    foto: string
    preco: number
    id: number
    nome: string
    descricao: string
    porcao: string
  }
}
