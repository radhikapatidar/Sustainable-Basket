import React from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../component/BlogCard';
import SpecialProduct from '../component/SpecialProduct';
import Container from '../component/Container';
import {services} from "../utils/Data";
import moment from 'moment';
import { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import { getAllProducts } from '../features/product/productSlice';
import ReactStars from "react-rating-stars-component";
import { addToWishlist } from '../features/product/productSlice';
import { combineSlices } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';


//import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state=>state?.product?.product));
  console.log(productState);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
    getallProducts();
  },[]);

  const getBlogs = () =>{
    dispatch(getAllBlogs());
  };
  const getallProducts = () =>{
    dispatch(getAllProducts());
  };
  const addToWish = (id) =>{
    dispatch(addToWishlist(id))
    toast.success("Added to Wishlist Succesfully ")
  };

  const [showFullTitle, setShowFullTitle] = useState(false);
  const toggleTitle = () => {
    setShowFullTitle(!showFullTitle);
  };
  return (
    <>
    <Container class1='home-wrapper-1 py-5'>
     <div className='row'>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='main-banner position-relative mt-5'>
              <img src='/images/livbio.webp' className='img-fluid rounded-3 h-30 '  alt='main banner'></img>
              <div className='main-banner-content position-absolute  top-50 bottom-0'>
                <Link to='/our-store' className='button ' >BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-lg-6 col-md-6 col-sm-12'>
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
            <div className='small-banner position-relative'>
              <img src='images/flivbio.webp' className='img-fluid rounded-3 '  alt='main banner'></img>
              <div className='small-banner-content position-absolute top-50 bottom-0'>
              <Link to='/our-store' className='button ' >BUY NOW</Link>
              </div>
            </div>
            
            <div className='small-banner position-relative '>
              <img src='images/imerbela.jpg' className='img-fluid rounded-3'  alt='main banner'></img>
              <div className='small-banner-content position-absolute  top-50 bottom-0'>
              <Link to='/our-store' className='button ' >BUY NOW</Link>
              </div>
            </div>
            </div>
          </div>
        </div>
    </Container>

    <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='services d-flex align-items-center justify-content-between'>
            {services?.map((i, j)=>{
                return(
                  <div className='d-flex align-items-center gap-15' key={j}>
                  <img src={i.image} alt='service'/>
                  <div>
                  <h6>{i.title}</h6>
                  <p className='mb-0'>{i.tagline}</p>
                  </div>
                </div>
                )
              })
            }
            </div>
          </div>
        </div>
    </Container>
    
    {/* <Container class1='home-wrapper-2 py-5'>
    <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-12'>
            <div className='categories d-flex justify-contetnt-between flex-wrap align-items-center'>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>HeadPhones</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 items</p>
                </div>
                <img src='images/tv.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>HeadPhones</h6>
                  <p>10 items</p>
                </div>
                <img src='images/headphone.jpg' alt='cemera'/>
              </div>
              <div className='d-flex gap-30 align-items-center'>
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src='images/camera.jpg' alt='cemera'/>
              </div>
            </div>
          </div>
        </div>
    </Container> */}
   
   <Container class1='featured-wrapper py-5 home-wrapper-2'>
  <div className='row'>
    <div className='col-12'>
      <h3 className='section-heading'>Featured Collection</h3>
    </div>
    {productState && productState.map((item, index) => {
      if (item.tags?.includes("featured")) {
        return (
          <Link to={`/product/${item.slug}`} key={index} className="col-3 text-decoration-none">
            <div className='product-card position-relative mt-3'>
              <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transprent' onClick={(e) => { addToWish(item._id) }}>
                  <img src='/images/wish.svg' alt='wishlist' />
                </button>
              </div>
              <div className='product-image'>
                <img src={item.images[0][0]} className='img-fluid' alt='product-image' />
                {/* <img src={item.images[0][1]} className='img-fluid' alt='product-image' /> */}
              </div>
              <div className='product-details'>
                <h6 className='brand'>{item.brand}</h6>
                <h5 className='product-title' onClick={toggleTitle}>
                  {showFullTitle ? item.title : `${item.title.slice(0, 65)}...`}
                </h5>
                <ReactStars count={5} size={24} value={item.totalrating.toString()} edit={false} activeColor="#ffd700" />
                {/* <p className={`description ${grid === 12 ? "d-block": "d-none"}`}
                  dangerouslySetInnerHTML={{__html: item.description}}
                ></p> */}
                <p className='price'>{item.price}</p>
              </div>
              <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                  {/* Additional action buttons can be placed here */}
                </div>
              </div>
            </div>
          </Link>
        );
      }
    })}
  </div>
</Container>

<Container class1='special-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <h3 className='section-heading'>Special Products</h3>
          </div>
        </div>
        <div className='row'>
          {productState && productState.map((item, index) => {
            if (item.tags?.includes("special")) {
              let price, quantity;
              if (item.simpleProductDetails && item.simpleProductDetails.length > 0) {
                const simpleProduct = item.simpleProductDetails[0]; // 
                price = simpleProduct.price;
                quantity = simpleProduct.quantity;
              } else if (item.variableProductDetails && item.variableProductDetails.attribute[0].length > 0) {
              }
          return (
                <SpecialProduct
                  key={index}
                  slug={item.slug}
                  id={item._id}
                  images={item.images[0][0]}
                  brand={item.brand}
                  title={item.title}
                  totalrating={item.totalrating.toString()}
                  price={price}
                  sold={item.sold}
                  quantity={quantity}
                />
              );
            }
          })}
        </div>
      </Container>
     
     <Container class1='popular-wrapper py-5 home-wrapper-2'>
    <div className='row'>
    <div className='col-12'>
      <h3 className='section-heading'>Our Popular Products</h3>
    </div>
  </div>
  <div className='row'>
    {productState && productState.map((item, index) => {
      if (item.tags?.includes("popular")) {
        return (
          <Link to={`/product/${item.slug}`} key={index} className="col-3 text-decoration-none">
            <div className='product-card position-relative mt-3'>
              <div className='wishlist-icon position-absolute'>
                <button className='border-0 bg-transprent' onClick={(e) => { addToWish(item._id) }}>
                  <img src='/images/wish.svg' alt='wishlist' />
                </button>
              </div>
              <div className='product-image'>
                <img src={item.images[0][0]} className='img-fluid' alt='product-image' />
                {/* <img src={item.images[0][1]} className='img-fluid' alt='product-image' /> */}
              </div>
              <div className='product-details'>
                <h6 className='brand'>{item.brand}</h6>
                <h5 className='product-title' onClick={toggleTitle}>
                  {showFullTitle ? item.title : `${item.title.slice(0, 65)}...`}
                </h5>
                <ReactStars count={5} size={24} value={item.totalrating.toString()} edit={false} activeColor="#ffd700" />
                {/* <p className={`description ${grid === 12 ? "d-block": "d-none"}`}
                  dangerouslySetInnerHTML={{__html: item.description}}
                ></p> */}
                <p className='price'>{item.price}</p>
              </div>
              <div className='action-bar position-absolute'>
                {/* Additional action buttons can be placed here */}
              </div>
            </div>
          </Link>
        );
      }
    })}
  </div>
</Container>

    <Container class1='marque-wrapper py-5'>
        <div className='row'>
          <div className='col-12'>
            <div className='marquee-inner-wrapper card-wrapper'>
            <Marquee className='d-flex'>
            <div className='mx-4 w-25'>
              <img src='/images/r.webp' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img className='w-25' src='/images/imerbela-brand.png' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img src='/images/Liv-Bio.png' alt='brand'/>
            </div>
             <div className='mx-4 w-25'>
              <img src='/images/r.webp' alt='brand'/>
            </div>
            <div className='mx-4 w-25'>
              <img className='w-25' src='/images/imerbela-brand.png' alt='brand'/>
            </div>
            </Marquee>
            </div>
          </div>
        </div>
     </Container> 
  
     <Container class1='blog-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='section-heading'>Our Latest Blog</div>
          </div>
      </div>
      <div className='row'>
      {blogState && blogState?.map((item, index)=>{
             if(index<3){
              return(
                <div key={index} className='col-lg-3 col-md-6 col-sm-12'>
                <BlogCard id={item?._id} title={item?.title} description={item?.description}
                image={item?.images[0][0]}
                 date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}/>
               </div>
              )
             }
            })}
      </div>
     </Container>
     
    </>
  )
}

export default Home
