import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';

const TransactionService = () => {
  return (
  <>
    <Meta title={"Transaction Service"}/>
    <BreadCrumb title='Transaction Service'/>
    <Container class1=''>
      <div className='row'>
        <div className='col-6 my-5'>
          <h1>Transaction Service</h1>
          <p className='payment-para my-4'>Our platform’s transaction service is designed to provide a seamless and secure shopping experience for our customers. With cutting-edge encryption technology and robust payment gateways, we ensure that your financial information is protected at all times. Whether you’re making a purchase, processing a refund, or setting up recurring payments, our system is both user-friendly and efficient. We offer a variety of payment options, from credit cards to digital wallets, to accommodate your preferences. Our commitment to quick and hassle-free transactions means that you can focus on finding the perfect products without any worries about the checkout process. Shop with confidence, knowing that our transaction service is here to make your online shopping experience a breeze</p>
        </div>
      <div className='col-6 p-5 mt-5'>
      <img src={process.env.PUBLIC_URL + '/images/Transaction-Service.jpg'} className='img-fluid my-5 mt-5'/>
      </div>
      </div>
    </Container>
  </>
  )
}

export default TransactionService
