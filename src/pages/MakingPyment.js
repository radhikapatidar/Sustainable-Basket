import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';


const MakingPyment = () => {
  return (
    <>
       <Meta title={"Making Payments"}/>
        <BreadCrumb title='Making Payments'/>
        <Container class1=''>
            <div className='row'>
                <div className='col-6 my-5'>
                    <h1>Making Payments</h1>
                    <p className='payment-para my-4'>In our platform, we’ve prioritized convenience and security when it comes to making payments.

                       We understand that trust and ease of use are paramount in online shopping. That’s why we offer

                       a variety of payment options to cater to your preferences. Whether you prefer the familiarity of

                      major credit cards, any UPI or the convenience of Paytm, you’ll find the payment method that

                    suits you best. Rest assured, your transactions are safeguarded by cutting-edge SSL encryption

                    technology to protect your sensitive information. Your trust is important to us, and we’re

                    committed to providing a seamless and secure payment experience, ensuring your peace of

                    mind while shopping with us.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src={process.env.PUBLIC_URL + '/images/Making-Payments.jpg'} className='img-fluid my-5 mt-5'/>
                </div>
            </div>
        </Container>
    </>
  )
}

export default MakingPyment
