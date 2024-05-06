import React from 'react'
import Meta from '../component/Meta';
import BreadCrumb from '../component/BreadCrumb';
import { AiOutlineHome } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { BsInfoCircle } from "react-icons/bs"
import Container from '../component/Container';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import {createQuery} from '../features/contact/contactSlice'
const contactSchema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().nullable().email("Email Should be valid").required("Email is Required"),
  mobile: yup.string().default('').nullable().required("Mobile Number is Required"),
  comment: yup.string().default('').nullable().required("comment is required"),
});


const Contact = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      comment: '',
    },
    validationSchema: contactSchema,
    onSubmit: values => {
      dispatch(createQuery({name:values.name, email:values.email,mobile:values.mobile,comment:values.comment}));
    },
  });
  return (
    <>
      <Meta title={"Contact Us"}/>
     <BreadCrumb title='Contact Us'/> 
     <Container class1='contact-wrapper py-5 home-wrapper-3'>
        <div className='row'>
          <div className='col-12'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235527.49421402006!2d75.69938463036017!3d22.7238886454077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1703062974018!5m2!1sen!2sin" width="600" height="450" className="border-0 w-100" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div className='col-12 mt-5'>
            <div className='contact-inner-wrapper d-flex justify-content-between'>
             <div>
              <h3 className='contact-title mb-4'>Contact</h3>
              <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                <div>
                  <input type='text' className='form-control' placeholder='Name'
                  name='name'
                  onChange={formik.handleChange("name")} 
                  onBlur={formik.handleBlur('name')}
                  value={formik.values.name}/>
                  <div className='errors'>
                    {
                      formik.touched.name && formik.errors.name
                    }
                  </div>
                </div>
                <div>
                  <input type='email' className='form-control' placeholder='Email'
                  name='email'
                  onChange={formik.handleChange("email")} 
                  onBlur={formik.handleBlur('email')}
                  value={formik.values.email}/>
                   <div className='errors'>
                    {
                      formik.touched.email && formik.errors.email
                    }
                  </div>
                </div>
                <div>
                  <input type='tel' className='form-control' placeholder='Mobile Number'
                  name='mobile'
                  onChange={formik.handleChange("mobile")} 
                  onBlur={formik.handleBlur('mobile')}
                  value={formik.values.mobile}/>
                    <div className='errors'>
                    {
                      formik.touched.mobile && formik.errors.mobile
                    }
                  </div>
                </div>
                <div>
                  <textarea id='' className='w-100 form-control' cols='30' rows='4' placeholder='Comments' 
                   name='comments'
                  onChange={formik.handleChange("comments")} 
                  onBlur={formik.handleBlur('comments')}
                  value={formik.values.comment}></textarea>
                   <div className='errors'>
                    {
                      formik.touched.comment && formik.errors.comment
                    }
                  </div>
                </div>
                <div>
                  <button type='submit' className='button border-0'>Submit</button>
                </div>
              </form>
              </div> 
             <div>
              <h3 className='contact-title mb-4'>Get in touch with us</h3>
              <div>
                <ul className='ps-0'>
                  <li className = 'mb-3 d-flex gap-15 align-items-center'>
                  <AiOutlineHome className='fs-5'/>
                  <address className='mb-0'>761, New Nutan Nagar Khargone MP</address>
                  </li>
                 <li className = 'mb-3 d-flex gap-15 align-items-center'>
                 <BiPhoneCall className='fs-5'/>
                 <a href='tel:+91 8547989578'>+91 8547989578</a>
                 </li>
                  <li className= 'mb-3 d-flex gap-15 align-items-center'>
                    <CiMail className='fs-5'/>
                    <a href='mailto:sustainable@gmail.com'>sustainable@gmail.com</a>
                  </li> 
                  <li className='mb-3 d-flex gap-15 align-items-center'>
                  <BsInfoCircle className='fs-5'/>
                  <p className='mb-0'>Monday - Saturday 10 AM-7 PM</p>
                  </li>
                </ul>
              </div>
             </div>
            </div>
          </div>
        </div>
     </Container>
    </>
  )
}

export default Contact
