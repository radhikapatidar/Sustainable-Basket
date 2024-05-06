import React from 'react';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Layout from './component/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStore from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import WishList from './pages/WishList';
import Login from './pages/Login';
import ForgatePassword from './pages/ForgatePassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';
import SingleBlog from './pages/SingleBlog';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import TermCondition from './pages/TermCondition';
import SingleProduct from './pages/SingleProduct';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import { PrivateRoutes } from './routing/PrivateRoutes';
// import { OpenRoutes } from './routing/OpenRoutes';
import Orders from './pages/Orders';
import UserProfile from './pages/UserProfile';
import OrderSuccess from './pages/OrderSuccess';
import Vendor from './pages/Vendor';
import MakingPyment from './pages/MakingPyment';
import Delivery from './pages/Delivery';
import BuyerProtection from './pages/BuyerProtection';
import CustomerService from './pages/CustomerService';
import TransactionService from './pages/TransactionService';
import TechnicalSupport from './pages/TechnicalSupport';
import Affiliate from './pages/Affiliate';
import Faqs from './pages/Faqs';
import RegisterVendor from './pages/RegisterVendor';
import Payment from './pages/Payment';



function App() {
  return (
    //   <BrowserRouter basename='/shop-demo/frontend'>
  <BrowserRouter>
   <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='login' element={<Login/>} />
        <Route path='about' element={<About/>} />
        <Route path='contact' element={<Contact/>} />
        {/* <Route path='product' element={<OurStore/>} /> */}
        <Route path='/:slug' element={<OurStore/>} />
        <Route path='/product/:slug' element={<SingleProduct/>} />
        <Route path='blogs' element={<Blog/>} />
        <Route path='blog/:id' element={<SingleBlog/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/my-orders' element={<Orders/>} />
        <Route path='order-success' element={<OrderSuccess/>} />
        <Route path='/my-profile' element={<UserProfile/>} />
        <Route path='checkout' element={<Checkout/>} />
        <Route path='compare-product' element={<CompareProduct/>} />
        <Route path='wishlist' element={<WishList/>} />
        <Route path='forgot-password' element={<ForgatePassword/>} />
         <Route path='reset-password/:token' element={<ResetPassword/>} />
        <Route path='privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='refund-policy' element={<RefundPolicy/>} />
        <Route path='shipping-policy' element={<ShippingPolicy/>} />
       <Route path='term-condition' element={<TermCondition/>} />
       <Route path='become-a-vendor' element={<Vendor/>} />
       <Route path='making-payments' element={<MakingPyment/>} />
       <Route path='delivery' element={<Delivery/>} />
       <Route path='buyer-protection' element={<BuyerProtection/>}/>
       <Route path='customer-service' element={<CustomerService/>}/>
       <Route path='transaction-service' element={<TransactionService/>}/>
       <Route path='technical-support' element={<TechnicalSupport/>}/>
       <Route path='affiliate' element={<Affiliate/>}/>
       <Route path='customer-faq' element={<Faqs/>}/>
       <Route path='become-a-certified-vendor' element={<RegisterVendor/>}/>
       <Route path = 'payment' element={<Payment/>}/>
       </Route>
     </Routes>
   </BrowserRouter>
 );
}

export default App;
