const initialState = {
    cartItems: []
}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let dataIndex = state.cartItems.findIndex(item =>item.id == action.payload.id);
            console.log(dataIndex);
            if (dataIndex != -1) {
                const updateCartItems = state.cartItems.map((item, index) => {
                    if (index === dataIndex) {
                        return {
                            ...item,
                            quantity: item.quantity + 1
                        }
                    }
                    return item;
                });
                return {
                    ...state, cartItems: updateCartItems
                }
            }
            else {
                return {
                    ...state,
                    cartItems: [...state.cartItems,action.payload]
                }
            }
        case 'REMOVE_FROM_CART': {
            return {
                ...state,
                cartItems: state.cartItems.filter(item => item.id !== action.payload)
            }
        }
        default:
            return state;
    }
}

export default cartReducer;