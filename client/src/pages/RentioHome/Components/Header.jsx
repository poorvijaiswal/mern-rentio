import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className='px-4 py-2 absolute  w-full bg-slate-200 shadow-md'>
        <div className='w-[80%] flex justify-between m-auto'>
        <Link to='/'>
            <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
                <span className='text-red-600 sm:text-2xl font-bold text-xl'>R</span>
                <span className='sm:text-2xl font-semibold text-xl'>entio</span>
            </h1>
        </Link>
        <ul className='flex gap-4'>
            <Link to='/'><li className='hidden sm:block hover:underline hover:text-red-600 cursor-pointer hover:bg-blue-50 px-2 py-1 hover:rounded-lg'>Home</li></Link>
            <Link to='/about'><li className='hidden sm:block hover:underline hover:text-red-600 cursor-pointer hover:bg-blue-50 px-2 py-1 hover:rounded-lg'>About</li></Link>
            <Link to='/sign-in'><li className='sm:block hover:underline hover:text-red-600 cursor-pointer hover:bg-blue-50 px-2 py-1 hover:rounded-lg'>Sign in</li></Link>
        </ul>
        </div>
    </header>
  )
}
