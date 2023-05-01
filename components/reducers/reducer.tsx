import { combineReducers } from "redux";

interface Cart {
  push?: () => any;
  image?: string;
  price?: number;
  id?: number;
  title?: string;
  description?: string;
  availability?: boolean;
}

const hamburgerState = (state = false, action: { type: string }) => {
  switch (action.type) {
    case "HAMBURGER_ACTIVE":
      return state = true;
    case "HAMBURGER_INACTIVE":
      return state = false;
    default:
      return false
  }
}



export const productCounter = (
  state = 0,
  action: { type: string; amount: number }
) => {
  switch (action.type) {
    case "INCREMENT_PRODUCT_COUNT":
      return state + 1;
    case "DECREMENT_PRODUCT_COUNT":
      return state - 1;
    case "CLEAR_PRODUCT_COUNT":
      return state = 0
    default:
      return state;
  }
};

export const totalAmount = (
  state = 0,
  action: { type: string; amount: number }
) => {
  switch (action.type) {
    case "INCREMENT_PRODUCT_AMOUNT":
      return state + action.amount;
    case "DECREMENT_PRODUCT_AMOUNT":
      return state - action.amount;
    case "CLEAR_TOTAL":
      return state = 0
    default:
      return state;
  }
};

export const category = (state = [], action: { type: string; array: any }) => {
  // console.log(action.array)
  switch (action.type) {
    case "SWITCH_CATEGORY":
      return (state = action.array);
    default:
      return state;
  }
};

export const categoryName = (
  state = "",
  action: { type: string; name: string }
) => {
  switch (action.type) {
    case "SWITCH_CATEGORY_NAME":
      return (state = action.name);
    default:
      return state;
  }
};

export const checkoutItems = (
  state = [],
  action: { type: string; item: Cart }
) => {
  switch (action.type) {
    case "ADD_CHECKOUT_ITEM":
      //console.log([...state, action.item]);
      return [...state, action.item];

    case "REMOVE_CHECKOUT_ITEM":
      const index = state.findIndex(
        (cartItem: any) => cartItem.id === action.item.id
      );
      let newCart = [...state];
      if (index >= 0) {
        //alert("Removed!");
        newCart.splice(index, 1);
        console.log(newCart);
      } else {
        alert(`Cannot remove product with id: ${action.item.id}: Not in cart!`);
      }
      return newCart;

    case "SCRUB-CART":
      return state = []
    default:
      return state;
  }
};

export const container = (
  state = true,
  action: { type: string; flag: boolean }
) => {
  switch (action.type) {
    case "REVEAL_CONTAINER":
      return (state = true);
    case "REMOVE_CONTAINER":
      return (state = false);
    default:
      return state;
  }
};

export const checkout = (
  state = false,
  action: { type: string; flag: boolean }
) => {
  switch (action.type) {
    case "REVEAL_CHECKOUT":
      return (state = true);
    case "REMOVE_CHECKOUT":
      return (state = false);
    default:
      return state;
  }
};

export const allProductData = (state = [], action: { type: string, data: any }) => {
  switch (action.type) {
    case "ADD_All_PRODUCT_DATA":
      return state = action.data
    default:
      return state
  }
}

export const televisionsProductData = (state = [], action: { type: string, data: any }) => {
  switch (action.type) {
    case "ADD_TELEVISIONS_PRODUCT_DATA":
      return state = action.data
    default:
      return state
  }
}

export const expandedProduct = (state = [], action: { type: string, data: any }) => {
  switch (action.type) {
    case "EXPAND_PRODUCT_VIEW":
      return action.data
    default:
      return state
  }
}



export const allReducers = combineReducers({
  hamburgerState,
  totalAmount,
  productCounter,
  category,
  categoryName,
  checkoutItems,
  container,
  checkout,
  allProductData,
  televisionsProductData,
  expandedProduct
})