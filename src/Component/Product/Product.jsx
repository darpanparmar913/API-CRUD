import React, { useState } from 'react'
import { shopData } from './Product.js';
import './Product.css'
import { useDispatch } from 'react-redux';
import { addCart } from '../Services/Action/Action.js';


function Product() {

    const dispatch = useDispatch();

    const alldata = shopData.productDetails

    const handleCart = (id,data) =>{
 
        dispatch(addCart(id,data))

    }

    return (
        <>

            <div className="container">
                <div className="row justify-content-center">
                    {
                        alldata.map((data) => {
                            return (
                                <>
                                    <div className="card col-md-3 col-10 m-4">
                                        <img className='mx-auto img-thumbnail' src={data.image} />
                                        <div className="card-body text-center mx-auto">
                                            <div className='cvp'>
                                                <h5 className="card-title font-weight-bold">{data.title}</h5>
                                                <h6 className="card-title font-weight-bold">{data.category}</h6>
                                                <span style={{color: '#ffc107'}}>{data.rating.rate}</span>
                                                <p className="card-text" style={{color: '#dc3545'}}><b>{data.price + " " + "$"}</b></p>
                                                <button href="#" className="btn btn-dark cart px-auto border" onClick={() => handleCart(data.id,data)}>ADD TO CART</button>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>

        </>
    )
}

export default Product