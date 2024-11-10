import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import marcet from "../../assets/image/marcet.png"
import "./Auth.scss"
import gogle from "../../assets/svg/google.svg"
import { auth } from '../../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

function RegisterCom() {

  const [user, setUser] = useState({ email: "", password: "" });
  const [active, setActive] = useState(true)
  const navigate = useNavigate()

  function handler(event) {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  async function singup() {
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        user.email,
        user.password
      )
      if (res) {
        toast.success("user was success created"),
          setUser({ email: "", password: "" })
          navigate("/login")
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  function changeActive () {
    setActive(!active)  
  }
  //   const { id } = useParams();

  //   useEffect(() => {
  // }, [id]);

  return (
    <div>
      <main className='melon'>
        <div className='wrapper1'>
          <img src={marcet} alt="" />
          <div className='main-top1'>

            <h1>Create an account</h1> <br /> <br />
            <p>Enter your details below</p> <br /> <br />

            <input type="text" placeholder='Name' /> <br />  <hr /> <br />

            <input
              name='email'
              value={user.email}
              onChange={handler}
              type="email"
              placeholder='Email or Phone Number'
            />{""}
            <br />  <hr /> <br />
             
            <div className='input'>
              <input
              name='password'
              value={user.password}
              onChange={handler}
              type={active?`password`:`text`}
              placeholder='Password' />  
              {active? (
                <FaEyeSlash onClick={() => changeActive()} className='w1'/>):(
                  <FaEye onClick={() => changeActive()} className='w1'/>
                )
              }
            </div>
              <hr />

           

            <div className='main-left'>
              <button onClick={() => singup()}>Create Account</button>
              <div className='gogle'>
                <img src={gogle} alt="" />
                <p>Sign up with Google</p>
              </div>
              <div className='login'>
                <p>Already have account?</p>
                <Link to={`/login`}>Log in</Link>
              </div>

            </div>
          </div>
        </div>
      </main>

    </div>
  )
}

export default RegisterCom