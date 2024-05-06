import React, { useEffect } from 'react'
import BreadCrumb from '../component/BreadCrumb';
import Meta from '../component/Meta';
import BlogCard from '../component/BlogCard';
import Container from '../component/Container';
import { useDispatch,useSelector } from 'react-redux';
import { getAllBlogs } from '../features/blogs/blogSlice';
import  moment from 'moment';

const Blog = () => {

  const blogState = useSelector((state) => state?.blog?.blog);
  //console.log(productState);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs();
  },[]);

  const getBlogs = () =>{
    dispatch(getAllBlogs());
  };
  
  return (
  <>
  <Meta title={"Blogs"}/>
    <BreadCrumb title='Blogs'/> 
     <Container class1='blog-wrapper home-wrapper-2 py-5'>
      <div className='row'>
        {/* <div className='col-lg-3 col-md-6 col-sm-12'>
          <div className='filter-card mb-3'>
            <h3 className='filter-title'>Shop By Category</h3>
          <div>
          <ul className='ps-0'>
            <li>Home</li>
            <li>Clothing</li>
            <li>Beauty</li>
            <li>Health</li>
         </ul>
        </div>
      </div>
    </div> */}
    <div className='col-lg-12 col-md-6 col-sm-12'>
     <div className='row'>
      {blogState && blogState?.map((item, index)=>{
       return(
        <div key={index} className='col-lg-6 col-md-6 col-sm-12 mt-4'>
        <BlogCard id={item?._id} title={item?.title} description={item?.description}
        image={item?.images[0][0]}
        date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}/>
        </div>
        )
      })}
     </div>
    </div>
  </div>
 </Container>
    </>
  )
}

export default Blog
