import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'
//import { Link } from 'react-router-dom'
import CustomInput from '../component/CustomInput'
import { useLocation, useNavigate } from 'react-router-dom'
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { resetPassword } from '../features/user/userSlice'


const passwordSchema = yup.object({
    password: yup.string().required("Password is Required")
  });
const ResetPassword = () => {
    const location = useLocation()
    const getToken = location.pathname.split("/")[2]
    console.log(getToken);
    const navigate = useNavigate() 
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema:passwordSchema,
        onSubmit: (values) => {
        dispatch(resetPassword({token:getToken,password:values.password}));
            navigate('/login')
            }
          });
  return (
    <>
     <Meta title={"Reset Password"}/>
    <BreadCrumb title='Reset Password'/>
    <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-12'>
                    <div className='auth-card'>
                        <h3 className='text-center mb-3'>Reset Password</h3>
                        <form onSubmit={formik.handleSubmit} action='' className='d-flex flex-column gap-15'>
                        <CustomInput type='password' name='password' placeholder='password'
                         onChange={ formik.handleChange("password")}
                         onBlur={ formik.handleBlur("password")} 
                         values={formik.values.password}/>
                          <div className='errors'>
                            {formik.touched.password && formik.errors.password}
                        </div>
                         <div>
                             <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button type='submit' className='button border-0'>Ok</button>
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

export default ResetPassword
