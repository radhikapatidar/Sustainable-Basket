import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Container from '../component/Container';
import { Link } from 'react-router-dom';

const Faqs = () => {
  return (
    <>
       <Meta title={"Customer FAQs"}/>
        <BreadCrumb title='Customer FAQs'/>
        <Container class1=''>
            <div className='row'>
              <h1 className='my-4'>Customer FAQs</h1>
              <h3>Order Related</h3>
             <div className='col-6'>
              <h5 className='my-3'>Order Status</h5>
              <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  How can I change address or phone number in Order?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">If you wish to change the shipping address or phone number, you can do it through “My Order” section before the products are dispatched. You will see an edit icon on the order detail page.<br/>
                Please note that you cannot change the address once the order is shipped.<br/> Please click the following link to view order history – 

            </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  How do I check the current status of my order?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                  <p>You can review the status of your orders and other related tracking information by visiting the “Track Your Order” section. You can instantly see the status of a specific order and all your past orders.</p>
                  <p>Once the order is shipped, you can check it through Track Your Order </p>
                  <p>If your order has been shipped and you are still not able to know the order status through tracking link, wait for 12 hours. In some rare cases, courier partners take up-to 12 hours to activate the tracking link. Kindly check after the mentioned time frame.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  What do I do in cases of failed delivery?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">In case the delivery fails, kindly reach out us :Write an email with your concern to <Link to='customercare@sustainablebasket.com'> “ customercare@sustainablebasket.com  “</Link></div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  Why is my order not showing?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">If your most recent order is not showing after successful payment, please be assured and try checking the same after 10 minutes.If you still face the issue, then kindly contact Sustainable Basket support team  – <Link to='customercare@sustainablebasket.com'> “ customercare@sustainablebasket.com  “</Link></div>
                </div>
              </div>
            </div>
             </div>
             <div className='col-6'>
             <h5 className='my-3'>Returns and refunds</h5>
             {/* <div className="accordion accordion-flush" id="returnsAccordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="returns-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returns-collapseOne" aria-expanded="false" aria-controls="returns-collapseOne">
                  How can I change address or phone number in Order?
                  </button>
                </h2>
                <div id="returns-collapseOne" className="accordion-collapse collapse" aria-labelledby="returns-headingOne" data-bs-parent="returnsAccordionExample">
                  <div className="accordion-body">If you wish to change the shipping address or phone number, you can do it through “My Order” section before the products are dispatched. You will see an edit icon on the order detail page.<br/>
                Please note that you cannot change the address once the order is shipped.<br/> Please click the following link to view order history – 

            </div>
                </div>
              </div> */}
              {/* <div className="accordion-item">
                <h2 className="accordion-header" id="returns-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returns-collapseTwo" aria-expanded="false" aria-controls="returns-collapseTwo">
                  How do I check the current status of my order?
                  </button>
                </h2>
                <div id="returns-collapseTwo" className="accordion-collapse collapse" aria-labelledby="returns-headingTwo" data-bs-parent="returnsAccordionExample">
                  <div className="accordion-body">
                  <p>You can review the status of your orders and other related tracking information by visiting the “Track Your Order” section. You can instantly see the status of a specific order and all your past orders.</p>
                  <p>Once the order is shipped, you can check it through Track Your Order </p>
                  <p>If your order has been shipped and you are still not able to know the order status through tracking link, wait for 12 hours. In some rare cases, courier partners take up-to 12 hours to activate the tracking link. Kindly check after the mentioned time frame.</p>
                  </div>
                </div>
              </div> */}
              {/* <div className="accordion-item">
                <h2 className="accordion-header" id="returns-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returns-collapseThree" aria-expanded="false" aria-controls="returns-collapseThree">
                  What do I do in cases of failed delivery?
                  </button>
                </h2>
                <div id="returns-collapseThree" className="accordion-collapse collapse" aria-labelledby="returns-headingThree" data-bs-parent="#returnsAccordionExample">
                  <div className="accordion-body">In case the delivery fails, kindly reach out us :Write an email with your concern to <Link to='customercare@sustainablebasket.com'> “ customercare@sustainablebasket.com  “</Link></div>
                </div>
              </div>
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="returns-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#returns-collapseThree" aria-expanded="false" aria-controls="returns-collapseThree">
                  Why is my order not showing?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="returns-headingThree" data-bs-parent="#returnsAccordionExample">
                  <div className="accordion-body">If your most recent order is not showing after successful payment, please be assured and try checking the same after 10 minutes.If you still face the issue, then kindly contact Sustainable Basket support team  – <Link to='customercare@sustainablebasket.com'> “ customercare@sustainablebasket.com  “</Link></div>
                </div>
              </div> */}
            {/* </div> */}
             </div>
            </div>
        </Container>
    </>
  )
}

export default Faqs
