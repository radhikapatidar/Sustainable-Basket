import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';
import { PiStorefront } from "react-icons/pi";
import { Link } from 'react-router-dom';

const Vendor = () => {
  return (
    <>
       <Meta title={"Become A Vendor"}/>
        <BreadCrumb title='Become A Vendor'/>
       <Container class1='my-3'>
        <div className='row'>
        <h1 className='text-center mb-4 mt-2 my-5'>Become A Vndor</h1>
        <div className='col-7'>
            <div className='row'>
                <div className='col-6 my-5'>
                    {/* <img src='https://www.sustainablebasket.com/wp-content/uploads/2022/03/vendor-pic1.png' className='img-fluid rounded-3 h-100'/> */}
                    <img src={process.env.PUBLIC_URL + '/images/vendor-pic1.png'} className='img-fluid rounded-3 h-100'/>
                </div>
                <div className='col-6'>
                <img src={process.env.PUBLIC_URL + '/images/vendor-pic2.png'} className='img-fluid rounded-3 mb-3 my-4 h-50'/>
                <img src={process.env.PUBLIC_URL + '/images/vendor-pic3.png'} className='img-fluid rounded-3  '/>
                </div>
            </div>
        </div>
        <div className='col-5 my-5'>
        <PiStorefront style={{ width: '60px', height: '60px' }} className='v-icon' />
         <p className='v-head my-4 fs-4'>CREATE A STORE</p>
         <h1 className='my-4'>Join Our Family Of Suppliers</h1>
         <p className='my-4'>At Sustainable Basket, we work to create a unique market place for certified goods and to brand them as environmentally friendly goods. One benefit of joining the Sustainable Basket vendor network is that we will help you set your certified items apart from competing non-certified goods on the market.</p>
        <p className='mt-2'>We also give you information on market trends for certification standards, and assist you in locating your desired audience.</p>
        <Link to='/become-a-certified-vendor' type='button' className='button'>Star Now</Link>
        </div>
      </div>
</Container>

<Container class1='v-banner'>
    <div className='row'>
        <div className='col-12'>
           <h5 className='v-para text-center my-4'>HOW IT WORK</h5>
           <h1 className="d-flex justify-content-center">Getting Started For Store</h1>
        </div>
      </div>
      <div className='row my-5'>
        <div className='col-2 '>
            <h2 className='v-round'>1</h2>
            <h5 className='my-4 '>Create Account</h5>
            <p className=''>All You Need is Certified Brand & Products</p>
        </div>
        <div className='col-2 '>
            <h2 className='v-round'>2</h2>
            <h5 className='my-4 '>Eligibility Review</h5>
            <p className=''>Review Your Documentation</p>
        </div>
        <div className='col-3 '>
            <h2 className='v-round'>3</h2>
            <h5 className='my-4 '>Production Site Visit</h5>
            <p className=''>List the products you want to sell in your supplier panel</p>
        </div>
        <div className='col-3'>
            <h2 className='v-round'>4</h2>
            <h5 className='my-4 '>Lowest Cost Shipping</h5>
            <p className=''>Products are shipped to customers at lowest costs</p>
        </div>
        <div className='col-2 '>
            <h2 className='v-round'>5</h2>
            <h5 className='my-4 '>Start The Market</h5>
            <p className=''>Sell Your Product Online</p>
        </div>
      </div>
</Container>
  
   <Container class1='v-featured'>
    <div className='row'>
        <div className='col-12'>
        <h5 className='v-para text-center my-4'>FEATURED STORIES</h5>
        <h1 className="d-flex justify-content-center">Seller Success Stories</h1>
        </div>
        <div className='col-4 v-border border my-5 '>
         <h5 className='d-flex justify-content-center my-5'>“Excellent Work”</h5>
         <p className='d-flex justify-content-center my-5'>Emily, a sustainable fashion designer,found success on the marketplace. Her ethical clothing line resonated with customers valuing fair trade and organic materials. Emily's brand gained recognition, leading to collaborations and features in sustainability-focused media, inspiring consumers towards eco-friendly fashion choices.</p>
        <h5 className='d-flex justify-content-center my-5'>The Sustainable Fashion Designer'</h5>
        </div>
        <div className='col-4 v-border border my-5   '>
        <h5 className='d-flex justify-content-center my-5'>“Fast Quality”</h5>
         <p className='d-flex justify-content-center my-5'>Sarah, an eco-friendly artisan, struggled to reach a wider audience until she joined the sustainable basket marketplace. Her handmade products gained visibility among customers seeking ethical alternatives. Sarah's business flourished, enabling her to hire more artisans and expand her eco-friendly product line.</p>
        <h5 className='d-flex justify-content-center my-5'>The Artisan Crafter's</h5> 
        </div>
        <div className='col-4 v-border border my-5'>
        <h5 className='d-flex justify-content-center my-5'>“Highly Recommended”</h5>
         <p className='d-flex justify-content-center my-5'>John, an organic farmer, joined the sustainable basket marketplace and saw remarkable success. Through the platform, he connected with eco-conscious customers who appreciated his commitment to organic farming. John's sales soared, allowing him to invest in sustainable farming techniques that improved his farm's health and biodiversity.</p>
        <h5 className='d-flex justify-content-center my-5'>Organic Brand</h5>
        </div>
    </div>
    
   </Container>

   <Container class1='faq'>
    <div className='row'>
    <div className='col-12'>
        <h5 className='v-para text-center my-4'>FAQS</h5>
        <h1 className="d-flex justify-content-center">Popular Question</h1>
    </div>
    <div className='col-6'>
    <div className="accordion my-5" id="accordionExample">
  <div className="accordion-item ">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      When Does My Order Get Collected ?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>We’re always working to collect your order as quickly as we can. Most orders will be collected within 2-4 business days, though there may be some delays around sales and peak periods.</p>
      </div>
    </div>
  </div>
  </div>
  </div>
  <div className='col-6'>
  <div className="accordion-item my-5">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      What Are The Terms and Conditions To Become A Vendor ?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       <p>To become a vendor, review our Terms and Conditions thoroughly. Fulfill eligibility criteria and comply with guidelines. Success awaits you! </p>
      </div>
    </div>
  </div>
  </div>
  <div className='col-6 pb-5'>
   <div className= "accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      What Are The Charges That Are Charged By Sustainable Basket E-Mart ?
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        <p>What Are The Charges That Are Charged By Sustainable Basket E-Mart ?There are few charges that, Sustainable Basket E-Mart charge.Calculate here</p>
       </div>
    </div>
  </div> 
  </div>
</div>
   </Container>

        
    </>
  )
}

export default Vendor
