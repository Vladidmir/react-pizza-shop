import React, { FC } from "react";

import { useAppDispatch } from "../../hooks/reduxWith";
import { OrderInfo } from "../../store/slices/orderSlice/types";

import {
  addOrder,
  minusOrder,
  removeOrder,
} from "../../store/slices/orderSlice/orderSlice";


const OrderBlock: FC<OrderInfo> = ({ id, title, type, size, price, count, imageUrl }) => {
  const dispatch = useAppDispatch();

  const onHandlePlus = () => {
    dispatch(addOrder({ id } as OrderInfo));
  };

  const onHandleMinus = () => {
    dispatch(minusOrder(id));
  };

  const onHandleRemove = (id: string) => {
    dispatch(removeOrder(id));
  };

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      </div>
      <div className="cart__item-info">
        <h3>{title}</h3>
        <p>
          {" "}
          {type}, {size} см.
        </p>
      </div>
      <div className="cart__item-count">
        <button
          style={{
            visibility: count === 1 ? 'hidden' : 'visible'
          }}
          onClick={onHandleMinus}
          className="button button--outline button--circle cart__item-count-minus"
        >
          &#8210;
        </button>
        <b>{count}</b>
        <button
          onClick={onHandlePlus}
          className="button button--outline button--circle cart__item-count-plus"
        >
          &#43;
        </button>
      </div>
      <div className="cart__item-price">
        <b>{price * count} ₽</b>
      </div>
      <div className="cart__item-remove">
        <div
          onClick={() => onHandleRemove(id)}
          className="button button--outline button--circle"
        >
          &#215;
        </div>
      </div>
    </div>
  );
};

export default OrderBlock;
