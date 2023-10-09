// import { products } from "../../Product/Product";

const initial = {

    product: [],

}

const productReducer = (state = initial, action) => {

    switch (action.type) {

        case 'ADD_PRODUCT':
            const find = state.product.findIndex(item => item.id === action.payload.id)

            if (find >= 0) {
                return (
                    state.product[find].data
                )
            }
            else {

                return (
                    {
                        ...state,
                        product: [...state.product, action.payload.data]

                    }
                )
            }

        case 'DELETE_PRODUCT':

            let d_product = state.product

            let delete_Product = d_product.filter((d) => {

                return d.id != action.payload

            })

            return (

                {
                    ...state,
                    product: delete_Product
                }
            )

            case 'CARD_VIEW':
                let cardData = state.product

                let viewCard = cardData.filter((view) => {
                    return view.id != action.payload
                })

                return(
                    {
                        ...state,
                        product: viewCard
                    }
                )

            case 'INC':
                return(
                    {
                        ...state,
                        product: action.payload.qty + 1
                    }
                )

        default:
            return state;


    }

}

export default productReducer;