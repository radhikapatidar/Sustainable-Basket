import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';

const Affiliate = () => {

  return (
    <>
  <Meta title={"Affiliate"}/>
    <BreadCrumb title='Affiliate'/>
        <Container class1=''>
          <div className='row'>
            <div className='col-6 my-5'>
              <h1>Affiliate</h1>
                <p className='payment-para my-4'>Join our affiliate program and be part of our thriving e-commerce community! As an affiliate, you’ll have the opportunity to earn generous commissions by promoting our high-quality products to your audience. We provide you with a range of marketing materials and tracking tools to make your journey seamless and rewarding. Whether you’re a seasoned affiliate marketer or just starting, our program is designed to help you succeed. With a wide selection of products, excellent conversion rates, and timely payouts, we’re committed to your success. Join us today and start monetizing your traffic while sharing in the success of our e-commerce platform. Together, we can unlock a world of opportunities and earnings. Just drop us mail at info@sustainablebasket.com</p>
            </div>
            <div className='col-6 p-5'>
              <img src={process.env.PUBLIC_URL + '/images/Affiliate.jpg'}className='img-fluid my-5 mt-5'/>
            </div>
            </div>
        </Container>
    </>
  )
}

export default Affiliate
