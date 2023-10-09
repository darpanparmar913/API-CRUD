import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './AddCart.css'
import { useNavigate } from 'react-router';
import { deleteProduct } from '../Services/Action/Action';

function AddCart() {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);

    const handledec = (id) =>{
        setCount(handleInc(id));
    }
    const handleInc = (id) =>{
        setCount(count + 1);
    }

    let totalCost = 0;

    const handleHome = () => {
        navigate('/');
    }

    const handleBuy = () => {
        navigate('/cardView');
    }


    const alldata = useSelector(state => state.productReducer.product);

    const handleDelete = (id) => {
        dispatch(deleteProduct(id));
    }

    return (
        <>
            <div class="container">
                <table class="table align-items-center">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>title</th>
                            <th>Rating</th>
                            <th>Qty</th>
                            <th>Price</th>
                            {/* <th>Total</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        alldata.map((data) => {
                            totalCost += data.price * data.qty;
                            return (
                                <tbody class="align-items-center">
                                    <tr>
                                        <td>
                                            <img src={data.image} style={{ width: '100px' }} />
                                        </td>
                                        <td>
                                            <h5>{data.title}</h5>
                                        </td>
                                        <td>
                                            <h5>{data.rating.rate} <i class="fa-solid fa-star"></i></h5>
                                        </td>
                                        <td>
                                            <h5>
                                                <button className='btn me-2' style={{backgroundColor:"#D6DBDF"}} onClick={() => handledec(data.id)}>
                                                    <i class="fa-solid fa-minus"></i>
                                                </button>
                                                    {data.qty}
                                                <button className='btn ms-2' style={{backgroundColor:"#D6DBDF "}} onClick={() => handleInc(data.id)}>
                                                <i class="fa-solid fa-plus"></i>
                                                </button>
                                            </h5>
                                        </td>
                                        <td>
                                            <h5>${data.price}</h5>
                                        </td>
                                        <td>
                                            <button class="btn btn-success btn-lg me-2" onClick={() => handleBuy(data.id, data)}>View</button>
                                            <button class="btn btn-danger btn-lg" onClick={() => handleDelete(data.id)}><i class="fa fa-trash"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                    <tfoot className='align-items-between'>
                        <tr>
                            <td colspan="4">
                                <button class="btn btn-warning" onClick={handleHome}>
                                    <i class="fa fa-angle-left"></i> Continue Shopping</button>
                            </td>
                            <td>
                                <h5>Total Bill :-<b>${totalCost}</b></h5>
                            </td>

                        </tr>
                    </tfoot>
                </table>
            </div>

        </>
    )
}

export default AddCart