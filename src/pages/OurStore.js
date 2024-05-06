import React, { useEffect, useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import ProductCard from '../component/ProductCard';
import Container from '../component/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/product/productSlice';
import { Link } from 'react-router-dom';
import { base_url } from '../utils/axiosConfig';


const OurStore = () => {
  const [grid, setGrid]=useState(4);
  const productState = useSelector((state) => state?.product?.product);
  const [brands, setBrands] = useState([])
  const [tags, setTags] = useState([])
  const [categories, setCategories] = useState([]);

 // filter states
 const [tag, setTag] = useState(null)
 const [brand, setBrand] = useState(null)
 const [minPrice, setMinPrice] = useState(null)
 const [maxPrice, setMaxPrice] = useState(null)
 const [sort, setSort] = useState(null)
 const [selectedCategory, setSelectedCategory] = useState(null);

 useEffect(() => {
  fetch(`${base_url}category`)
      .then(response => response.json())
      .then(data => {
          setCategories(data); // Assuming data is an array of categories
      })
      .catch(error => {
          console.error('Error fetching categories:', error);
      });
}, []);
 useEffect(() => {
  let newBrands=[];
  let newtags =[];
 // let newCategory =[];
  for (let index = 0; index < productState.length; index++) {
    const element = productState[index];
    newBrands.push(element.brand)
    newtags.push(element.tags)
   // newCategory.push(element.categories)
  }
  setBrands(newBrands);
  setTags(newtags.flat());
 },[productState])

  const dispatch = useDispatch();
 

  const handleCategoryClick = (selectedCategory) => {
    setSelectedCategory(selectedCategory);   // Update the selected category state
    dispatch(getAllProducts({ category: selectedCategory, tag, brand, minPrice, maxPrice, sort }));    // Fetch products based on the selected category
  };

  const uniqueTags = new Set(tags.flat()); 
  const handleTagClick = (selectedTag) => {  // Handle tag click event 
  setTag(selectedTag);  // Update the tag state
  dispatch(getAllProducts({ category: selectedCategory, tag: selectedTag, brand, minPrice, maxPrice, sort })); // Fetch products based on the selected tag and the currently selected category
};

useEffect(() => {
  getProducts();
},[sort,tag,brand,selectedCategory,maxPrice,minPrice]);

const getProducts = () => {
  dispatch(getAllProducts({ category: selectedCategory, tag, brand, minPrice, maxPrice, sort }));
};

useEffect(() => {
  if (selectedCategory !== null) {
    dispatch(getAllProducts({ category: selectedCategory, tag, brand, minPrice, maxPrice, sort }));
  }
}, [selectedCategory, tag, brand, minPrice, maxPrice, sort]);

  return (
  <>
  <Meta title={"Our Store"}/>
  <BreadCrumb title='Our Store'/>
  <Container class1='store-wrapper home-wrapper-2 py-5'>
    <div className='row'>
      <div className='col-lg-3 '>
        <div className='filter-card mb-3'>
          <h3 className='filter-title'>Shop By Category</h3>
          <div>
          <ul className='ps-0'>
          {categories.map(cat => (
            <li key={cat.id}>
             
             <Link className="text-decoration-none text-secondary" onClick={() => handleCategoryClick(cat.title)}>
               {cat.title}
             </Link>
            </li>
          ))}
          </ul>
          </div>
          </div>
          <div className='filter-card mb-3'>
            <h3 className='filter-title'>Filter By</h3>
            <div>
            <h5 className='sub-title'>Price</h5>
            <div className='d-flex align-items-center gap-10'>
            <div className="form-floating">
              <input type="number" className="form-control" id="floatingInput" placeholder="From"
              onChange={(e)=>setMinPrice(e.target.value)}/>
              <label htmlFor="floatingInput">From</label>
            </div>
            <div className="form-floating">
              <input type="number" className="form-control" id="floatingInput1" placeholder="To"
               onChange={(e)=>setMaxPrice(e.target.value)}/>
              <label htmlFor="floatingInput1">To</label>
            </div>
            </div>
            </div>
            <div className='mt-4 mb-3'>
            <h3 className='sub-title'>Products Tags</h3>
            <div>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
              {Array.from(uniqueTags).map((item, index) => (
                  <button onClick={() => handleTagClick(item)} key={index} className='text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3'>
                      {item}
                  </button>
              ))}
              </div>
            </div>
          </div>
          <div className='mb-4 mt-4'>
            <h3 className='sub-title'>Products Brands</h3>
            <div>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
              {
              brands && [...new Set(brands)].map((item,index)=> {
               return (
                <button onClick={()=> setBrand(item)} key={index} className='text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3'>
                 {item}
                </button>
                  )
                })
             }
             </div>
            </div>
          </div>
          </div>
        </div>
        <div className='col-lg-9 col-md-6'>
          <div className='filter-sort-grid mb-4'>
          <div className='d-flex justify-content-between align-items-center'>
          <div className='d-flex align-items-center gap-10'>
              <p className='mb-0 d-block' style={{width:"100px"}}>Sort By:</p>
              <select name=''onChange={(e)=>setSort(e.target.value)} className='form-control form-select' id=''>
                <option value="title">Alphabetically, A-Z</option>
                 <option value="-title">Alphabetically, Z-A</option>
                <option value="price">Price, low to high</option>
                <option value="-price">Price, high to low</option>
                <option value="createdAt">Date, old to new</option>
                <option value="-createdAt">Date, new to old</option>
              </select>
            </div>
            <div className='d-flex align-items-center gap-10 col-md-3 col-sm-12'>
              {/* <p className='totalproducts mb-0'>21 Product</p> */}
              <div className='d-flex gap-10 align-items-center grid'>
              <img onClick={()=>{  setGrid(3);}} src='/images/gr4.svg' className='d-block img-fluid' alt='grid'/>
              <img onClick={()=>{  setGrid(4);}} src='/images/gr3.svg' className='d-block img-fluid' alt='grid'/>
              <img onClick={()=>{  setGrid(6);}} src='/images/gr2.svg' className='d-block img-fluid' alt='grid'/>
              <img onClick={()=>{  setGrid(12);}} src='/images/gr.svg' className='d-block img-fluid' alt='grid'/>
              </div>
            </div>
          </div>
          </div>
          <div className='products-list pb-5 '>
          <div className='d-flex gap-10 flex-wrap ' >
          {/* <ProductCard data={productState ? productState:[]} grid={grid} /> */}
          <ProductCard data={productState} grid={grid} />
          </div>
         </div> 
        </div>
      </div>
  </Container>
    
  </>
  )
}

export default OurStore
