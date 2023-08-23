import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: { totalItems: 0, totalAmount: 0, items: [] },
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            console.log("action", action)
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalItems++
            state.totalAmount += newItem.price
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    description: newItem.description,
                    price: newItem.price,
                    totalPrice: newItem.price,
                    image: newItem.image,
                    quantity: 1
                })
            } else {
                existingItem.quantity++
                existingItem.totalPrice += existingItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload
            const item = state.items.find(item => item.id === id)
            if (state.totalItems == 0) return
            state.totalItems--
            state.totalAmount -= item.price

            if (item.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                item.quantity--
                item.totalPrice -= item.price
            }

        }
    }
})
export const cartAction = cartSlice.actions
export default cartSlice