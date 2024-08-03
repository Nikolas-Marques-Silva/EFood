import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type State = {
  items: Plate['cardapio'][]
  active: boolean
}

const initialState: State = {
  items: [],
  active: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Pick<Plate, 'cardapio'>>) => {
      if (!state.items.some((item) => item.id === action.payload.cardapio.id)) {
        state.items = [...state.items, action.payload.cardapio]
      } else {
        alert('O item ja foi adicionado ao carrinho')
      }
    },
    openCart: (state) => {
      state.active = true
    },
    closeCart: (state) => {
      state.active = false
    },
    removeFromCart: (
      state,
      action: PayloadAction<Pick<Plate['cardapio'], 'id'>>
    ) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, openCart, closeCart, removeFromCart, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
