import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'


function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async (data) => {
        const userInfo = {
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4100/user/login",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success('Loggedin Successfully')
          document.getElementById("my_modal_3").close()
          setTimeout(()=>{
            localStorage.setItem("Users",JSON.stringify(res.data.user))
            window.location.reload()
          },2000)
        }
      }).catch((err)=>{
        if(err.response){
          console.log(err)
          toast.error("Error:" +err.response.data.message)
          setTimeout(()=>{},2000)
        }
      })
    }
    
  return (
    <div>
      <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to = '/'>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
      onClick={()=> document.getElementById("my_modal_3").close()}
      >✕</button>
      </Link>
    <h3 className="font-bold text-lg">Login</h3>
    {/* Email */}
    <div className='mt-4 space-y-2'>
        <span>Email</span>
        <br />
        <input type='text' placeholder='Enter you email' className='w-80 bg-transparent px-3 py-1 border rounded-md outline-none'
        {...register("email", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* password */}
    <div className='mt-4 space-y-2'>
        <span>Password</span>
        <br />
        <input type='password' placeholder='Enter you password' className='w-80 bg-transparent px-3 py-1 border rounded-md outline-none'
        {...register("password", { required: true })}
        />
        <br/>
        {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* button */}
    <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration=200'>Login</button>
    <p>Not registered? <Link to='/signup'><span className='underline text-blue-500 cursor-pointer'>Signup</span></Link></p>
    </div>
    </form>
  </div>
</dialog>
    </div>
  )
}

export default Login
