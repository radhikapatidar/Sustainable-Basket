import React, { useState } from 'react';
import axios from 'axios';

function Payment() {
  const [redirectUrl, setRedirectUrl] = useState('');

  const handlePayment = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/pay');
      
      setRedirectUrl(response.data.redirectUrl);
    } catch (error) {
      console.error('Error initiating payment:', error);
    }
  };

  
  if (redirectUrl) {
    console.log(redirectUrl);
    window.location.href = redirectUrl;
    return redirectUrl; 
  }

  return (
    <div>
      <button onClick={handlePayment}>Pay with PhonePe</button>
    </div>
  );
}

export default Payment;
