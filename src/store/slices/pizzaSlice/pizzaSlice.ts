import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {PizzaSliceState, PizzaBlockProps, SearchPizzaParams} from './types'

const initialState: PizzaSliceState = {
    items: [],
    status: 'loading'
};


export const fetchPizzas = createAsyncThunk<PizzaBlockProps[], SearchPizzaParams>("pizzas/fetchPizzas", async (params) => {
    const { category, currentPage, order, sortBy } = params
    const { data } = await axios.get(`https://62946e59a7203b3ed068cc3e.mockapi.io/items?${category}&page=${currentPage}&limit=4&order=${order}&sortBy=${sortBy}`)
    return data

});

const orderSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPizzas.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchPizzas.fulfilled, (state, action) => {
                state.items = action.payload
                state.status = 'success'

            })
            .addCase(fetchPizzas.rejected, (state) => {
                state.items = []
                state.status = 'error'
            })
    }
});

const { actions, reducer } = orderSlice;

export default reducer;
export const { } = actions;
