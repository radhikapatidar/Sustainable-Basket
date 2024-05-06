import React, { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';
import {BsSearch} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { getAProduct } from '../features/product/productSlice';
import { CgMenuGridO } from "react-icons/cg";
import { useParams } from 'react-router-dom';


const Header = () => {
  const dispatch = useDispatch();
  const cartState = useSelector(state=>state?.auth?.cartProducts)
  const [total, setTotal] = useState(null)
  const authState = useSelector(state=>state.auth)
  const productState =useSelector(state=>state?.product?.product)
  const [productOpt, setProductOpt] = useState([])
  const [paginate, setPaginate] = useState(true);
  const navigate = useNavigate()
  const {userId} = useParams();
  // useEffect(()=> {
  //   let sum = 0;
  //   for (let index = 0; index < cartState.length; index++) {
  //    sum=sum + (Number(cartState[index].quantity) * Number(cartState[index].price))
  //    setTotal(sum)
  //   }
  // },[cartState])
  useEffect(() => {
    if (Array.isArray(cartState)) {
      let sum = 0;
      for (let index = 0; index < cartState.length; index++) {
        const item = cartState[index];
        if (item?.productId?.simpleProductDetails && item?.productId?.simpleProductDetails[0]?.price) {
          sum += item?.productId?.simpleProductDetails[0]?.price * item?.quantity;
        } else if (item?.productId?.variableProductDetails && item?.productId?.variableProductDetails[0]?.attribute[0]?.price) {
          sum += item?.productId?.variableProductDetails[0]?.attribute[0]?.price * item?.quantity;
        }
      }
      setTotal(sum);
    }
  }, [cartState]);

   useEffect(()=> {
      let data =[]
      for (let index = 0; index < productState.length; index++) {
        const element = productState[index];
       data.push({id:index, prod:element?.slug,name:element?.title})
      }
      setProductOpt(data)
   },[productState])

  const handleLogout = () =>{
    localStorage.clear()
    window.location.reload()
  }
  return (
    <>
   <header className='header-top-strip py-3'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-lg-6 col-md-12 col-sm-12'>
        <p className='text-white mb-0  font-weight-bold'>Welcome to Our Sustainable Store</p>
        </div>
        {/* <div className='col-xl-5 col-lg-3 col-md-4 col-sm-12'>
        <p className='text-end text-white mb-0'><a href='#' className='text-white'>Customer Care</a></p>
        </div>
        <div className='col-xl-1 col-lg-1 col-md-3 col-sm-12'>
        <p className='text-end text-white mb-0'> <a href='#' className='text-white'>FAQ</a></p>
        </div> */}
      </div>
    </div>
   </header>
   <header className='header-upper py-3'>
    <div className='container-xxl'>
      <div className='row align-items-center'>
        <div className='col-lg-2 col-md-2 col-sm-12'>
          <h5>
            <Link to='/'>
          <img src='/images/s-basket-greeen.png' alt='Icon' className='logo' />
          </Link>
            {/* <Link to='/' className='text-black'>Sustainable Basket</Link> */}
          </h5>
          </div>
          <div className='col-lg-5 col-md-12 col-sm-12'>
          <div className="input-group">
          <Typeahead 
            id="pagination-example"
            onPaginate={() => console.log('Results paginated')}
            onChange={(selected)=> {
              navigate(`/product/${selected[0]?.prod}`)
              dispatch(getAProduct(selected[0]?.prod))
            }}
            options={productOpt}
            paginate={paginate}
            labelKey={"name"}
            minLength={2}
            placeholder="Search for Products here..."
         />        
        <span className="input-group-text p-2" id="basic-addon2"><BsSearch className='fs-6'/></span>
        </div>

          </div>
          <div className='col-xl-5 col-md-6 col-sm-12'>
            <div className='header-upper-links d-flex align-items-center justify-content-between'> 
             <div>
             <Link to='/wishlist' className='d-flex align-items-center gap-10 text-dark'>
             <img src="/images/heart.svg" alt='wishlist' style={{  width: '30px', height: '30px' }} />
              <p className='mb-0'>Favourit  <br/> wishlist
              </p>
              </Link>
             </div>
          
             <div>
              <Link to={ authState?.user===null ? '/login':'/my-profile'} className='d-flex align-items-center gap-10 text-dark'>
                <img src="/images/user-128.png" style={{  width: '40px', height: '40px' }} alt='user' />
              {
                authState?.user===null ?  <p className='mb-0'>Login <br/> My Account
                </p> : <p className='mb-0'>Welcome {authState?.user?.name}</p>
              }
              </Link>
  
           </div>
           <div>
            <Link to='/cart' className='d-flex align-items-center gap-10 text-white'>
              <img src="/images/cartt.png" style={{ width: '30px', height: '30px' }} alt='cart' />
              <div className='d-flex flex-column gap-10'>
                <span className='badge bg-white text-dark'>{cartState?.length ? cartState.length : 0}</span>
                <p className='mb-0 text-dark'>Rs {total ? total : 0}</p>
              </div>
            </Link>
          </div>
            </div>
          </div>
      </div>
    </div>
   </header>
   <div className="horizontal-line" style={{ backgroundColor: 'green', height: '2px' }}></div>
   <header className='header-bottom py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-lg-12 col-md-12 col-sm-3'>
            <div className='menu-bottom d-flex align-items-center gap-30'>
              <div>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <CgMenuGridO className='' style={{ color: 'black', fontSize: '1em' }} />
                <span className='me-5 d-inline-block text-dark font-weight-bold'> Shop Categories</span>
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li><Link to='/our-store' className="dropdown-item text-white" href="#">All</Link></li>
                  <li><Link to='/beauty-health' className="dropdown-item text-white" href="#">Beauty and Health</Link></li>
                  <li><Link to='/clothing' className="dropdown-item text-white" href="#">Clothing</Link></li>
                </ul>
              </div>
              </div>
              <div className='menu-link '>
                <div className='d-flex align-items-center gap-15 text-dark '>
                  <NavLink to="/" className='text-dark font-weight-bold'>Home</NavLink>
                  <NavLink to="/our-store" className='text-dark font-weight-bold'>Our Store</NavLink>
                  <NavLink to="/my-orders" className='text-dark font-weight-bold'>My Orders</NavLink>
        {authState.user ? (
        <button onClick={handleLogout} className='border border-0 bg-transparent text-dark font-weight-bold text-uppercase' type='button'>
          Logout
        </button>
      ) : null}
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
   </header>
   
    </>
  )
}

export default Header
