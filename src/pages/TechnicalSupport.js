import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';

const TechnicalSupport = () => {
  return (
    <>
        <Meta title={"Technical Support"}/>
        <BreadCrumb title='Technical Support'/>
        <Container class1=''>
            <div className='row'>
                <div className='col-6 my-5'>
                    <h1>Technical Support</h1>
                    <p className='payment-para my-4'>Our technical support team is dedicated to ensuring the smooth operation of our platform’s website. We understand that in the fast-paced world of online shopping, any downtime or technical issues can result in lost sales and frustrated customers. Our team of skilled professionals is available 24/7 to address any technical concerns, from resolving website glitches to troubleshooting payment processing issues. We strive to maintain optimal website performance, quick response times, and robust security measures to protect customer data. Your satisfaction is our priority, and we are committed to providing top-notch technical support to keep your online business running seamlessly. Just drop your query at customercare@sustainablebasket.com</p>
                </div>
                <div className='col-6 p-5'>
                    <img src={process.env.PUBLIC_URL + '/images/Technical-Support.jpg'} className='img-fluid my-5 mt-5'/>
                </div>
            </div>
        </Container>
    </>
  )
}

export default TechnicalSupport
