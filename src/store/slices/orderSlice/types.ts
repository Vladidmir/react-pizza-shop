
export type OrderInfo = {
    id: string,
    title: string,
    type: string,
    size: string,
    price: number,
    count: number,
    imageUrl: string,
  };
  
  export interface OrderSliceState {
    totalPrice: number;
    orders: OrderInfo[];
  }