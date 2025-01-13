import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartItemManager',
  initialState: {
    cartItems: []
  },
  reducers: {
    addToCart: (state, action) => {
    
     state.cartItems.push(action.payload)
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions

export default CartSlice.reducer