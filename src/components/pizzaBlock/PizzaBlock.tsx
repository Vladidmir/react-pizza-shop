import React, { useState, FC } from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/reduxWith";
import { addOrder } from "../../store/slices/orderSlice/orderSlice";


import { OrderInfo } from "../../store/slices/orderSlice/types";
import "./pizzaBlock.scss";

export type PizzaBlockProps = {
  id: string;
  title: string;
  price: number;
  imageUrl: string;
  sizes: number[];
  types: number[];
  rating: number;
};




const PizzaBlock: FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const selectPizza = useAppSelector(state => state.orderReducer.orders.find((obj) => obj.id === id)
  );
  const currentCount = selectPizza ? selectPizza.count : 0;

  const [activeDough, setActiveDough] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeDough = ["тонкое", "традиционное"];

  const dispatch = useAppDispatch();

  const onHandleAdd = () => {
    const order: OrderInfo = {
      id,
      title,
      price,
      imageUrl,
      type: typeDough[activeDough],
      size: sizes[activeSize] + '',
      count: 0,
    };
    dispatch(addOrder(order));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{title}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((dough) => (
            <li
              key={dough}
              onClick={() => setActiveDough(dough)}
              className={activeDough == dough ? "active" : ''}
            >
              {typeDough[dough]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, i) => (
            <li
              key={i}
              onClick={() => setActiveSize(i)}
              className={activeSize === i ? "active" : ''}
            >
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">{price} ₴</div>
        <button
          className="button button--outline button--add"
          onClick={() => onHandleAdd()}
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            ></path>
          </svg>
          <span>Добавить</span>
          {currentCount > 0 && <i>{currentCount}</i>}
        </button>
      </div>
    </div>
  );
};
export default PizzaBlock;
