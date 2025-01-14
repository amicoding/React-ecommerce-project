import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cartItemManager',
  initialState: {
    cartItems: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addToCart: (state, action) => {
    
     state.cartItems.push(action.payload)
   
       
     localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },
   
  }
})

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions

export default CartSlice.reducer