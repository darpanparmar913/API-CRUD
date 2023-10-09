

export const addCart = (id, data) =>{



    return{

        type: 'ADD_PRODUCT',
        payload : {id, data}
        
    }

}

export const deleteProduct = (id) =>{

    return{

        type: 'DELETE_PRODUCT',
        payload : id
        
    }

}

export const handleBuy = (id,data)=>{

    return{
        type: 'CARD_VIEW',
        payload: (id,data)
    }

}

export const handleInc = (id, data)=>{
    return{
        type: 'INC',
        payload: (id, data)
    }
}