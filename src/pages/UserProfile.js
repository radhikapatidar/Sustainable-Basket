import React, { useState } from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Container from '../component/Container'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../features/user/userSlice'
import { FiEdit } from "react-icons/fi";

const profileSchema = yup.object({
    name:yup.string().required("Name is Required"),
    email: yup.string().nullable().email("Email should be Valid").required("Email Address is Required"),
    mobile:yup.number().required("Number is Required"),
//address:yup.string().required("Address is Required"),
});
const UserProfile = () => {
const dispatch = useDispatch();
const userState = useSelector(state=> state?.auth?.user)
const [edit,setEdit] = useState(true)
const formik = useFormik({
enableReinitialize:true,
    initialValues: {
        name:userState?.name,
        email: userState?.email,
        mobile: userState?.mobile,
       // address: userState?.address,
        },
        validationSchema:profileSchema,
        onSubmit: (values) => {
        dispatch(updateProfile(values));
        setEdit(true);
        }
          });
  return (
    <>
     <BreadCrumb title='My Profile'/>
     <Container class1 = 'cart-wrapper home-wrapper-2 py-5'>
        <div className='row'>
         <div className='col-12'>
            <div className='d-flex justify-content-between align-items-center'>
              <h3 className='my-3'>  Update Profile</h3>
              <FiEdit className='fs-3' onClick={()=> setEdit(false)}/>
            </div>
         </div>
            <div className='col-12'>
            <form onSubmit={formik.handleSubmit}>
            <div className="mb-3 form-group">
                <label htmlFor="example2">Name</label>
                <input type="text" name='name' disabled={edit} className="form-control" id="example2" placeholder="Name"
                 value={formik.values.name}
                 onChange={formik.handleChange('name')}
                 onBlur={formik.handleBlur('name')}/>
            <div className='errors'>
                {formik.touched.name && formik.errors.name}
            </div>
            </div>
            <div className=" mb-3 form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" name='email' disabled={edit} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"
                value={formik.values.email}
                onChange={formik.handleChange('email')}
                onBlur={formik.handleBlur('email')}/>
             <div className='errors'>
                {formik.touched.email && formik.errors.email}
            </div>
            </div>
            <div className=" mb-3 form-group">
                <label htmlFor="exampleInputEmail2">Mobile</label>
                <input type="number" name='mobile' disabled={edit} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Number"
                value={formik.values.mobile}
                onChange={formik.handleChange('mobile')}
                onBlur={formik.handleBlur('mobile')}/>
            <div className='errors'>
                {formik.touched.mobile && formik.errors.mobile}
            </div>
            </div>
            {/* <div className=" mb-3 form-group">
                <label htmlFor="exampleInputEmail2">Address</label>
                <input type="text" name='address' disabled={edit} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Address"
                value={formik.values.address}
                onChange={formik.handleChange('address')}
                onBlur={formik.handleBlur('address')}/>
            <div className='errors'>
                {formik.touched.address && formik.errors.address}
            </div>
            </div> */}
             {
                edit === false &&  <button type="submit"  className="btn btn-primary">Save</button>
             }
            </form>
            </div>
        </div>
     </Container>
    </>
  )
}

export default UserProfile
