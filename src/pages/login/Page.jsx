import React, {useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
// import baseUrl from '../../baseUrl';
// import { jwtDecode } from "jwt-decode";
import loginBg from '../../assets/images/loginbg.png'
import image1 from '../../assets/images/image1.png'
import sbcLogo from '../../assets/sbclogo.svg'
const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("https://paymentsgw.sevenup.org/service/api/Token", {
        email,
        password,
      });
      const { authToken, roles } = response.data;
      localStorage.setItem("authToken", authToken);
      localStorage.setItem("roles", JSON.stringify(roles));

      setIsLoading(false);
      navigate("/"); // Redirect to the home/dashboard page
    } catch (error) {
      setIsLoading(false);
      setError("Invalid email or password");
    }
  };



  return (
    <div className='h-screen flex items-center justify-center bg-[#ffffff]'>
        <div className='w-11/12 h-[90vh] p-4 flex justify-around items-center gap-4' style={{backgroundImage: `url(${loginBg})`, backgroundSize: '100% 100%', backgroundPosition: 'center'}}>
          <div className="flex flex-col justify-between h-full ">
          <div className=""></div>
            <img src={image1} alt="" className='ml-8' />
          <div className="mt-5 flex gap-2 items-center ">
            <img src={sbcLogo} alt="" className='w-12 h-14' />
            <div className="flex flex-col ">
              <h1 className='text-2xl text-gray-800 font-semibold'>SBC 360 Assessment</h1>
              <p className='text-gray-500 text-sm'>Assessment for Seven-Up Bottling Company Ltd.</p>
            </div>
            
          </div>
          </div>
          <div className=" bg-white text-neutral-800 w-2/5 flex flex-col justify-center items-center gap-4 px-5 rounded-2xl h-[80vh] ">
            <div className="flex flex-col gap-2 items-center">
            <h1 className='text-xl font-semibold'>Welcome To SBC 360 Assessment</h1>
            <p className='text-neutral-500'>Login to your account to continue</p>
            </div>
            <form onSubmit={handleLogin} className='flex flex-col gap-4 mx-5 w-full'>
             <div className='flex flex-col gap-2'>
              <label htmlFor="email" className='text-sm ml-2 text-neutral-600'>Email</label>
              <input type="email" id='email' value={email} onChange={(e) => setEmail(e.target.value)} className='border border-gray-300 p-3 rounded-md' />
              </div>
              <div className='flex flex-col gap-2'>
              <label htmlFor="password" className='text-sm ml-2 text-neutral-600'>Password</label>
              <input type="password" id='password' value={password} onChange={(e) => setPassword(e.target.value)} className='border border-gray-300 p-3 rounded-md' />
              </div>
              <button type='submit' className='bg-[#1EAB41] text-white font-medium text-lg p-3 rounded-md'>{isLoading ? 'Loading...' : 'Login'}</button>
              <p className='text-red-500'>{error}</p>

            </form>
          </div>
        </div>
    </div>
  );
}

export default Page