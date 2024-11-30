import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
        const { name, quantity } = action.payload;

        if (Object.hasOwn(state, name)){
            state[name].quantity += quantity;
        } else {
            state[name] = action.payload;
        }
    },
    removeItem(state, action) {
      delete state[action.payload]
    },
    clearItems() {
      return {};
    },
    updateItem(state, action) {
        const { name } = action.payload;
        state[name] = { ...action.payload };
    }
  },
});

export const { addItem, removeItem, clearItems, updateItem } = cartSlice.actions;
export default cartSlice.reducer;
