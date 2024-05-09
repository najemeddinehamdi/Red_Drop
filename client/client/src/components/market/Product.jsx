import React, { useState } from 'react';
import "../market/style/market.css";
import ProductData from './ProductData';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai";




function Product() {
    // Assuming ProductData is imported correctly
    // const ProductData = [...]; // Your product data array
    const [detail, setDetail] = useState([]);
    const [close, setClose] = useState(false)
    
    const detailPage = (Product) => {
        setDetail([{ ...Product }])
        setClose(true)
   
    }
    
    


    return (
        <>
            {
                close ?
                    <div className='detail_container1'>
                        <div className='detail_contant'>
                            <button className='closee' onClick={() => setClose(false)}><AiFillCloseCircle /></button>
                            {
                                detail.map((x) => {
                                    return (
                                        <>
                                            <div className='detail_infoo'>
                                                <div className='img-box'>
                                                    <img src={x.img} alt={x.title}></img>
                                                </div>
                                                <div className='product_detail'>
                                                    <h2>{x.Title}</h2>
                                                    <h3>{x.Price} Point</h3>
                                                    <p>{x.Des}</p>
                                                    <button>add</button>
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div> : null
            }

            <div className='container1'>

                {ProductData.map((curElm, index) => (
                    <div className='box' key={index}>
                        <div className='contant'>
                            <div className='img-box1'>
                                {/* Use curElm.Title instead of curEm.Title */}

                                <img  className='product1' src={curElm.img} alt={curElm.Title} />
                                
                            </div>
                            <div className='detail'>
                                <div className='info'>
                                    {/* Use curElm.Title instead of curEm.Title */}
                                    <h6 className=''>{curElm.Title}</h6>
                                    {/* Assuming curElm.price is a string or number */}
                                    <h6>{curElm.Price}</h6>
                                </div>
                                <button onClick={() => detailPage(curElm)} className='button'>View</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Product;
