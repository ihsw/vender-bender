export interface StoreState {
    productItems: ProductItem[];
    changeRefunded?: number | null;
}

export interface ProductItem {
    item: Product;
    isNew?: boolean;
    isPopular?: boolean;
    isOnSale?: boolean;
    quantity: number;
}

export interface Product {
    name: string;
    code: string;
    price: number;
}
