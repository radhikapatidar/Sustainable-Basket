import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';

const CustomerService = () => {
  return (
    <>
      <Meta title={"Delivery Options"}/>
        <BreadCrumb title='Delivery Options'/>
        <Container class1=''>
            <div className='row'>
                <div className='col-6 my-5'>
                    <h1>Customer Service</h1>
                    <p className='payment-para my-4'>At our platform’s website, we are dedicated to providing you with exceptional customer service. Your satisfaction is our top priority. Our team of friendly and knowledgeable customer service representatives is here to assist you with any inquiries or issues you may encounter. Whether you need help with product selection, tracking an order, or resolving any concerns, we are just a click away. We strive to ensure a seamless and enjoyable shopping experience, and we appreciate your trust in us. Feel free to reach out to us at customercare@sustainablebasket.com any time, and we’ll do our best to exceed your expectations. Thank you for choosing us for your online shopping needs</p>
                </div>
                <div className='col-6 p-4'>
                    <img src={process.env.PUBLIC_URL + '/images/Customer-Service.jpg'} className='img-fluid my-5 mt-5'/>
                </div>
            </div>
        </Container>
    </>
  )
}

export default CustomerService
