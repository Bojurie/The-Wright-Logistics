// import React, { useState } from "react";
// import { reduxForm, Field } from "redux-form";
// import { FormTitle } from "../formTitle";
// import { FormInput, FormButton } from "../formFields";
// import TextLink from "../textLink";

// import './LoginForm.css'
// import Footer from "../Footer";


// const LoginForm = () => {
  // const [values, setValues] = useState({
  //   email: "",
  //   password: "",
  //   handleSubmit: ""

  // })

  //  const handleEmail = (e)=> {
  //   setValues ({...values, email: e.target.values})
  // }

  // const handlePassword = (e)=> {
  //   setValues ({...values, password: e.target.values})
  // }

  //  const handleSubmit = async (e) =>{
  //    e.preventDefault();
  //    console.log(e);
    
  // //   if(values.name && values.email && values.message){
  // // setValid(true)
  // // const response = await axios.post('./login',
  // //     JSON.stringify({ user, pwd }),
  // //     {
  // //         headers: { 'Content-Type': 'application/json' },
  // //         withCredentials: true
  // //     }
  // // );

  //   }
  //   // setSubmitted(true)


//     return (
//       <form onSubmit={handleSubmit} className="sign-in-form" method='POST' action="/login" >
//         <FormTitle className="sign-in-form__title" text="Login" />
//         <Field
//           className="sign-in-form__email"
//           placeholder="Enter Email"
//           name="email"
//           type="email"
//           title="Email"
//           value={values.email}
//           onChange={handleEmail}
//           component={FormInput}
//         />
//         <Field
//           className="sign-in-form__password"
//           placeholder="Enter Password"
//           name="password"
//           type="password"
//           title="Password"
//           value={values.password}
//           onChange={handlePassword}
//           component={FormInput}
//         />
//         <Field
//           className="sign-in-form__login"
//           name="login"
//           type="submit"
//           title="Login"
//           component={FormButton}
//         />
//         <div className='sign-in-form__text-links'>
//             <TextLink to='/forgot' text='Forgot Password'/>
//             <TextLink to='/signup' text='Not a member? Register here'/>
//         </div>
        
//       </form>
     
//     )
// }


  

// export default reduxForm({
//   form: 'login'
// })(LoginForm)