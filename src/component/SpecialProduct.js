import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const SpecialProduct = (props) => {
  const { title, brand,totalrating, price,sold, quantity,slug,images} = props;
  
  return (
    <div className='col-lg-6 col-md-6 col-sm-12 mt-3'>
      <div className='special-product-card mt-2'>
        <div className='d-flex justify-content-between'>
            <div>
                <img src={images} className='img-fluid w-50' alt='watch'/>
            </div>
            <div className='special-product-content'>
                <h6 className='brand text-danger'>{brand}</h6>
                <h6 className='title'>
                   {title}
                </h6>
                <ReactStars count={5} size={24} value={totalrating} edit={false} activeColor="#ffd700" />
            <p className='price'>
                <span className='red-p'>{price}</span> &nbsp; <strike>500</strike>
            </p>
            <div className='discount-till d-flex align-items-center gap-10'>
              <p className='mb-0'>
                <b>5</b>days
              </p>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>1</span>:
                <span className='badge rounded-circle p-2 bg-danger'>1</span>
              </div>
             </div>
             {/* <div className='prod-count my-3'>
                <p>Product: {quantity}</p>
                <div className="progress">
                <div className="progress-bar" role="progressbar" aria-label="Basic example"
                 style={{'width':quantity / quantity + sold * 100 + "%"}}
                 aria-valuenow={(quantity / quantity + sold * 100)}
                  aria-valuemin={quantity} aria-valuemax={sold + quantity}></div>
              </div>
              </div> */}
              <Link to={`/product/${slug}`} className='button mt-4'>View</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProduct
