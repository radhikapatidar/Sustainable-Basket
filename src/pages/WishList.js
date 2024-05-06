import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'
import { useEffect } from 'react'
import {  useDispatch, useSelector } from 'react-redux'
import { getUserProductWishlist } from '../features/user/userSlice'
import { addToWishlist } from '../features/product/productSlice'

const WishList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      getWishlistFromDb();
    },[]);
    const getWishlistFromDb = () =>{
      dispatch(getUserProductWishlist());
    };
    const wishlistState = useSelector(state=>state?.auth?.wishlist?.wishlist);
    const removeWishlist = (id) => {
        dispatch(addToWishlist(id));
        setTimeout(()=> {
            dispatch(getUserProductWishlist());
        }, 300)
    }
  return (
    <>
      <Meta title={"Wishlist"}/>
      <BreadCrumb title='Wishlist'/>
      <Container class1='wishlist-wrapper home-wrapper-2 py-5'>
       <div className='row'>
         {wishlistState && wishlistState.length === 0 && (
          <div className='text-center fs-3'>No Data</div>)}
          {wishlistState && wishlistState?.map((item,index)=> {
          return(
          <div key={index} className='col-xl-3 col-lg-5 col-md-6 col-sm-10'>
          <div className='wishlist-card position-relative'>
          <img onClick={()=>{removeWishlist(item?._id)}}
           src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
          <div className='wishlist-card-image bg-white'>
          <img src= {item?.images[0][0]} className='img-fluid d-block mx-auto' alt='watch'/>
          </div>
          <div className=' py-3 px-3'>
          <h5 className='title'> {item?.title}</h5>
            {(item.simpleProductDetails && item.simpleProductDetails[0]?.price) &&
            (item.variableProductDetails && item.variableProductDetails[0]?.attribute[0]?.price) ? (
            <p className='price'>
            RS {item.simpleProductDetails[0]?.price} / RS {item.variableProductDetails[0]?.attribute[0]?.price}
            </p>
            ) : item.simpleProductDetails && item.simpleProductDetails[0]?.price ? (
            <p className='price'> Rs {item.simpleProductDetails[0]?.price}</p>
            ) : item.variableProductDetails && item.variableProductDetails[0]?.attribute[0]?.price ? (
            <p className='price'>Rs {item.variableProductDetails[0]?.attribute[0]?.price}</p>
            ) : (
            <p className='price'>Price not available</p>
             )}
            </div>
          </div>
        </div>
      )     
     })
    }
            
               
            </div>
        </Container>
    </>
  )
}

export default WishList
