import React from 'react'

const OrderSuccess = () => {
  return (
    <div>
       <img
        src="../images/right-icon.jpg"
        alt="icon"
        className="img-fluid mx-auto d-block mb-4"
        style={{ maxWidth: '150px' }} // Set your desired max width
      />
      <h1 className='text-center mb-4'>Thank You</h1>
      <p className='text-center mt-1 mb-3 font-weight-bold'>Congratulations! Your Order has been Accepted </p>
    </div>
  )
}

export default OrderSuccess


