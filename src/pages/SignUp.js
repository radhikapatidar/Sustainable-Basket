import React, { useEffect } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'
import { useFormik } from 'formik';
import * as yup from "yup";
import CustomInput from '../component/CustomInput';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/userSlice';
import { Link, useNavigate } from 'react-router-dom'


const signUpSchema = yup.object({
    name: yup.string().required("Name is Required"),
    email: yup.string().email("Email should be Valid").required("Email Address is Required"),
    address: yup.string().required("Address is Required"),
    mobile: yup.string().required('Mobile number is Required'),
    password: yup.string().required("Password is Required")
  });

function SignUp() {
  const authState = useSelector(state=>state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
          email: '',
          address :'',
          mobile: '',
          password: '',
        },
        validationSchema:signUpSchema,
        onSubmit: (values) => {
         dispatch(registerUser(values));
         navigate('/login')
        },
      });
      useEffect(()=> {
        if(authState.createdUser !== null && authState.isError == false){
          //navigate('/login')
        }
      },[authState])
  return (
    <>
      <Meta title={"SignUp"}/>
        <BreadCrumb title='SignUp'/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
      <div className='row'>
        <div className='col-12'>
         <div className='auth-card'>
          <h3 className='text-center mb-3 fs-3 '>SignUp</h3>
          <form  action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
           
            <CustomInput type='text' name='name' placeholder='Name'
            value={formik.values.name}
            onChange={formik.handleChange("name")} 
            onBlur={formik.handleBlur("name")}/>
          
            <div className='errors'>
                {formik.touched.name && formik.errors.name }
            </div>
          
             <CustomInput type='email' name='email' placeholder='Email' 
              value={formik.values.email}
              onChange={formik.handleChange("email")} 
              onBlur={formik.handleBlur("email")}/>
          
           <div className='errors'>
                {formik.touched.email && formik.errors.email }
            </div>

            <CustomInput type='text' name='address' placeholder='Address' 
              value={formik.values.address}
              onChange={formik.handleChange("address")} 
              onBlur={formik.handleBlur("address")}/>
          
           <div className='errors'>
                {formik.touched.address && formik.errors.address }
            </div>
           
           
            <CustomInput type='tel' name='mobile' placeholder='Mobile Number'
            value={formik.values.mobile}
            onChange={formik.handleChange("mobile")} 
            onBlur={formik.handleBlur("mobile")}/>
           
            <div className='errors'>
                {formik.touched.mobile && formik.errors.mobile }
            </div>
         
            <CustomInput type='Password' name='password' placeholder='Password'
            value={formik.values.password}
            onChange={formik.handleChange("password")} 
            onBlur={formik.handleBlur("password")}/>
            
            <div className='errors'>
                {formik.touched.password && formik.errors.password }
            </div>
             <div>
            <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
              <button className='button signup border-0' type='submit'>Sign Up</button>
              <Link to='/login' className='button signup'>Login</Link>
            </div>                  
            </div>
            </form>
            </div>
             </div>
            </div>
        </Container>
    </>
  )
}

export default SignUp
