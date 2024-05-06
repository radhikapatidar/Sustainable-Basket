import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import { Link, useNavigate } from 'react-router-dom'
import Container from '../component/Container'
import CustomInput from '../component/CustomInput';
import * as yup from "yup";
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';
import { useEffect } from 'react';

const loginSchema = yup.object({
    email: yup.string().nullable().email("Email should be Valid").required("Email Address is Required"),
    password: yup.string().required("Password is Required")
  });
function Login() {
    const authState = useSelector(state=>state.auth)
    const navigate = useNavigate() 
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },
        validationSchema:loginSchema,
        onSubmit: (values) => {
        dispatch(loginUser(values));
           navigate('/')
            },
          });
    useEffect(()=> {
        if(authState.user !==null && authState.isError == false){
         navigate('/')
        }
    },[authState])
  return (
    <>
       <Meta title={"Login"}/>
        <BreadCrumb title='Login'/>
        <Container class1='login-wrapper py-5 home-wrapper-2'>
            <div className='row'>
                <div className='col-lg-12 col-md-6 col-sm-6'>
                    <div className='auth-card '>
                        <h3 className='text-center mb-3'>Login</h3>
                        <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                        <CustomInput type='email' name='email' placeholder='Email'
                        onChange={ formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")} 
                        values={formik.values.email} />
                        <div className='errors'>
                            {formik.touched.email && formik.errors.email}
                        </div>
                        <CustomInput type='Password' name='password' placeholder='Password'
                        onChange={ formik.handleChange("password")}
                        onBlur={ formik.handleBlur("password")} 
                        values={formik.values.password} />
                        <div className='errors'>
                            {formik.touched.password && formik.errors.password}
                        </div>
        
                            <div>
                                <Link to='/forgot-password'>Forgot Password?</Link>
                                <div className='mt-3 d-flex justify-content-center gap-15 align-items-center'>
                                    <button className='button signup border-0' type='submit'>Login</button>
                                    <Link to='/signup' type='button' className='button signup'>SignUp</Link>
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

export default Login
