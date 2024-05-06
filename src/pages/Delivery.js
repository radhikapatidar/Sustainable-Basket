import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';

const Delivery = () => {
  return (
    <>
        <Meta title={"Delivery Options"}/>
        <BreadCrumb title='Delivery Options'/>
        <Container class1=''>
            <div className='row'>
                <div className='col-6 my-5'>
                    <h1>Delivery Options</h1>
                    <p className='payment-para my-4'>Our platform is committed to providing you with a seamless and convenient shopping

                        experience. We offer a range of delivery options to cater to your needs.Our standard shipping

                        option ensures reliable and economical delivery, Additionally, we provide convenient tracking

                        services, so you can monitor your order’s progress in real-time. Your satisfaction is our priority,

                        and our flexible delivery options are designed to ensure your shopping experience is as

                        hassle-free as possible. Shop with us and experience the ease and reliability of our delivery

                        services.</p>
                </div>
                <div className='col-6'>
                    <img src={process.env.PUBLIC_URL + '/images/Delivery-Options.jpg'} className='img-fluid my-5 mt-5'/>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Delivery
