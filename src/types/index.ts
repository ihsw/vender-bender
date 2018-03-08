export interface StoreState {
    productItems: ProductItem[];
}

export interface ProductItem {
    item: Product;
    quantity: number;
}

export interface Product {
    name: string;
    code: string;
    price: number;
}
