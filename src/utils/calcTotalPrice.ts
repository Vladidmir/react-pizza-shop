import { OrderInfo } from "../store/slices/orderSlice/types";
export const calcTotalPrice = (items: OrderInfo[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};
