import React, { useState, useEffect } from 'react'
import "./Auth.scss"
import marcet from "../../assets/image/marcet.png"
import google from "../../assets/svg/google.svg"
import { Link } from 'react-router-dom'
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function LoginCom() {


  const [user, setUser] = useState({ email: "", password: "" })
  const navigate = useNavigate()

  function handler(event) {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }
  // const {id} = useParams ()

  // useEffect(() => {
  // }, [id]);

  async function login() {
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
      if (res) {
        toast.success("user was success created"),
          setUser({ email: "", password: "" })
          navigate("/")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }



  return (
    <div>
          <main className='melon'>
      <div className='wrapper1'>
        <img src={marcet} alt="" />
        <div className='main-top1'>
          <h1>Log in to Exclusive</h1> <br /> <br />
          <p>Enter your details below</p> <br /> <br />

          <input 
          name='email'
          value={user.email}
          onChange={handler}
          type="email"
          placeholder='Email or Phone Number'
          /> <br />  <hr /> <br /> <br />

          <input 
          name='password'
              value={user.password}
              onChange={handler}
              type="password"
              placeholder='Password' 
          /> <hr /> 

          <div className='left1'>
            <button onClick={() => login()}>Log In</button>
              <p>Forget Password?</p>
             
            
          </div>
        </div>
      </div>
      </main>     
    </div>
  )
}

export default LoginCom