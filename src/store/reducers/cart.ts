import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plate } from '../../Pages/Home'

type State = {
  items: Plate[]
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
    addToCart: (state, action: PayloadAction<Plate>) => {
      state.items.push(action.payload)
    },
    openCart: (state) => {
      state.active = true
    },
    closeCart: (state) => {
      state.active = false
    }
  }
})

export const { addToCart, openCart, closeCart } = cartSlice.actions

export default cartSlice.reducer
