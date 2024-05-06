import React from 'react'
import BreadCrumb from '../component/BreadCrumb'
import Meta from '../component/Meta'
import Container from '../component/Container'

const PrivacyPolicy = () => {
  return (
    <>
    <Meta title={"Privacy policy"}/>
    <BreadCrumb title='Privacy policy'/>
    <Container className='policy-wrapper py-5 home-wrapper-2'>
        <div className='row'>
          <div className='col-12'>
           <h1 className='my-4'>Privacy Policy</h1>
           <p><strong>Privacy Policy for E-Marketplace Website Users</strong></p>
           <p><strong>Effective Date: 15 July 2023</strong></p>
           <p>At, Sustainable Basket we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and store your information when you use our E-Marketplace website. By using our website, you consent to the terms described in this Privacy Policy.Information We Collect</p>
          <h1 className='my-4'>1.1 Personal Information:</h1>
          <p>We may collect personal information directly from you when you create an account or make a purchase on our website. This information may include your name, email address, shipping address, phone number, and payment details. We use this information to fulfill your orders and communicate with you regarding your transactions.</p>
          <h2 className='my-4'>1.2 Usage Information:</h2>
          <p>We may collect non-personal information about your interactions with our website, such as your IP address, browser type, operating system, and browsing behavior. We use this information to improve our website’s functionality, optimize our services, and enhance your user experience.</p>
          <h2 className='my-4'>1.3 Cookies and Tracking Technologies:</h2>
          <p>We use cookies and similar tracking technologies to collect information about your browsing activities on our website. This data helps us personalize your experience, track your preferences, and provide relevant advertisements. You can control cookies through your browser settings.Use of Information</p>
          <h1 className='my-4'>2.1 Providing and Improving Services:</h1>
          <p>We use your information to provide the services you request, such as processing orders, facilitating payments, and delivering products. We also use your information to improve our website, customize your experience, and develop new features and functionalities.</p>
         <h2 className='my-4'>2.2 Communication:</h2>
         <p>We may use your information to communicate with you regarding your orders, account status, and important updates. We may also send you promotional materials and newsletters, but you can opt out of these communications at any time.</p>
         <h2 className='my-4'>2.3 Legal Compliance and Security:</h2>
         <p>We may use your information to comply with applicable laws, regulations, or legal processes. We also take reasonable measures to protect our website and users from unauthorized access, fraud, and other malicious activities.</p>
         <h1 className='my-5'>Sharing of Information</h1>
         <h2 className='my-4'>3.1 Third-Party Service Providers:</h2>
         <p>We may share your information with trusted third-party service providers who assist us in operating our website, processing payments, delivering products, and analyzing website usage. These providers have access to your information only to perform specific tasks on our behalf and are obligated to maintain its confidentiality.</p>
         <h2 className='my-4'>3.2 Business Transfers:</h2>
         <p>In the event of a merger, acquisition, or sale of our business, your information may be transferred to the acquiring entity or merged with the new organization. We will notify you of any such change and provide choices regarding your information.</p>
         <h2 className='my-4'>3.3 Legal Obligations:</h2>
         <p>We may disclose your information if required by law, court order, or governmental authority. We may also share information to protect our rights, safety, or property, as well as the rights, safety, or property of others.</p>
         <h1 className='my-5'>Data Security</h1>
         <h2 className='my-4'>5.1 Access and Update:</h2>
         <p>You can access and update your personal information by logging into your account on our website. Please keep your information accurate and up to date.</p>
         <h2 className='my-4'>5.2 Marketing Communications:</h2>
         <p>You can opt out of receiving promotional emails or newsletters by following the unsubscribe instructions provided in those communications. However, you may still receive transactional or service-related communications.</p>
         <h2 className='my-4'>5.3 Do Not Track:</h2>
         <p>Our website does not currently respond to “Do Not Track” signals. However, you can disable cookies through your browser settings.</p>
         <h1 className='my-4'>Children’s Privacy</h1>
         <p>Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected information from a child, please contact us, and we will promptly remove it.Changes to the Privacy Policy</p>
        <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the revised version on our website. It is your responsibility to review the Privacy Policy periodically.</p>
         <h1 className='my-4'>Contact Us</h1> 
         <p className='mb-4'>If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at <a href='customercare@sustainablebasket.com' className='text-black'>customercare@sustainablebasket.com</a></p>
          </div>
        </div>
    </Container>
    </>
  )
}

export default PrivacyPolicy
