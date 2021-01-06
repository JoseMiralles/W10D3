const cartReducer = ( oldCart = null, action ) => {
    switch ( action.type ) {
        case "ADD_ITEMS":
            const newCart = [...oldCart, ...action.items];
            return newCart;     
        break;

        case "EMPTY_ITEMS":
            return [];
        break;

        default:
            return oldCart;
    }
}

let state = {
    cart: ["grapes", "juice"]
}

const action = {
    type: "ADD_ITEMS",
    items: ["Spaghetti", "Doritos"]
}

console.log( `Cart: ${state.cart}` );

console.log("Adding items to cart...");
state.cart = cartReducer(state.cart, action);

console.log( `Cart: ${state.cart}` );

console.log( "Emptying cart..." );
state.cart = cartReducer(state.cart, { type: "EMPTY_ITEMS" });

console.log( `Cart: ${state.cart}` );