export interface PizzaSliceState {
    items: PizzaBlockProps[],
    status: string,
    
}
export type PizzaBlockProps = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    sizes: number[];
    types: number[];
    rating: number;
  };

export type SearchPizzaParams = {
    sortBy: string;
    order: string;
    category: string;
    currentPage: string;
};


export const initialState: PizzaSliceState = {
    items: [],
    status: 'loading'
};
