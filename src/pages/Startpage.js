import React from 'react'
import { useNavigate } from 'react-router-dom'

const Startpage = (props) => {
  const { loggedIn, email } = props
  const navigate = useNavigate()

  const onButtonClick = () => {
    navigate("/login");
  }

  if (loggedIn) {
    navigate("/home")
  }
  return (
    <div className="mainContainer">
      <div className={'titleContainer'}>
        <div>SHC</div>
      </div>
      <div>Welcome to the SHC Testing environment</div>
      <div className={'buttonContainer'}>
        <input
          className='inputButton'
          type="button"
          onClick={()=>onButtonClick()}
          value={loggedIn ? 'Log out' : 'Log in'}
        />
        {loggedIn ? <div>Your email address is {email}</div> : <div />}
      </div>
    </div>
  )
}
export default Startpage;