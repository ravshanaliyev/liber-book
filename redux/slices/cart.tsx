const initialState = {
    cart_products: [],
};


const cartReducer = (state = initialState, action: any) => {
    let product_index: number;
    switch (action.type) {
        case "ADD_TO_CART":
            product_index = state.cart_products.findIndex(
                (product: any) => product.id === action.product.id
            );
            let newcart = state.cart_products as any;
            if (product_index === -1) {
                newcart = [...state.cart_products, action.product];
            }
            return {
                cart_products: newcart,
            };
        case "REMOVE_FROM_CART":
            product_index = state.cart_products.findIndex(
                (product: any) => product.id === action.product.id
            );
            let removeditem = state.cart_products.filter(
                (_, index) => index !== product_index
            );
            return {
                cart_products: removeditem,
            };
        default:
            return state;
    }
};

export { cartReducer };