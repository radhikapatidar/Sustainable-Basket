import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'
import CustomInput from '../component/CustomInput'
import { Link } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { forgotPasswordToken } from '../features/user/userSlice'


const emailSchema = yup.object({
  email: yup.string().nullable().email("Email should be Valid").required("Email Address is Required"),
});
function ForgatePassword() {

  //const navigate = useNavigate() 
  const dispatch = useDispatch();
  const formik = useFormik({
      initialValues: {
        email: '',
        },
      validationSchema:emailSchema,
      onSubmit: (values) => {
      dispatch(forgotPasswordToken(values));
        
          }
        });
  return (
    <>
      <Meta title={"Forgot Password"}/>
    <BreadCrumb title='Forgot Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
           <div className='container-xxl'>
           <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Your Password</h3>
                        <p className='text-center mt-2 mb-3'>We will send you an email to reset your password</p>
                        <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
                        <CustomInput type='email' name='email' placeholder='Email'
                         onChange={ formik.handleChange("email")}
                         onBlur={formik.handleBlur("email")} 
                         values={formik.values.email}/>  
                          <div className='errors text-center'>
                            {formik.touched.email && formik.errors.email}
                        </div>
                            <div>                           
                                <div className='mt-3 d-flex justify-content-center flex-column gap-15 align-items-center'>
                                    <button className='button border-0' type='submit'>Submit</button>
                                    <Link to='/login'>Cancel</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           </div>
        </Container>
    </>
  )
}

export default ForgatePassword
