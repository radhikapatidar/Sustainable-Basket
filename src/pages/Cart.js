import React, { useEffect, useState } from 'react';
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';
import Container from '../component/Container';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCartProduct, getUserCart, updateCartProduct } from '../features/user/userSlice';

const Cart = () => {
   const dispatch = useDispatch();
   const [productUpdateDetail, setProductUpdateDetail] = useState(null)
   const [totalAmount, setTotalAmount] = useState(0)
   const userCartState = useSelector(state=>state?.auth?.cartProducts)
   useEffect(()=> {
    dispatch(getUserCart());
   },[])
   
   //Update Quantity
   useEffect(() => {
   if(productUpdateDetail !== null) {
    dispatch(updateCartProduct({cartItemId:productUpdateDetail?.cartItemId,quantity:productUpdateDetail?.quantity}))
    setTimeout(() => {
      dispatch(getUserCart())
    },200)
   }
   },[productUpdateDetail])
   
   // Delete Cart Product
   const deleteACartProduct =(id)=> {
    dispatch(deleteCartProduct(id))
    setTimeout(() => {
      dispatch(getUserCart())
    },200)
   }

   // Subtotal Price Calculate 
   useEffect(() => {
    let subtotal = 0;
    for (let index = 0; index < userCartState?.length; index++) {
      const item = userCartState[index];
      if (item.productId?.simpleProductDetails && item.productId?.simpleProductDetails[0]?.price) {
        subtotal += item.productId?.simpleProductDetails[0]?.price * item.quantity;
      } else if (item.productId?.variableProductDetails && item.productId?.variableProductDetails[0]?.attribute[0]?.price) {
        subtotal += item.productId?.variableProductDetails[0]?.attribute[0]?.price * item.quantity;
      }
    }
    setTotalAmount(subtotal);
  }, [userCartState]);

  return (
    <>
      <Meta title={'Shopping Cart'} />
      <BreadCrumb title='Shopping Cart' />
      <Container class1='cart-wrapper home-wrapper-2 py-5'>
      <div className='row'>
        <div className='col-xl-12 col-lg-12 col-md-12 col-sm-12'>
         <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
           <h4 className='cart-col-1'>Product</h4>
           <h4 className='cart-col-2'>Price</h4>
           <h4 className='cart-col-3'>Quantity</h4>
           <h4 className='cart-col-4'>Total</h4>
          </div>
          {
           userCartState && userCartState?.map((item,index) =>{
           return(
            <div key={index}  className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center'>
            <div className='cart-col-1 gap-15 d-flex align-items-center'>
            <div className='w-25'>
            {item?.productId?.images && item.productId?.images.length > 0 ? (
             <img src={item?.productId?.images[0][0]} className='img-fluid' alt='product' />
              ) : (
              <img src='default-image-url' className='img-fluid' alt='product' />
              )}</div>       
             <div className='w-75'>
               <p>{item?.productId ? item?.productId.title : 'Product Title Not Available'} </p>
            </div>
            </div>
             <div className='cart-col-2'>
              {(item.productId?.simpleProductDetails && item?.productId?.simpleProductDetails[0]?.price) &&
               (item?.productId?.variableProductDetails && item.productId?.variableProductDetails[0]?.attribute[0]?.price) ? (
                 <h5 className='price'>
                  RS {item.productId?.simpleProductDetails[0]?.price} / RS {item.productId?.variableProductDetails[0]?.attribute[0]?.price}
                </h5>
               ) : item?.productId?.simpleProductDetails && item?.productId?.simpleProductDetails[0]?.price ? (
                 <h5 className='price'> Rs {item?.productId?.simpleProductDetails[0]?.price}</h5>
              ) : item?.productId?.variableProductDetails && item?.productId?.variableProductDetails[0]?.attribute[0]?.price ? (
                 <h5 className='price'>Rs {item.productId?.variableProductDetails[0]?.attribute[0]?.price}</h5>
               ) : (
                <h5 className='price'>Price not available</h5>
               )}
              </div>
              <div className='cart-col-3 d-flex align-items-center gap-15'>
                 <div>
              <input className='form-control' type='number' name={"quantity"+item?._id} min={1} max={5} id={"cart"+item?._id}
               value={item?.quantity} onChange={(e)=>{setProductUpdateDetail({cartItemId:item?._id,quantity:e.target.value})}} />
              </div>
               <div>
                <MdDelete onClick={()=>{deleteACartProduct(item?._id)}} className='text-danger' />
              </div>
              </div>
              <div className='cart-col-4'>
               {(item.productId?.simpleProductDetails && item?.productId?.simpleProductDetails[0]?.price) &&
               (item.productId?.variableProductDetails && item?.productId?.variableProductDetails[0]?.attribute[0]?.price) ? (
               <h5 className='price'>
                  Rs {item.productId?.simpleProductDetails[0]?.price * item.quantity} / Rs {item?.productId?.variableProductDetails[0]?.attribute[0]?.price * item.quantity}
               </h5>
               ) : item.productId?.simpleProductDetails && item.productId?.simpleProductDetails[0]?.price ? (
                <h5 className='price'> Rs {item.productId?.simpleProductDetails[0]?.price * item.quantity}</h5>
                 ) : item.productId?.variableProductDetails && item.productId?.variableProductDetails[0]?.attribute[0]?.price ? (
               <h5 className='price'>Rs {item.productId?.variableProductDetails[0]?.attribute[0]?.price * item.quantity}</h5>
               ) : (
               <h5 className='price'>Price not available</h5>
                )}
               </div>
             </div>
             )
           })
         }
     </div>
     <div className='col-12 py-2 mt-4'>
      <div className='d-flex justify-content-between align-items-baseline'>
       <Link to='/product' className='button'>
          Continue To Shopping
        </Link>
         {totalAmount !== null && totalAmount !== 0 && (
           <div className='d-flex flex-column align-items-end'>
            <h4>SubTotal: Rs {totalAmount} </h4>
            <p>Taxes and shipping calculated at checkout</p>
           <Link to='/checkout' className='button'>
              Checkout
           </Link>
           </div>
          )}
         </div>
        </div>
       </div>
      </Container>
    </>
  );
};

export default Cart;

