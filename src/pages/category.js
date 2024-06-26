


import React, { useEffect, useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
//import ReactStars from "react-rating-stars-component";
import ProductCard from '../component/ProductCard';
import Container from '../component/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/product/productSlice';


const OurStore = () => {
  
  const [grid, setGrid]=useState(4);
  const productState = useSelector((state) => state?.product?.product);
  //console.log(productState);
 const [brands, setBrands] = useState([])
 const [categories, setCategories] = useState([])
 console.log(categories);
 const [tags, setTags] = useState([])

 // filter states
 const [tag, setTag] = useState(null)
 const [category, setCategory] = useState(null)
 console.log(category);
 const [brand, setBrand] = useState(null)
 const [minPrice, setMinPrice] = useState(null)
 const [maxPrice, setMaxPrice] = useState(null)
 const [sort, setSort] = useState(null)

 useEffect(() => {
  let newBrands=[];
  let category =[];
  let newtags =[];
  for (let index = 0; index < productState.length; index++) {
    const element = productState[index];
    newBrands.push(element.brand)
    category.push(element.category)
    newtags.push(element.tags)
  }
  setBrands(newBrands)
  const uniqueCategories = [...new Set(category)];
  setCategories(uniqueCategories);
  setTags(newtags)
 },[productState])

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  },[sort,tag,brand,category,maxPrice,minPrice]);
  const getProducts = () =>{
    dispatch(getAllProducts({sort,tag,brand,category,maxPrice,minPrice}));
  };


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
                {
                  categories && [...new Set(categories)].map((item,index)=> {
                    return( <li key={index} onClick={() => setCategory(item)}>{item}</li>
                    )
                  })
                }
                {/* <li><Link to='/' className="text-decoration-none text-secondary">Home</Link></li>
                <li><Link to='/our-store' className="text-decoration-none text-secondary">All</Link></li>
                <li><Link to='' className='text-decoration-none text-secondary'>Clothing</Link></li>
                <li><Link to='' className='text-decoration-none text-secondary'>Beauty&Health</Link></li> */}
              
                {/* <li><Link to='/category/beauty-health' onClick={()=>{setSlugData('beauty-health',2);}} className='text-decoration-none text-secondary'>Beauty & Health</Link></li>
                <li><Link to='/category/demo-cat' onClick={()=>{setSlugData('demo-cat',3);}} className='text-decoration-none text-secondary'>Demo Cat</Link></li> */}
             </ul>
            </div>
          </div>
          <div className='filter-card mb-3'>
            <h3 className='filter-title'>Filter By</h3>
            <div>
              {/* <h5 className='sub-title'>Availablity</h5> */}
               {/* <div>
               <div className='form-check'>
                <input type='checkbox' className='form-check-input' value='' id=''/>
                <label className='form-check-label' htmlFor=''>
                  In Stock (1)
                </label>
              </div> 
              <div className='form-check'>
                <input className='form-check-input' type='checkbox' value='' id=''/>
                <label className='form-check-label' htmlFor=''>
                  Out of Stock
                </label>
              </div>
            </div>  */}
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
            {/* <h5 className='sub-title'>Colors</h5>
            <div>
           <Color/>
            </div> */}
            {/* <h5 className='sub-title'>Size</h5>
            <div>
            <div className='form-check'>
                <input type='checkbox' className='form-check-input' value='' id='color-1'/>
                <label className='form-check-label' htmlFor=''>
                 S [2]
                </label>
              </div>
              <div className='form-check'>
                <input type='checkbox' className='form-check-input' value='' id='color-2'/>
                <label className='form-check-label' htmlFor=''>
                 M [2]
                </label>
              </div>
            </div> */}
            </div>
            <div className=' mt-4 mb-3'>
            <h3 className='sub-title'>Products Tags</h3>
            <div>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
              {
              tags && [...new Set(tags)].map((item,index)=> {
               return (
                <span onClick={()=> setTag(item)} key={index} className='text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3'>
                 {item}
                </span>
                  )
                })
             }
                {/* <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Radico
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                  Livbio
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                imerbela
                </span>
                <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
              3000 BC Therapeutics
                </span> */}
              </div>
            </div>
          </div>
          <div className=' mb-3'>
            <h3 className='sub-title'>Products Brands</h3>
            <div>
              <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
              {
              brands && [...new Set(brands)].map((item,index)=> {
               return (
                <span onClick={()=> setBrand(item)} key={index} className='text-capitalize badge bg-light text-secondary rounded-3 py-2 px-3'>
                 {item}
                </span>
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
                <option value="titlt">Alphabetically, A-Z</option>
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
