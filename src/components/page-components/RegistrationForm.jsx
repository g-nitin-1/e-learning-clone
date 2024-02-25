import React, { useEffect, useRef, useState } from 'react'
import Title from '../Title'
import Button from '../Button'
import FormGroup from '../FormGroup'

export default function RegistrationForm({handleCancel, showLogin, registered}) {
  
  let fullName = useRef();
  useEffect(() => {
    fullName.current.focus();
  },[]);

  const [registration, setRegistration] = useState({
    fullName: "",
    email:"",
    password:"",
    passwordConfirmation: "",
  });

  const handlerInputChange = (e) => {
    setRegistration({...registration, [e.target.name]: e.target.value})
  }
  const handleRegistration = (e) => {
    e.preventDefault();
    const events={
        fullName: registration.fullName,
        email: registration.email,
        password: registration.password,
        passwordConfirmation: registration.passwordConfirmation,
        id:Math.floor(Math.random()*1000),
    };
    const validateRegistrationForm = (obj) => {
        if(Object.values(obj).every((value) =>value||(typeof value === "number" && value===0)))
        {
            resetForm();
            window.alert("Success");
            showLogin();
        }
        else{
            window.alert("complete all fields");
        }
    }
validateRegistrationForm(events);
}
function resetForm(){
    setRegistration({
        fullName: "",
        email:"",
        password:"",
        passwordConfirmation: "",
    });
}

    return (
    <div className="form fadeIn" style={{maxWidth: 500}}>
      <Title text="Register" classes={"text-center mb-4"}/>
      <Button className={"btn-close"} text={"X"} style={{position:"absolute", top:20, right:30 }}
      onClick={handleCancel}/> 
      <form onSubmit={handleRegistration}>
      <FormGroup label={"Name"} placeholder={"Enter your Name"} reference={fullName} value={registration.fullName} onChange={handlerInputChange} name="fullName"/>
      <FormGroup label={"Email"} type={"email"} placeholder={"Enter your email"}  value={registration.email} onChange={handlerInputChange} name="email"/>
      <FormGroup label={"Password"} type={"password"}name="password" placeholder={"Enter your password"}  value={registration.password} onChange={handlerInputChange}/>
      <FormGroup label={"passwordConfirmation"} name="passwordConfirmation" type={"password"} placeholder={"Re-Enter your password"}  value={registration.passwordConfirmation} onChange={handlerInputChange}/>
      <div className="d-flex space-between">
      <Button classes={"btn-primary btn-lg"} type={"submit"} text={"Register"} onClick={() => console.log("Registered")}/>
      <Button type={"button"} classes={"btn-lg"}text={"Login"} onClick={showLogin}/>
      </div>
      </form>
    </div>
  )
}
