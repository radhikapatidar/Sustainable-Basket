import React, { useEffect ,useState} from 'react'
import { Link, useParams} from 'react-router-dom'
import { MdKeyboardBackspace } from "react-icons/md";
import Container from '../component/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from "yup"
import { createAnOrder } from '../features/user/userSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { base_url } from '../utils/axiosConfig';

const shippingSchema = yup.object({
    firstName: yup.string().required("FirstName is Required"),
    lastName: yup.string().required("LastName is Required"),
    address: yup.string().required("Address Details are Required"),
    state: yup.string().required("State is Required"),
    city: yup.string().required("City is Required"),
    country: yup.string().required("Country is Required"),
    pincode: yup.number().required("Pincode is Required"),
});

const Checkout = () => {

const dispatch = useDispatch()
const cartState = useSelector(state=> state?.auth?.cartProducts)
console.log(cartState);
const [totalAmount, setTotalAmount] = useState(0)
const [shippingCost, setShippingCost] = useState(0);
const [shippingInfo, setShippingInfo] = useState(null)
const [cartProductState, setCartProductState] = useState([])

useEffect(() => {
  let sum= 0;
  for (let index = 0; index < cartState?.length; index++) {
  sum = sum+(Number(cartState[index].quantity) * cartState[index].price)
  setTotalAmount(sum);
   }
  },[cartState]);
  
// Payment gatway Api integrate
  const initiatePayment = async (totalPrice, orderId) => {
    try {
        const payUrl = `${base_url}pay?totalPrice=${totalPrice}&orderId=${orderId}`;
        window.location.href = payUrl;
    } catch (error) {
        console.error("Error initiating payment:", error);
    }
};
const formik = useFormik({
  initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      state: "",
      city: "",
      country: "",
      pincode: "",
      other: "",
  },
  validationSchema: shippingSchema, // Using validation schema here
  onSubmit: async (values,{ setSubmitting }) => {
      // Set shipping info
    setShippingInfo(values);
    try {
       // Create an order
      const createdOrder = await dispatch(
      createAnOrder({
        totalPrice: totalAmount,
        totalPriceAfterDiscount: totalAmount,
        orderItems: cartProductState,
        shippingInfo: values,
      })
    );
      console.log("order--", createdOrder);
      if (createdOrder) {
        setTimeout(async () => {
          const orderId = createdOrder.payload.order._id.toString(); // Extract orderId from _id field within payload.order
          await initiatePayment(totalAmount, orderId); // Pass orderId to initiatePayment
          toast.success('Order placed successfully!');
          }, 3000); 
         }
      } catch (error) {
          console.error('Error submitting order:', error);
          toast.error('Error placing order. Please try again later.');
      }finally{
        setSubmitting(false)
      }
  },
});

    useEffect(() => {
    let items = [];
    for (let index = 0; index < cartState?.length; index++) {
    const productId = cartState[index]?.productId;
    const vendorId = cartState[index]?.productId?.vendorId;
    console.log("fetch vendor",vendorId);
    if (productId) {
    items.push({
      product: productId._id || null, 
      vendorId :productId?.vendorId|| null,
      quantity: cartState[index].quantity,
      price: cartState[index].price
      });
    }
  }
   setCartProductState(items);
  }, [cartState]);

useEffect(() => {
  let subtotal = 0;
  for (let index = 0; index < cartState?.length; index++) {
      const item = cartState[index];
      if (item.productId.simpleProductDetails && item.productId.simpleProductDetails[0]?.price) {
          subtotal += item.productId.simpleProductDetails[0]?.price * item.quantity;
      } else if (item.productId.variableProductDetails && item.productId.variableProductDetails[0]?.attribute[0]?.price) {
          subtotal += item.productId.variableProductDetails[0]?.attribute[0]?.price * item.quantity;
      }
  }
  setTotalAmount(subtotal);
}, [cartState])

    const cartItems = cartState || [];
    // Update shipping cost based on totalAmount
    useEffect(() => {
      if (totalAmount >= 299) {
        setShippingCost(0); 
      } else {
        setShippingCost(80); 
      }
    }, [totalAmount])

