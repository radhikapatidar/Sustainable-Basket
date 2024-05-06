import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../features/product/productSlice';
import { toast } from 'react-toastify';

const ProductCard =(props) => {
    const { grid, data } = props;
    const dispatch = useDispatch();
  //  console.log(data);
    let location = useLocation();
  //  console.log(location);
    const addToWish = (id) =>{
      dispatch(addToWishlist(id))
      toast.success("Added to wishlist successfully");
    }
    const [showFullTitle, setShowFullTitle] = useState(false);
    const toggleTitle = () => {
      setShowFullTitle(!showFullTitle);
    };
    if (!data || !Array.isArray(data)) {
      // If data is not defined or not an array, you can return some default content or handle it accordingly
      return <p>No data available</p>
      }
  
  return (
   <>
         {
          data.map((item, index)=> {
            return(
              <Link to={`/product/${item?.slug}`} key={index} className={`text-decoration-none ${location.pathname == "/our-store" ? `gr-${grid}` : "col-3"}`}>
              <div className='product-card position-relative mt-2'>
              <div className='wishlist-icon position-absolute'>
              <button className='border-0 bg-transprent' onClick={(e)=>{addToWish(item?._id)}}>
                  <img src='/images/wish.svg' alt='wishlist'/>
               </button>
             </div>
             <div className='product-image'>
             <img src={item?.images[0][0]} className='img-fluid mx-auto' alt='product-image' />
             {/* <img src={item?.images[0][1]} className='img-fluid mx-auto' alt='product-image' /> */}
                </div>
                <div className='product-details'>
                    <h6 className='brand mt-4'>{item?.brand}</h6>
                    <h5 className='product-title' onClick={toggleTitle}>
                    {showFullTitle ? item?.title : `${item?.title.slice(0, 50)}...`}
                    </h5>
                    {/* <h5 className='price'> {item?.simpleProductDetails && item?.simpleProductDetails[0]?.price ? (
  item?.variableProductDetails && item?.variableProductDetails[0]?.attribute[0]?.price ? (
    <h5 className='price'>
      Rs {parseFloat(item?.variableProductDetails[0]?.attribute[0]?.price).toFixed(2)} / Rs {parseFloat(item?.simpleProductDetails[0]?.price).toFixed(2)}
    </h5>
  ) : (
    <h5 className='price'>Rs {parseFloat(item?.simpleProductDetails[0]?.price).toFixed(2)}</h5>
  )
) : (
  item?.variableProductDetails && item?.variableProductDetails[0]?.attribute[0]?.price ? (
    <h5 className='price'>Rs {parseFloat(item?.variableProductDetails[0]?.attribute[0]?.price).toFixed(2)}</h5>
  ) : (
    <h5 className='price'>Price not available</h5>
  )
)}
</h5> */}
                <h5 className='price mt-3'> {(item?.simpleProductDetails && item?.simpleProductDetails[0]?.price) ? (
                    item?.variableProductDetails && item?.variableProductDetails[0]?.attribute[0]?.price ? (
                    <h5 className='price'>
                    Rs {item?.simpleProductDetails[0]?.price} / Rs {item?.variableProductDetails[0]?.attribute[0]?.price}
                    </h5>
                    ) : (
                  <h5 className='price'> Rs {item?.simpleProductDetails[0]?.price}</h5>
                    )
                  ) : (
                    item?.variableProductDetails && item?.variableProductDetails[0]?.attribute[0]?.price ? (
                    <h5 className='price'>Rs {item?.variableProductDetails[0]?.attribute[0]?.price}</h5>
                      ) : (
                      <h5 className='price'>Price not available</h5>
                      )
                    )}</h5>
                        <ReactStars count={5} size={24} value={item?.totalrating.toString()} edit={false} activeColor="#ffd700" />
                    <p className={`description ${grid === 12 ? "d-block": "d-none"}`}
                    dangerouslySetInnerHTML={{__html: item?.description}}
                    ></p>
                    </div>
              </div>
            </Link>
            
            )
          })
         }
   </>
  );
};

export default ProductCard;
