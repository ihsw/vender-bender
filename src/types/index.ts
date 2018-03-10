export interface StoreState {
    productItems: ProductItems;
    changeRefunded?: number | null;
    lastProductOrdered?: ProductItem | null;
}

export interface ProductItems {
    [key: string]: ProductItem;
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
