import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from './types';


const initialState: FilterSliceState = {

    searchValue: '',
    categoryId: 0,
    sort: {
        name: 'популярности',
        sortProperty: SortPropertyEnum.PRICE_DESC,
    },
}


const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setSearchValue(state, { payload }: PayloadAction<string>) {
            state.searchValue = payload
        },
        setCategoryId(state, { payload }: PayloadAction<number>) {
            state.categoryId = payload
        },

        setSort(state, { payload }: PayloadAction<Sort>) {
            state.sort = payload;
        },
    },

});

const { actions, reducer } = filterSlice;

export default reducer;
export const {
    setSearchValue,
    setCategoryId,
    setSort,
} = actions;