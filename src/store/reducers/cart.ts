import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Plate } from '../../Pages/Home'

type State = {
  items: Plate[]
}

const initialState: State = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Plate>) => {
      state.items.push(action.payload)
    }
  }
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
