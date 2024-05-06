import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import * as yup from "yup";
import CustomInput from '../component/CustomInput'
import { toast } from 'react-toastify';
import { base_url } from '../utils/axiosConfig';


const vendorSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Email should be Valid").required("Email Address is Required"),
    mobile: yup.string().required('Mobile number is Required'),
    password: yup.string().required("Password is Required")
  });

const RegisterVendor = () => {
  const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: '',
          email:'',
          mobile: '',
          password: '',
          shopName:'',
          address:'',
        },
     validationSchema:vendorSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch(`${base_url}vendor/register`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        console.log(response);
        if (response.ok) {
          // Successful login logic
          toast.success('Vendor Register successful');
          navigate('/become-a-vendor'); 
        } else {
          // Handle login failure
          const data = await response.json();
          toast.error('Register failed. Please check your credentials.');
          console.log(data);
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('An error occurred:', error);
        toast.error('An error occurred during login. Please try again.');
      }
    },
      });
  return (
    <>
       <Meta title={"Become A Certified Vendor"}/>
    <BreadCrumb title='Become A Certified Vendor'/>
    <Container class1='login-wrapper'>
      <div className='row'>
        <div className='col-12 '>
            <h1 className='v-wrapper my-5'>Become A Certified Vendor</h1>
            <div className='v-card'>
            <form onSubmit={formik.handleSubmit} className='d-flex flex-column'>
            <div className="form-group">
                <label for="exampleInputEmail1">FullName</label>
                {/* <input type="text" className="form-control" name='firstName' placeholder="firstName"/> */}
                <CustomInput type='text' className="form-control" name='name' placeholder='fullName'
              value={formik.values.name}
              onChange={formik.handleChange("name")} 
              onBlur={formik.handleBlur("name")}/>
               <div className='errors'>
                {formik.touched.name && formik.errors.name }
            </div>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Email</label>
                {/* <input type="email" className="form-control" name='email' placeholder="Email"/> */}
                <CustomInput type='email' className="form-control" name='email' placeholder='Email' 
              value={formik.values.email}
              onChange={formik.handleChange("email")} 
              onBlur={formik.handleBlur("email")}/>
              <div className='errors'>
                {formik.touched.email && formik.errors.email }
            </div>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Phone Number</label>
                {/* <input type="number" className="form-control" name='mobile' placeholder="Phone Number"/> */}
                <CustomInput type='tel' name='mobile' placeholder='Mobile Number'
            value={formik.values.mobile}
            onChange={formik.handleChange("mobile")} 
            onBlur={formik.handleBlur("mobile")}/>
            <div className='errors'>
                {formik.touched.mobile && formik.errors.mobile }
            </div>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                {/* <input type="password" className="form-control" name='password' placeholder=""/> */}
                <CustomInput type='Password' name='password' placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange("password")} 
            onBlur={formik.handleBlur("password")}/>
             <div className='errors'>
                {formik.touched.password && formik.errors.password }
            </div>
            </div>
            <div className="form-group">
                <label for="exampleInputPassword1">Shop/Store Name</label>
                {/* <input type="text" className="form-control" name='shopName' placeholder="Shop Name"/> */}
                <CustomInput type='text' className="form-control" name='shopName' placeholder="Shop Name"
            value={formik.values.shopName}
            onChange={formik.handleChange("shopName")} 
            onBlur={formik.handleBlur("shopName")}/>
             <div className='errors'>
                {formik.touched.shopName && formik.errors.shopName }
            </div>
            </div>

            <div className="form-group">
                <label for="exampleInputPassword1">Address</label>
                {/* <input type="text" className="form-control" name='shopName' placeholder="Shop Name"/> */}
                <CustomInput type='text' className="form-control" name='address' placeholder="Address"
            value={formik.values.address}
            onChange={formik.handleChange("address")} 
            onBlur={formik.handleBlur("address")}/>
             <div className='errors'>
                {formik.touched.address && formik.errors.address }
            </div>
            </div>
           
            <div className="form-group form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                <label className="form-check-label" for="exampleCheck1">I have read and agree to the <Link to='/term-condition'>Terms & Conditions.</Link></label>
            </div> 
            <button type="submit" className="v-btn btn text-white btn-lg">Register</button>
            </form>
            </div>
        </div>
      </div>
    </Container>
    </>
  )
}

export default RegisterVendor
