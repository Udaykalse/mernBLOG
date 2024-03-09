import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
   <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* left div */}
      <div className='flex-1'>
      <Link
        to="/"
        className=" font-bold dark:text-white text-4xl"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-lg text-white">
          Uday's
        </span>
        Blog
      </Link>
      <p className='text-sm mt-5' > Unlock Exclusive Content: Join Us Today and Dive Into a World of Insightful Articles!</p>
      </div>
      {/* right div */}
      <div className='flex-1' >
        <form className='flex flex-col gap-4'  >
          <div className=''>  
             <Label value='Your username'/>
             <TextInput type='text' placeholder='Username' id='username'/>
          </div>
          <div className=''>  
             <Label value='Your email'/>
             <TextInput type='text' placeholder='Email' id='email'/>
          </div>
          <div className=''>  
             <Label value='Your password'/>
             <TextInput type='text' placeholder='Password' id='password'/>
          </div>
           <Button gradientDuoTone='purpleToPink' type='submit'>Sign Up</Button>
        </form>
        <div className='flex gap-2 text-sm mt-5 '>
          <span className=''>Have an account?</span>
          <Link to='/signin' className='text-blue-500'>
            Sign_In
          </Link>
        </div>
      </div>
    </div> 
    </div>
  )
  
}
