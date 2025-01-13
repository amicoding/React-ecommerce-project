import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './components/slices/CartSlice.js'
export default configureStore({
  reducer: {
    cartItemManager: CartSlice
  }
})