return (
    <>
    <Container class1='checkout-wrapper py-5 home-wrapper-2'>
      <div className='row'>
       <div className='col-lg-7 col-sm-12 col-md-12'>
        <div className='checkout-left-data'>
         <h3 className='website-name'>Sustainable Basket</h3>
          <nav style={{"--bs-breadcrumb-divider": '>'}} aria-label="breadcrumb">
           <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link className='text-dark total-price' to="/cart">Cart</Link>
            </li>
            <li className="breadcrumb-item active total-price" aria-current="page">Information</li>
            <li className="breadcrumb-item active total-price"> Shipping</li>
            <li className="breadcrumb-item active" aria-current="page">Payment</li>
            </ol>
            </nav>
            {/* <h4 className='title total'>Contact Information</h4>
              <p className='user-details total'>Sejal Bhawsar (sejalbhawsar@gmail.com)</p> */}
            <h4 className='mb-3'>Shipping Address</h4>
            <form onSubmit={formik.handleSubmit} action='' className='d-flex gap-15 flex-wrap justify-content-between'>
              <div className='w-100'>
               <select name='country' value={formik.values.country} onChange={formik.handleChange("country")}  onBlur={formik.handleBlur("country")} className='form-control form-select' id=''>
                <option value='' selected disabled>Select Country</option>
                <option value='India' selected>India</option>
                </select>
                <div className='errors ms-2 my-1'>
                {
                 formik.touched.country && formik.errors.country
                }
                </div>
                </div>
                <div className='flex-grow-1'>
                <input type='text' placeholder='First Name' className='form-control' name="firstName" value={formik.values.firstName} 
                  onChange={formik.handleChange("firstName")}  onBlur={formik.handleBlur("firstName")} />
                <div className='errors ms-2 my-1'>
                 {
                   formik.touched.firstName && formik.errors.firstName
                 }
                </div>    
                </div>
                <div className='flex-grow-1'>
                  <input type='text' placeholder='Last Name' className='form-control' name="lastName" value={formik.values.lastName} 
                    onChange={formik.handleChange("lastName")} onBlur={formik.handleBlur("lastName")}/>
                <div className='errors ms-2 my-1'>
                  {
                  formik.touched.lastName && formik.errors.lastName
                  }
                </div> 
                </div>
                <div className='w-100'>
                  <input type='text' placeholder='Address' className='form-control' name="address" value={formik.values.address} 
                    onChange={formik.handleChange("address")}   onBlur={formik.handleBlur("address")}/>
                <div className='errors ms-2 my-1'>
                 {
                  formik.touched.address && formik.errors.address
                 }
                </div> 
                </div>
                <div className='w-100'>
                  <input type='text' placeholder='Apartment, Suite, etc' className='form-control' name="other"  value={formik.values.other} 
                    onChange={formik.handleChange("other")} onBlur={formik.handleBlur("other")}/>
                 </div> 
                 <div className='flex-grow-1'>
                  <input type='text' placeholder='City' className='form-control' name="city" value={formik.values.city} 
                    onChange={formik.handleChange("city")} onBlur={formik.handleBlur("city")} />
                 <div className='errors ms-2 my-1'>
                  {
                   formik.touched.city && formik.errors.city
                  }
                  </div>
                  </div>
                  <div className='flex-grow-1'>
                  <select name="state" value={formik.values.state} onChange={formik.handleChange("state")}  
                    onBlur={formik.handleBlur("state")} className='form-control form-select' id=''>
                   <option value='' selected disabled>Select State</option>
                   <option value='Madhya Pradesh' selected >Madhya Pradesh</option>
                  </select>
                  </div>
                  <div className='flex-grow-1'>
                  <input type='text' placeholder='ZipCode' className='form-control' name="pincode" value={formik.values.pincode} 
                    onChange={formik.handleChange("pincode")} onBlur={formik.handleBlur("pincode")}/>
                  <div className='errors ms-2 my-1'>
                    {
                     formik.touched.pincode && formik.errors.pincode
                    }
                  </div>
                  </div>
                  <div className='w-100'>
                    <div className='d-flex justify-content-between align-items-center'>
                      <Link to='/cart' className='text-dark'><MdKeyboardBackspace className='me-2' />
                        Return to Cart</Link>
                      <Link to='/our-store' className='button'>Continue to Shopping</Link>
                      <button className='button' type='submit'>
                          Place Order
                      </button>
                     </div>
                  </div>
                </form>
              </div> 
             </div>
           <div className='col-lg-5 col-sm-3 col-md-8'>
             <div className='border-bottom py-4'>
              {
              cartState && cartState?.map((item,index)=>{
              return(
                <div key={index} className='d-flex gap-10 mb-2 align-items-center'>
                <div className='w-75 d-flex gap-10'>
                <div className='w-25 position-relative'>
                <span style={{top:"-20px",right:"2px"}} className='badge bg-secondary text-white rounded-circle p-2 position-absolute'>
                   {item?.quantity}
                </span>
                <img width={90} height={90}  src={item?.productId?.images[0][0] || 'https://www.sustainablebasket.com/wp-content/uploads/2023/10/Certificate-3.jpg'}  alt='product'/>
                </div>
                <div>
                 <h5 className='total-price'>{item?.productId?.title}</h5> 
                </div>
                </div>
                <div className='flex-grow-1'>
                  {(item.productId.simpleProductDetails && item.productId.simpleProductDetails[0]?.price) &&
                    (item.productId.variableProductDetails && item.productId.variableProductDetails[0]?.attribute[0]?.price) ? (
                      <h5 className='price'>
                         Rs {item.productId.simpleProductDetails[0]?.price * item.quantity} / Rs {item.productId.variableProductDetails[0]?.attribute[0]?.price * item.quantity}
                      </h5>
                   ) : item.productId.simpleProductDetails && item.productId.simpleProductDetails[0]?.price ? (
                       <h5 className='price'> Rs {item.productId.simpleProductDetails[0]?.price * item.quantity}</h5>
                   ) : item.productId.variableProductDetails && item.productId.variableProductDetails[0]?.attribute[0]?.price ? (
                       <h5 className='price'>Rs {item.productId.variableProductDetails[0]?.attribute[0]?.price * item.quantity}</h5>
                   ) : (
                      <h5 className='price'>Price not available</h5>
                    )}
                  </div>
                </div>
                ) 
             })
          }
          </div>
              <div className='border-bottom py-4'>
                <div className='d-flex justify-content-between align-items-center '>
                 <p className='total'>Subtotal</p> 
                 <p className='total-price'>Rs  {totalAmount?totalAmount:"0"}</p>
                </div>
                <div className='d-flex justify-content-between align-items-center '>
                  <p className='mb-0 total'>Shipping</p> 
                  <p className='mb-0 total-price'>Rs {shippingCost}</p>
                </div>
                </div>
                <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                  <h4 className='total'>Total</h4> 
                  <h5 className='total-price'>Rs {totalAmount + shippingCost}</h5>
              </div>
                </div>
            </div>
        </Container>
    </>
  )
}

export default Checkout
