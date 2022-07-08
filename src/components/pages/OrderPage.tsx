import React from "react";

import { useAppSelector, useAppDispatch } from "../../hooks/reduxWith";
import { clearOrders } from "../../store/slices/orderSlice/orderSlice";

import NoOrder from "../noOrder/NoOrder";
import OrderBlock from "../orderBlock/OrderBlock";

import TrashSvg from "../orderBlock/icons/TrashSvg";
import OrderSvg from "../orderBlock/icons/OrderSvg";
import "../../scss/style.scss";


const OrderPage = () => {

  const { totalPrice, orders } = useAppSelector(state => state.orderReducer)

  const totalCount = orders.reduce((sum, item) => sum + item.count, 0);

  const dispatch = useAppDispatch();

  const onHandleClear = () => {
    dispatch(clearOrders());
  };

  if (!totalPrice) {
    return <NoOrder />;
  }

  return (
    <div className="container container--cart">
      <div className="cart">
        <div className="cart__top">
          <h2 className="content__title">
            <OrderSvg />
            Корзина
          </h2>
          <div onClick={onHandleClear} className="cart__clear">
            <TrashSvg />
            <span>Очистить корзину</span>
          </div>
        </div>
        <div className="content__pizzas">
          {orders.map((objOrder) => (
            <OrderBlock key={objOrder.id} {...objOrder} />
          ))}
        </div>
        <div className="cart__bottom">
          <div className="cart__bottom-details">
            <span>
              {" "}
              Всего пицц: <b>{totalCount} шт.</b>{" "}
            </span>
            <span>
              {" "}
              Сумма заказа: <b>{totalPrice}₽</b>{" "}
            </span>
          </div>
          <div className="cart__bottom-buttons">
            <a href="/" className="button button--outline button--add go-back-btn">
              &#706;
              <span style={{ marginLeft: 10 }}>Вернуться назад</span>
            </a>
            <div className="button pay-btn">
              <span>Оплатить сейчас</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
