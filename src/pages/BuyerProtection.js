import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';

const BuyerProtection = () => {
  return (
    <>
    <Meta title={"Buyer Protection"}/>
     <BreadCrumb title='Buyer Protection'/>
      <Container class1=''>
        <div className='row'>
          <div className='col-6 my-5'>
           <h1>Buyer Protection</h1>
            <p className='payment-para my-4'>At our platform’s website, we take buyer protection seriously. We understand that online shopping can be a daunting experience, which is why we’ve implemented a comprehensive buyer protection policy. When you shop with us, you can rest assured that your purchases are safeguarded. Our policy includes secure payment options, encrypted transactions, and a robust return and refund process. We also ensure that your personal and financial information is kept confidential. If you encounter any issues with your orders, our dedicated customer support team is ready to assist you. Your satisfaction is our priority, and we’re committed to providing a worry-free shopping experience for every customer. Shop with confidence, knowing that we’ve got your back with our buyer protection measures.</p>
           </div>
          <div className='col-6 mt-5'>
           <img src={process.env.PUBLIC_URL + '/images/Buyer-Protection.jpg'} className='img-fluid my-5 mt-5'/>
         </div>
        </div>
      </Container>
    </>
  )
}

export default BuyerProtection
