import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'

const RefundPolicy = () => {
  return (
    <>
    <Meta title={"Refund policy"}/>
    <BreadCrumb title='Refund policy'/>
    <Container className='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
            <div className='policy'></div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default RefundPolicy
