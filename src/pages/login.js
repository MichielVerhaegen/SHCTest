import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from "../dbconnector/connector";
import { getCookie, checktoken } from "../dbconnector/checktoken";


const checkloggedinstatus = async (setLoggedIn) => {
  if (getCookie("logintoken") !== "") {
    const response = checktoken();

    return response.then(response => {
      if (response.status === 200) {
        return response.email
      } else {
        setLoggedIn(false)
        return false
      }
    })
  }

}

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const navigate = useNavigate()

  const onBack = () => {
    navigate("/");
  }

  const onButtonClick = () => {
    // Set initial error values to empty
    setEmailError('')
    setPasswordError('')

    /* #region  check fields */
    // Check if the user has entered both fields correctly
    if ('' === email) {
      setEmailError('Please enter your email')
      return
    }

    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError('Please enter a valid email')
      return
    }

    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
    /* #endregion */

    login({ email, password }).then((res) => res.json()).then(body => {


      if (body.status === 200) {
        //how long the cookie should stay in the browser
        const daysvalid=7
        const d = new Date();
        d.setTime(d.getTime() + (daysvalid*24*60*60*1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = "logintoken=" + body.token+ ";"+expires + ";path=/";

        props.setEmail(email);
        props.setLoggedIn(true);
        if(body.account.rights ===2){
          navigate("/home")
        }else if(body.account.rights ===1){
          navigate("/cleaner")
        }
      } else {

        setPasswordError(body.errormessage + " " + body.status)
      }


    });


  }
  const entercheck = (e) => {
    if (e.key === "Enter") {
      onButtonClick();
    }

  }

  const tokenresponse = checkloggedinstatus()
  tokenresponse.then(response => {
    if (response) {
      props.setEmail(response);
      props.setLoggedIn(true);

      navigate("/home")
    }else{
      
      props.setLoggedIn(false);
    }

  })





  return (
    <div className={'mainContainer'}>
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={()=>onBack()} value={'Back'} />
      </div>
      <div className={'titleContainer'}>
        <div>Login</div>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          value={email}
          placeholder="Enter your email here"
          onChange={(ev) => setEmail(ev.target.value)}
          className={'inputBox'}
          onKeyDown={entercheck}
        />
        <label className="errorLabel">{emailError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input
          type='password'
          value={password}
          placeholder="Enter your password here"
          onChange={(ev) => setPassword(ev.target.value)}
          className={'inputBox'}
          onKeyDown={entercheck}
        />
        <label className="errorLabel">{passwordError}</label>
      </div>
      <br />
      <div className={'inputContainer'}>
        <input className={'inputButton'} type="button" onClick={()=>onButtonClick()} value={'Log in'} />
      </div>
    </div>

  );

};



export { Login, checkloggedinstatus };