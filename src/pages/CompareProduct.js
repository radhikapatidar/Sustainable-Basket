import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import Color from '../component/Color';
import Container from '../component/Container';

const CompareProduct = () => {
  return (
    <>
      <Meta title={"Compare product"}/>
     <BreadCrumb title='Compare product'/> 
     <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                    <div className='compare-product-card position-relative'>
                        <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='product-card-image'>
                            <img src='/images/watch.jpg' alt=''/>
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                            Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, 64GB)
                            </h5>
                            <h6 className='price mb-3 mt-3'>5000</h6>
                            <div>
                                <div className='product-detail '>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail '>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail '>
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-detail '>
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className='product-detail '>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' col-xl-3 col-lg-6 col-md-6 col-sm-12'>
                    <div className='compare-product-card position-relative'>
                        <img src='/images/cross.svg' alt='cross' className='position-absolute cross img-fluid'/>
                        <div className='product-card-image'>
                            <img src='/images/watch.jpg' alt=''/>
                        </div>
                        <div className='compare-product-details'>
                            <h5 className='title'>
                            Apple 2022 iPad Air M1 Chip (10.9-inch/27.69 cm, 64GB)
                            </h5>
                            <h6 className='price mb-3 mt-3'>5000</h6>
                            <div>
                                <div className='product-detail '>
                                    <h5>Brand:</h5>
                                    <p>Havels</p>
                                </div>
                                <div className='product-detail '>
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className='product-detail '>
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className='product-detail '>
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className='product-detail '>
                                    <h5>Size:</h5>
                                    <div className='d-flex gap-10'>
                                        <p>S</p>
                                        <p>M</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    
    </>
  )
}

export default CompareProduct
