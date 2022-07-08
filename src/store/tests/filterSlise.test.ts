import filterReducer, {
  setSearchValue,
  setCategoryId,
  setSort,
} from '../slices/filterSlice/filterSlice'


import { SortPropertyEnum } from '../slices/filterSlice/types'

const filterState = {
  searchValue: '',
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: SortPropertyEnum.PRICE_DESC,
  },
}

describe('filterSlice', () => {

  test('should return default state when passed an empty action', () => {
    const result = filterReducer(undefined, { type: '' });
    expect(result).toEqual(filterState)
  })

  test(`search string should be updated with setSearchValue action`, () => {
    const action = { type: setSearchValue.type, payload: 'пеп' };
    const result = filterReducer(filterState, action)
    expect(result.searchValue).toEqual('пеп')
  })

})