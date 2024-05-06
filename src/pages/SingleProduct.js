import React, { useState,useEffect } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import ProductCard from '../component/ProductCard'
import ReactStars from "react-rating-stars-component";
import ReactImageZoom from 'react-image-zoom';
import {  useLocation, useNavigate } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import Container from '../component/Container';
import { useDispatch, useSelector } from 'react-redux';
import { addRating, addToWishlist, getAProduct, getAllProducts } from '../features/product/productSlice';
import { toast } from 'react-toastify';
import { addProductCart, getUserCart } from '../features/user/userSlice';

const SingleProduct = () => {
const location = useLocation();
const navigate= useNavigate();
const [quantity, setQuantity] = useState(1)
const [alreadyAdded, setAlreadyAdded] =useState(false)
const getProductId = location.pathname.split("/")[2];
const dispatch = useDispatch();
const productState = useSelector(state=> state?.product?.singleproduct);
const productsState = useSelector(state=> state?.product?.product);
const cartState = useSelector(state=>state?.auth?.cartProducts)


 useEffect(() => {
 dispatch(getAProduct(getProductId))
 dispatch(getUserCart())
 dispatch(getAllProducts())
 }, [getProductId]);

 useEffect(() => {
  if (Array.isArray(cartState)) {
    for (let index = 0; index < cartState.length; index++) {
      if (getProductId === cartState[index]?.productId?._id) {
        setAlreadyAdded(true);
      }
    }
  }
}, [cartState, getProductId]);
 const uploadCart = () => {
  dispatch(addProductCart({productId:productState?._id,vendorId:productState?._id,quantity,price:productState?.price})) 
}

 const props = {
  width: 500,
  height: 500,
  zoomWidth:600,
  img:productState?.images[0][0]? productState?.images[0][0] :"https://www.sustainablebasket.com/wp-content/uploads/2023/10/Certificate-3.jpg"
 }
 const [orderProduct, setorderProduct] = useState(true);

 const [popularProduct, setPopularProduct] = useState([]) 
 useEffect(() => {
  let data = [];
  for (let index = 0; index < productsState.length; index++) {
    const element = productsState[index];
    if (element.tags.includes('popular')) {
      data.push(element);
    }
  }
  setPopularProduct(data);
}, [productsState]);
 console.log(popularProduct)

 //Rating star
  const [star, setStar] = useState(null)
  const [comment, setComment] = useState(null)
  const addRatingToProduct =() => {
    if(star === null){
      toast.error("Please add star rating")
      return false
    }else if(comment === null) {
      toast.error("Please Write Review About The Product..")
      return false
    }else{
      dispatch(addRating({star:star, comment:comment,prodId:getProductId}))
      setTimeout(() => {
        dispatch(getAProduct(getProductId))
      },100)
    }
    return false
  }
  const addToWish = (id) =>{
    dispatch(addToWishlist(id))
    toast.success("Added to Wishlist Succesfully ")
  }

  const handleAttributeClick = (attributeValue) => {
    toast.success('Attribute clicked:',attributeValue)
    console.log('Attribute clicked:', attributeValue);
  };

  const attributeNames = productState?.variableProductDetails[0]?.attribute[0]
  ? Object.keys(productState.variableProductDetails[0].attribute[0].attribute)
  : [];

  

  return (
    <>
<Meta title={productState?.title}/>
  <BreadCrumb title= {productState?.title}/>
    <Container class1='main-product-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-6'>
          <div className='main-product-image' >
            <div>
              <ReactImageZoom {...props}/>
            </div>
          </div>
        <div className='other-product-images d-flex flex-wrap gap-15'>
        <div>
          <img src={productState?.images[0][0]} className='img-fluid' alt=''/>
        </div>
        <div>
          <img src={productState?.images[0][1]}  className='img-fluid' alt=''/>
        </div>
        <div>
          <img src={productState?.images[0][2]}  className='img-fluid' alt=''/>
        </div>
        <div>
           <img src={productState?.images[0][3]}  className='img-fluid' alt=''/>
        </div>
         </div> 
         </div>
        <div className='col-6'>
          <div className='main-product-details'>
          <div className='border-bottom'>
           <h3 className='title'>
             {productState?.title}
           </h3>
          </div>
          <div className='border-bottom py-3'>
           {(productState?.simpleProductDetails && productState?.simpleProductDetails[0]?.price) ? (
              productState?.variableProductDetails && productState?.variableProductDetails[0]?.attribute[0]?.price ? (
               <p className='price'>
               Rs {productState?.simpleProductDetails[0]?.price} / Rs {productState?.variableProductDetails[0]?.attribute[0]?.price}
              </p>
              ) : (
              <p className='price'> Rs {productState?.simpleProductDetails[0]?.price}</p>
                )
              ) : (
              productState?.variableProductDetails && productState?.variableProductDetails[0]?.attribute[0]?.price ? (
                <p className='price'>Rs {productState?.variableProductDetails[0]?.attribute[0]?.price}</p>
                  ) : (
                  <p className='price'>Price not available</p>
                  )
                 )}
              </div>
      
        <div className='border-bottom py-3'>
         <div className='d-flex gap-10 align-items-center my-2'>
          <h3 className='product-heading'>SKU :</h3>
            <p className='product-data'>
              { productState?.simpleProductDetails ? productState.simpleProductDetails[0]?.sku  : (
                productState?.variableProductDetails ? productState.variableProductDetails[0]?.attribute[0]?.sku: 'N/A'  )}
            </p>
            <p className='product-data'>
              {productState?.variableProductDetails ? productState.variableProductDetails[0]?.attribute[0]?.sku: (
              productState?.simpleProductDetails ? productState.simpleProductDetails[0]?.sku  : 'N/A'  )}
            </p>
            </div>
            <div className='d-flex gap-10 align-items-center my-2'>
              <h3 className='product-heading'>Type :</h3>
              <p className='product-data'> Permanent</p>
            </div>
            <div className='d-flex gap-10 align-items-center my-2'>
               <h3 className='product-heading'>Brand :</h3>
               <p className='product-data'>   {productState?.brand} </p>
            </div>
            {/* <div className='d-flex gap-10 align-items-center my-2'>
                <h3 className='product-heading'>Tags :</h3>
                 <p className='product-data'>   {productState?.tags} </p>
              </div> */}
            <div className='d-flex gap-10 align-items-center my-2'>
              <h3 className='product-heading'>Organic :</h3>
              <p className='product-data'>Yes</p>
            </div>
            <div className='d-flex gap-10 align-items-center my-2'>
              <h3 className='product-heading'>Availability :</h3>
              <p className='product-data'>In Stock</p>
                </div>
                       
            {attributeNames.map((attributeName) => (
              <div key={attributeName} className='d-flex gap-10 flex-column mt-2 mb-3'>
                <h3 className='product-heading'>{attributeName.charAt(0).toUpperCase() + attributeName.slice(1)} :</h3>
                  <div className={attributeName === 'color' ? 'color-circle-container' : 'd-flex flex-wrap gap-15'}>
                    {productState?.variableProductDetails ? ( productState.variableProductDetails[0]?.attribute.map((variation, index) => (
                      <React.Fragment key={variation.sku}>
                        {attributeName === 'color' ? (
                          <button className='color-circle' style={{ backgroundColor: variation.attribute.color }} title={variation.attribute.color}
                           onClick={() => handleAttributeClick(variation.attribute[attributeName])}></button>
                          ) : (
                          <button className='badge border border-1 bg-white text-dark border-secondary size-badge' onClick={() => handleAttributeClick(variation.attribute[attributeName])}>
                            {variation.attribute[attributeName]}
                          </button>
                          )}
                        </React.Fragment>
                      ))
                    ) : (
                      'N/A'
                    )}
                  </div>
                </div>
              ))}
                       
          <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3'>
           {
            alreadyAdded === false && <>
            <h3 className='product-heading'>Quantity:</h3>
            <div className=''>
            <input id="productQty" name="productQty" type='number' min={1} max={5} className='form-control' style={{width: "70px"}}
               onChange={(e)=>setQuantity(e.target.value)} value={quantity}/>
            </div></>
            }
            <div className={alreadyAdded? "ms-0":"ms-5" + 'd-flex align-items-center gap-30 ms-5'}>
            <button className='btn border-0'  type='button' onClick={()=>{alreadyAdded? navigate('/cart'):uploadCart()}} >
            {alreadyAdded?"Go To Cart": "Add To Cart"}
            </button>
            </div>
            </div>
            <div className='d-flex align-items-center gap-15'>
            <div>
             <a onClick={(e)=>{addToWish(productState?._id)}}><FaRegHeart  className='fs-5 me-2'/> Add to Wishlist</a>
            </div>
            </div>
            </div>
           </div> 
          </div>
         </div>
           
  </Container>
    
  <Container class1='description-wrapper py-5 home-wrapper-2'>
    <div className='row'>
      <div className='col-12'>
        <h4>Description</h4>
          <div className='bg-white p-3'>
            <p dangerouslySetInnerHTML={{ __html: productState?.description }}></p>
          </div>
      </div>
    </div>
  </Container>

<Container class1='reviews-wrapper py-5 home-wrapper-2'>
  <div className='row'>
    <div className='col-12'>
      <h4>Reviews</h4>
        <div className='review-inner-wrapper'>
          <div className='review-head d-flex justify-content-between align-items-end'>
          <div>
            <h4 className='mb-2'>Customer Reviews</h4>
            <div className='d-flex align-items-center gap-10'>
            <ReactStars count={5} size={24} value='4' edit={false} activeColor="#ffd700" />
            <p className='mb-0'>Based on 2 Reviews</p>
            </div>
            </div>
           {
           orderProduct && (
             <div>
             <a className='text-dark text-decoration-underline' href=''>Write a Review</a> 
             </div>
           )
           }
          </div>
         <div className='review-form py-4'>
          <h4>Write a Review</h4>
           <div>
            <ReactStars count={5} size={24} value={4} edit={true} activeColor="#ffd700" onChange={(e)=>{setStar(e); }}/>
           </div>
           <div>
          <textarea name='' id='' className='w-100 form-control' cols='30' rows='4' placeholder='Comments'
            onChange={(e)=>{setComment(e.target.value)}}></textarea>
          </div>
          <div className='d-flex justify-content-end mt-3'>
            <button onClick={addRatingToProduct} type='button' className='button border-0'>Submit Review</button>
          </div>
          </div>
          <div className='reviews mt-4'>
            {
            productState && productState?.ratings?.map((item,index) => {
            return(
             <div key={index} className='review '>
              <div className='d-flex gap-10 align-items-center'>
              <ReactStars count={5} size={24} value={item?.star} edit={false} activeColor="#ffd700" 
                //   onChange={(e)=>{setComment(e.target.value); }}
              />
              </div>
              <p className='mt-3'>{item?.comment}</p>
              </div>
              )
            })
          } 
        </div>
      </div>
   </div>
</div>
</Container>

  <Container class1='popular-wrapper py-5 home-wrapper-2'>
    <div className='row'>
      <div className='col-12'>
        <h3 className='section-heading'>Our Popular Products</h3>
      </div>
    </div>
    <div className='row'>
      <ProductCard data={popularProduct} />
    </div>
    </Container>
 </>
  )
}

export default SingleProduct;