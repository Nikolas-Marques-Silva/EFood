import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import Card from '../Card'
import InputMask from 'react-input-mask'
import ClockLoader from 'react-spinners/ClockLoader'

import { RootReducer } from '../../store'
import { closeCart, removeFromCart, clearCart } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

import * as S from './styles'

const Cart = () => {
  enum CartStateEnum {
    PRODUCTS = 'Produtos',
    DELIVERY = 'Entrega',
    PAYMENT = 'Pagamento',
    SUCCESS = 'Sucesso'
  }

  const { active, items } = useSelector((state: RootReducer) => state.cart)
  const [CartState, setCartState] = useState<CartStateEnum>(
    CartStateEnum.PRODUCTS
  )
  const [purchase, { isSuccess, data, isLoading }] = usePurchaseMutation()

  const dispatch = useDispatch()

  const getPlatePrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price)
  }

  const getTotal = () => {
    return items.reduce((acc, item) => acc + item.preco, 0)
  }

  const checkInutHasError = (fieldName: string) => {
    return fieldName in form.errors && fieldName in form.touched ? true : false
  }

  const form = useFormik({
    initialValues: {
      name: '',
      address: '',
      city: '',
      cep: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3, 'Nome muito curto')
        .required('Nome obrigatório'),
      address: Yup.string()
        .min(3, 'Endereço muito curto')
        .required('Endereço obrigatòrio'),
      city: Yup.string()
        .min(3, 'Cidade muito curta')
        .required('Cidade obrigatória'),
      cep: Yup.string()
        .min(9, 'CEP inválido')
        .max(9, 'CEP inválido')
        .required('CEP obrigatòrio'),
      number: Yup.string()
        .min(2, 'Número inválido')
        .required('Número obrigatòrio'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(3, 'Nome do cartão inválido')
        .required('Nome do cartão obrigatòrio'),
      cardNumber: Yup.string()
        .min(19, 'Cartão inválido')
        .max(19, 'Cartão inválido')
        .required('Número do cartão obrigatòrio'),
      cardCode: Yup.string()
        .min(3, 'CVV inválido')
        .max(3, 'CVV inválido')
        .required('CVV obrigatòrio'),
      expiresMonth: Yup.string()
        .min(2, 'Mês de vencimento inválido')
        .max(2, 'Mês de vencimento inválido')
        .required('Mês de vencimento obrigatòrio'),
      expiresYear: Yup.string()
        .min(4, 'Ano de vencimento inválido')
        .max(4, 'Ano de vencimento inválido')
        .required('Ano de vencimento obrigatòrio')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.name,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.number),
            complement: values.complement
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        }
      })
    }
  })

  return (
    <S.Container className={active ? 'active' : ''}>
      <S.Overlay onClick={() => dispatch(closeCart())} />
      <S.Sidebar
        onChange={form.handleChange}
        onBlur={form.handleBlur}
        onSubmit={form.handleSubmit}
      >
        {isLoading && <ClockLoader color="#fff" />}
        {CartState === CartStateEnum.PRODUCTS && items.length !== 0 && (
          <>
            <ul>
              {items.map((item) => (
                <S.Item key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <S.Title>{item.nome}</S.Title>
                    <S.Price>{getPlatePrice(item.preco)}</S.Price>
                  </div>
                  <button
                    onClick={() => dispatch(removeFromCart({ id: item.id }))}
                  />
                </S.Item>
              ))}
            </ul>
            <S.Total>
              Valor total <span>{getPlatePrice(getTotal())}</span>
            </S.Total>
            <S.Button
              onClick={() => {
                setCartState(CartStateEnum.DELIVERY)
              }}
            >
              Continuar com a entrega
            </S.Button>
          </>
        )}
        {CartState === CartStateEnum.PRODUCTS && items.length === 0 && (
          <S.Empty>
            <p>Desculpe, mas seu carrinho esta vazio.</p>
            <p>Que tal adicionar algo?</p>
          </S.Empty>
        )}
        {CartState === CartStateEnum.DELIVERY && (
          <Card title="Entrega">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="name">Quem irá receber</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    id="name"
                    type="text"
                    value={form.values.name}
                    className={checkInutHasError('name') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="address">Endereço</label>
                  <input
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.address}
                    id="address"
                    type="text"
                    className={checkInutHasError('address') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="city">Cidade</label>
                  <input
                    onChange={form.handleChange}
                    value={form.values.city}
                    onBlur={form.handleBlur}
                    id="city"
                    type="text"
                    className={checkInutHasError('city') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cep">CEP</label>
                  <InputMask
                    mask="99999-999"
                    onChange={form.handleChange}
                    value={form.values.cep}
                    onBlur={form.handleBlur}
                    id="cep"
                    type="text"
                    className={checkInutHasError('cep') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="number">Número</label>
                  <input
                    onChange={form.handleChange}
                    value={form.values.number}
                    onBlur={form.handleBlur}
                    id="number"
                    type="text"
                    className={checkInutHasError('number') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="complement">Complemento (opicional)</label>
                  <input
                    onChange={form.handleChange}
                    value={form.values.complement}
                    onBlur={form.handleBlur}
                    id="complement"
                    type="text"
                    className={checkInutHasError('complement') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Button
                onClick={() => {
                  form.handleSubmit()
                  setCartState(CartStateEnum.PAYMENT)
                }}
              >
                Continuar com o pagamento
              </S.Button>
              <S.Button
                onClick={() => {
                  setCartState(CartStateEnum.PRODUCTS)
                }}
              >
                Voltar para o carrinho
              </S.Button>
            </>
          </Card>
        )}
        {CartState === CartStateEnum.PAYMENT && (
          <Card
            title={`Pagamento - Valor a pagar ${getPlatePrice(getTotal())}`}
          >
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="cardName">Nome do cartão</label>
                  <input
                    onChange={form.handleChange}
                    value={form.values.cardName}
                    onBlur={form.handleBlur}
                    id="cardName"
                    type="text"
                    className={checkInutHasError('cardName') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup maxwidth="228px">
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    onChange={form.handleChange}
                    value={form.values.cardNumber}
                    onBlur={form.handleBlur}
                    id="cardNumber"
                    type="text"
                    className={checkInutHasError('cardNumber') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup maxwidth="87px">
                  <label htmlFor="cardCode">CVV</label>
                  <InputMask
                    mask="999"
                    onChange={form.handleChange}
                    value={form.values.cardCode}
                    onBlur={form.handleBlur}
                    id="cardCode"
                    type="text"
                    className={checkInutHasError('cardCode') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="expiresMonth">Mês de vencimento</label>
                  <InputMask
                    mask="99"
                    onChange={form.handleChange}
                    value={form.values.expiresMonth}
                    onBlur={form.handleBlur}
                    id="expiresMonth"
                    type="text"
                    className={checkInutHasError('expiresMonth') ? 'error' : ''}
                  />
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="expiresYear">Ano de vencimento</label>
                  <InputMask
                    mask="9999"
                    onChange={form.handleChange}
                    value={form.values.expiresYear}
                    onBlur={form.handleBlur}
                    id="expiresYear"
                    type="text"
                    className={checkInutHasError('expiresYear') ? 'error' : ''}
                  />
                </S.InputGroup>
              </S.Row>
              <S.Button
                onClick={() => {
                  form.handleSubmit()
                  if (form.isValid) {
                    setCartState(CartStateEnum.SUCCESS)
                  }
                }}
              >
                Finalizar pagamento
              </S.Button>
              <S.Button onClick={() => setCartState(CartStateEnum.DELIVERY)}>
                Voltar para a edição de endereço
              </S.Button>
            </>
          </Card>
        )}
        {isSuccess && CartState === CartStateEnum.SUCCESS && (
          <Card title={`Pedido realizado - ${data ? data.orderId : 'N/A'}`}>
            <>
              <p>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.{' '}
              </p>
              <br />
              <p>
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras.
              </p>
              <br />
              <p>
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição.
              </p>
              <br />
              <p>
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite!
              </p>
              <br />
              <S.Button
                type="submit"
                onClick={() => {
                  dispatch(closeCart())
                  setCartState(CartStateEnum.PRODUCTS)
                  form.resetForm()
                  dispatch(clearCart())
                }}
              >
                Concluir
              </S.Button>
            </>
          </Card>
        )}
      </S.Sidebar>
    </S.Container>
  )
}

export default Cart
