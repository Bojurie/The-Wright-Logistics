import React, {useState} from 'react'
// import { useForm } from "react-hook-form";
import './contact.css'
// import './../components/auth/form-fields.css'
import Header from './Header';

import img1 from '../components/Images/contactperson.png'
import Mapembeded from '../components/Mapembeded';
import { FormTitle } from '../components/formTitle';

const Contact = () => {
 const [ values , setValues] = useState({
   name: "",
   phone: "",
   email: "",
   subject: "",
   message: ""
 })

 const [submitted, setSubmitted ] = useState(false);
 const [valid, setValid ] = useState(false)

  const nameHandler = (e)=> {
      setValues ({...values, name: e.target.values})
    }

  const numberHandler = (e) => {
     setValues ({...values, phone: e.target.values})
  }

  const handleEmail = (e) => {
     setValues ({...values, email: e.target.values})
  }

   const handleSubject = (e) => {
     setValues ({...values, subject: e.target.values})
  }

  const handleMessage = e => {
     setValues ({...values, message: e.target.values})
  }

  const handleSubmit = (e) =>{
     e.preventDefault();
    
    if(values.name && values.email && values.message){
  setValid(true)
    }
    setSubmitted(true)
  }


  return (
    <div className='contact'>
     <Header title='Contact'/>
        <div className="container ">
          <FormTitle className="sign-in-form__title" text="GET IN TOUCH"/> 
                <div className='form-header'>
                  
                  <p>I am the best at this so contact now and i will build you the most amzing website you have ever had. No Cap </p>
                </div>
               <div className='contact-wrapper'>
                <form id="contact-form"  method="POST" action='/contact'>

                {submitted && valid ?  <div className='success-message'>Success! Thank you for contacting us.</div> : null}
                  <div className='contact-forms-container'>  
                  <div className='form-group1'>
          
                    <div className="form-group">
                        <input
                            className='form-input1'
                            type="text"
                            value={values.name} 
                            onChange={nameHandler}
                            placeholder=' Enter name ...'/>
                      {submitted && !values.name ? <span>Please enter name</span> : null}
                    </div>
                    <div className="form-group">    
                        <input
                            className='form-input1'
                            type="text"
                            value={values.phone} 
                            onChange={numberHandler}
                            placeholder=' Enter Phone Number...'
                        />
                        {submitted && !values.phone ? <span>Please enter your phone contact</span> : null}
                    </div>

                  </div>
                  <div className="form-group2">
                    <div className="form-group">
                        <input
                            className='form-input1'
                            type="text"
                            value={values.email} 
                            onChange={handleEmail}
                            placeholder=' Enter Email...'/>
                      {submitted && !values.email ? <span>Please enter name</span> : null}
                    </div>
                    <div className="form-group">
                      <input
                            className='form-input1'
                            type="text"
                            value={values.subject} 
                            onChange={handleSubject}
                            placeholder=' Subject...'/>
                        {submitted && !values.subject ? <span>Please enter your subject</span> : null}
                    </div>
                  </div>
                  <div className='form-group3'>

                  
                    <div className="form-group">
                        <textarea 
                        className=''
                        value={values.message} 
                        onChange={handleMessage} 
                        placeholder='Message....'/>
                      {submitted && !values.message ? <span>Please enter message</span> : null}
                    </div>
                  </div>
                  <div className='button-contact'>
                    <button 
                        type="submit" 
                        className="btn btn-primary contact-btn">
                          Submit
                    </button>
                  </div>
                    
                   </div> 
                    
                </form>

                <div className='contact-img'>
                  <img src={img1} alt='' />
                </div>
              
                
              </div> 
        </div>
      <div>
        <Mapembeded />
       
      </div>

    </div>
  )
}
export default Contact;