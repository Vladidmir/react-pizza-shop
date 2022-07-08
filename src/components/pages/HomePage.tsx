import React, { useEffect, useState } from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxWith";

import Categories from "../categories/Categories";
import Sorting from "../sorting/Sorting";
import PizzaBlock from "../pizzaBlock/PizzaBlock";
import Pagination from "../pagination/Pagination";
import { PizzaSkeleton } from "../pizzaBlock/PizzaSkeleton";

import { fetchPizzas } from "../../store/slices/pizzaSlice/pizzaSlice";

const HomePage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const dispatch = useAppDispatch();

  const { sort, categoryId, searchValue } = useAppSelector(
    (state) => state.filterReducer
  );
  const sortType = sort.sortProperty;

  const { items, status } = useAppSelector((state) => state.pizzaReducer);

  useEffect(() => {
    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    dispatch(
      fetchPizzas({
        sortBy,
        order,
        category,
        currentPage: String(currentPage),
      })
    );
  }, [currentPage, categoryId, sortType]);

  const fakeList = [...new Array(6)].map((_, i) => <PizzaSkeleton key={i} />);

  const filteredList = items.filter((obj) => {
    if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
      return true;
    }
    return false;
  });

  const updatedList = searchValue ? filteredList : items;
  const visibleData = updatedList.map((info) => (
    <PizzaBlock key={info.id} {...info} />
  ));

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sorting />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <li className="content__items">
        {status === "loading" ? fakeList : visibleData}
      </li>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default HomePage;
