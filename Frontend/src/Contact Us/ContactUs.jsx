import React from 'react'
import { useForm } from "react-hook-form"
import {Link} from 'react-router-dom'

function ContactUs() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
    
      const onSubmit = (data) => console.log(data)
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
  <div className="">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
        <Link to='/'>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
      <h3 className="font-bold text-lg">Contact US</h3>
      {/* Name */}
    <div className='mt-4 space-y-2'>
        <span>Name</span>
        <br />
        <input type='text' placeholder='Enter you name' className='w-80 bg-transparent px-3 py-1 border rounded-md outline-none'
        {...register("name", { required: true })}
        />
        <br/>
        {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
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
    {/* text area */}
    <div className='mt-4 space-y-2'>
        <label className="form-control">
    <div className="label">
        <span>Leave a Mesage</span>
    </div>
  <textarea className="textarea textarea-bordered h-24" placeholder="Message Here"
  {...register("message", { required: true })}
  ></textarea>
        </label>
        {errors.message && <span className='text-sm text-red-500'>This field is required</span>}
    </div>
    {/* button */}
    <div className='flex justify-around mt-4'>
    <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration=200'>Send</button>
    </div>
    </form>
  </div>
</div>
    </div>
    </>
  )
}

export default ContactUs
