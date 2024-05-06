import React from 'react'
import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub,BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {

return (
  <>
<footer className='py-4'>
  <div className='container-xxl'>
    <div className='row align-items-center'>
       <div className='col-lg-5 col-md-6 '>
         <div className='footer-top-data d-flex gap-30 align-items-center'>
            <img src='/images/newsletter.png' alt='newletter'></img>
            <h2 className='mb-0 text-white fs-8'>EXCLUSIVE DEALS/OFFERS!</h2>
         </div>
         </div>
        <div className='col-lg-7 col-md-6 col-sm-12'>
        <div className="input-group">
          <input type="text" className="form-control py-1" placeholder="Your Email Address" aria-label="Your Email Address" aria-describedby="basic-addon2"/>
          <span className="input-group-text p-2" id="basic-addon2">Subscribe</span>
        </div>
      </div>
     </div>
    </div>
  </footer>
     
  <footer className='py-4'>
    <div className='container-xxl'>
      <div className='row'>
        <div className='col-lg-4 col-md-3 col-sm-6'>
          <h4 className='text-white mb-4'>Contact Us</h4>
          <div>
            <address className='text-white fs-0'>Hno: 277 Nutan Nagar Khargone, <br/>Madhya Pradesh <br/>
               Pincode :451001
            </address>
            <a href='tel:+918754896588' className='mt-3 d-block mb-1 text-white'>
                +918754896588
            </a>
            <a href='mailto:customercare@sustainablebasket.com' className='mt-2 d-block mb-0 text-white'>
              customercare@sustainablebasket.com
            </a>
            <div className='social_icon d-flex align-items-center gap-30 mt-4'>
              <a className='text-white' >
              <BsGithub className=' fs-4'/>
              </a>
              <a className='text-white' >
               <BsLinkedin className=' fs-4'/>
              </a>
              <a className='text-white' >
              <BsInstagram className=' fs-4'/>
              </a>
              <a className='text-white' >
                <BsYoutube className=' fs-4'/>
              </a>
            </div>
           </div>
        </div>
        <div className='col-lg-3 col-md-3 col-sm-6'>
          <h4 className='text-white mb-4'>Customer Service</h4>
           <div className='footer-links d-flex flex-column'>
              <Link to='customer-service' className='text-white py-2 mb-1'>Customer Service</Link>
              <Link to='/transaction-service' className='text-white py-2 mb-1'>Transaction Service</Link>
              <Link to='/technical-support' className='text-white py-2 mb-1'>Technical Support</Link>
              <Link to='/term-condition' className='text-white py-2 mb-1'>Term & Conditions</Link>
              <Link to='/privacy-policy' className='text-white py-2 mb-1'>Privacy Policy</Link>
            </div>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6'>
            <h4 className='text-white mb-4'>HOW TO BUY</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='making-payments' className='text-white py-2 mb-1'>Making Payments</Link>
              <Link to='delivery' className='text-white py-2 mb-1'>Delivery option</Link>
              <Link to='buyer-protection' className='text-white py-2 mb-1'>Buyer Protection</Link>
              <Link to='customer-faq' className='text-white py-2 mb-1'>Customer FAQs</Link>
            </div>
          </div>
          <div className='col-lg-2 col-md-3 col-sm-6'>
            <h4 className='text-white mb-4'>INQUIRY</h4>
            <div className='footer-links d-flex flex-column'>
              <Link to='become-a-vendor' className='text-white py-2 mb-1'>Become A Vendor</Link>
              <Link to='affiliate' className='text-white py-2 mb-1'>Affiliate</Link>
              <Link to='/contact' className='text-white py-2 mb-1'>Contact</Link>
              <Link to='/blogs' className='text-white py-2 mb-1'>Blog</Link>
              {/* <Link className='text-white py-2 mb-1'>Faq</Link> */}
            </div>
          </div>
        </div>
      </div>
     </footer>
     <footer className='py-3'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <p className='text-center mb-0 text-white'>&copy; {new Date().getFullYear()}; Powerd by  Sustainable Basket E-Mart Pvt. Ltd. All rights reserved. </p>
          </div>
        </div>
      </div>
     </footer>
    </>
  )
}

export default Footer
