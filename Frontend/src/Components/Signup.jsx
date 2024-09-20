import React from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form"
import axios from "axios"
import toast from 'react-hot-toast'

function Signup() {
  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || '/'
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = async (data) => {
        const userInfo = {
        fullname:data.name,
        email:data.email,
        password:data.password
      }
      await axios.post("http://localhost:4100/user/signup",userInfo)
      .then((res)=>{
        console.log(res.data)
        if(res.data){
          toast.success("Signedup Successfully")
          localStorage.setItem("Users",JSON.stringify(res.data.user))
          navigate(from ,{replace:true})
        }
      }).catch((err)=>{
        if(err.response){
          console.log(err)
          toast.error("Error:" +err.response.data.message)
        }
      })
    }
  return (<>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    <h3 className="font-bold text-lg">Signup</h3>
    {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type='text' placeholder='Enter you name' className='w-80 bg-transparent px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}
        />
        <br/>
        {errors.name && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
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
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration=200'>Signup</button>
    <p className='text-xl'>Have account? <span className='underline text-blue-500 cursor-pointer'
    onClick={()=>document.getElementById("my_modal_3").showModal()}
    >Login</span></p>
    <Login/>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default Signup
