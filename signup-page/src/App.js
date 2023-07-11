import React, { useState } from 'react';

import './signup.css';

const App = () => {
  const [values, setvalues] = useState({
    name: "",
    email: "",
    phoneNum: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const input = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Enter Your Name",
      errorMessage: "NO special chacracters allowed",
      pattern: "^[A-Za-z0-9$]",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Enter Your email",
      errorMessage: "Please enter a valid email ",
      required: true,
    },
    {
      id: 3,
      name: "contactNum",
      type: "text",
      placeholder: "Enter Your Contact Number",
      errorMessage: "Please enter a valid contact number",
      required: true,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      placeholder: "Enter Your address",
      errorMessage: "Please enter a valid address",
      required: true,
    },
    {
      id: 5,
      name: "password",
      type: "password",
      placeholder: "Enter Your password",
      errorMessage: "Password should be atleast 6 characters long",
      required: true,
      pattern: "[A-Za-z\d!@#$%^&*()_+]{7,19}",
    },
    {
      id: 6,
      name: "confrimPassword",
      type: "password",
      placeholder: "confrimPassword",
      errorMessage: "Passwords do not match",
      required: true,
      pattern: values.password,
    },

  ]
  const onChange = (event) => {
    setvalues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (values.password === values.confirmPassword) {
      alert('Registration successful');
      
    }
    else {
      alert("Password do not match")
    }

    const formData = {
      name: values.name,
      email: values.email,
      contactNum: values.contactNum,
      address: values.address,
      password: values.password,
      confirmPassword: values.confirmPassword,
    };

  };
  return (

    <>
      <div className="header">
        <i>Registration Form</i><br />

      </div>

      <div className="app">
        <form action="">
          {input.map((input) =>
          (
            <div>
              <input
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            </div>
          )

          )}

          <button type="submit" onClick={handleSubmit} >Submit!</button>
        </form>
      </div>


    </>
  )
};

export default App;

