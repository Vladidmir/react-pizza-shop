import React, { useEffect, useState } from "react";


import SearchIcon from "./icons/SearchIcon";
import ClearIcon from "./icons/ClearIcon";
import useDebounce from "../../hooks/useDebounce";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxWith";

import { setSearchValue } from "../../store/slices/filterSlice/filterSlice";

import s from "./search.module.scss";

const Search = () => {
  const [liveValue, setLiveValue] = useState('')

  const dispatch = useAppDispatch();
  const { searchValue } = useAppSelector(state => state.filterReducer);
  const debouncedValue = useDebounce<string>(liveValue, 500)


  const onChangeInput = (str: string) => {
    setLiveValue(str)
  };

  useEffect(() => {

    dispatch(setSearchValue(liveValue));

  }, [debouncedValue])


  return (
    <div className={s.root}>
      <SearchIcon styles={s.searchIcon} />
      <input
        onChange={(e) => onChangeInput(e.target.value)}
        className={s.input}
        value={liveValue}
        placeholder="Поиск пиццы..."
      />

      {searchValue ? <ClearIcon onClear={onChangeInput} styles={s.clearIcon} /> : ''}
    </div>
  );
};

export default Search;
