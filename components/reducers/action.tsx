export const activateHamburger = () => {
    return { type: "HAMBURGER_ACTIVE" }
}

export const deactivateHamburger = () => {
    return { type: "HAMBURGER_INACTIVE" }
}

export const incrementProductCount = ()=>{
    return {
        type: 'INCREMENT_PRODUCT_COUNT'
    }
}

export const decrementProductCount = ()=>{
    return {
        type: 'DECREMENT_PRODUCT_COUNT'
    }
}

export const incrementTotalAmount = (amount: number)=>{
    return {
        type: 'INCREMENT_PRODUCT_AMOUNT',
        amount: amount
    }
}
export const decrementProductAmount = (amount: number)=>{
    return {
        type: 'DECREMENT_PRODUCT_AMOUNT',
        amount: amount
    }
}

export const switchCategory = (array: any)=>{
    return{
        type: 'SWITCH_CATEGORY',
        array: array
    }
}

export const switchCategoryName = (name: string)=>{
    return {
      type: "SWITCH_CATEGORY_NAME",
      name
    };
}

export const addCheckoutItem = (item: {
  image: string;
  price: number;
  title: string;
  availability: boolean;
  description: string;
  id: number;
}) => {
  return {
    type: "ADD_CHECKOUT_ITEM",
    item,
  };
};

export const removeCheckoutItem = (item: {id: number})=>{
    return{
        type: 'REMOVE_CHECKOUT_ITEM',
        item
    }
}

export const revealContainer = ()=>{
    return{
        type: 'REVEAL_CONTAINER'
    }
}

export const removeContainer = ()=>{
    return{
        type: 'REMOVE_CONTAINER'
    }
}

export const revealCheckout = ()=>{
    return{
        type: 'REVEAL_CHECKOUT'
    }
}

export const removeCheckout = ()=>{
    return{
        type: 'REMOVE_CHECKOUT'
    }
}

export const clearCart = ()=>{
    return{
        type: 'CLEAR_PRODUCT_COUNT'
    }
}

export const clearTotal = ()=>{
    return{
        type: 'CLEAR_TOTAL'
    }
}

export const scrubCart = ()=>{
    return{
        type: 'SCRUB-CART'
    }
}

export const addAllProductData = (data: any)=>{
    return{
        type: 'ADD_All_PRODUCT_DATA',
        data
    }
}

export const addTelevisionsProductData = (data: any)=>{
    return{
        type: 'ADD_TELEVISIONS_PRODUCT_DATA',
        data
    }
}

export const expandProductView = (data: any)=>{
    return{
        type: 'EXPAND_PRODUCT_VIEW',
        data
    }
}

