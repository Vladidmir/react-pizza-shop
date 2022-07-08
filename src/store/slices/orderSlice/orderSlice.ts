import { createSlice } from "@reduxjs/toolkit";
import { OrderSliceState } from "./types";

import {calcTotalPrice} from '../../../utils/calcTotalPrice'


const initialState: OrderSliceState  = {
    totalPrice: 0,
    orders: []
}


const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        addOrder(state, { payload }) {

            const findItem = state.orders.find((obj) => obj.id === payload.id)
            if (findItem) {
                findItem.count++
            } else {
                state.orders.push({
                    ...payload,
                    count: 1
                })
            }

            state.totalPrice = state.orders.reduce((sum, obj) => {
                return (obj.price * obj.count) + sum
            }, 0)
        },
        minusOrder(state, { payload }) {
            const findItem = state.orders.find((obj) => obj.id === payload)
            if (findItem?.count) {
                findItem.count--
                state.totalPrice = calcTotalPrice(state.orders)
            }
        },
        removeOrder(state, { payload }) {
            state.orders = state.orders.filter(order => order.id !== payload)
            state.totalPrice = calcTotalPrice(state.orders)
        },
        clearOrders(state) {
            state.orders = []
            state.totalPrice = 0
        }
    },

});

const { actions, reducer } = orderSlice;

export default reducer;
export const {
    addOrder,
    minusOrder,
    removeOrder,
    clearOrders,
} = actions;