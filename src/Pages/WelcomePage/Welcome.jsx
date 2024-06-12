import React from 'react'
import Login from '../Login/Login'
import Navbar from '../../Components/Navbar/Navbar'
import bgImg from "../../Assets/bgm.jpg"
import { Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <div className=' h-screen bg-cover w-screen' style={{ backgroundImage: `url(${bgImg})` }}>
            <Navbar />

            <div className='flex  items-center justify-center mt-16'>
                <div className="flex flex-col items-center justify-center h-96 sm:w-[500px] w-72 bg-gradient-to-r from-transparent to-white/20 backdrop-blur-md px-8 py-6 gap-6 rounded-lg shadow-md">
                    <h1 className=' text-2xl text-white sm:text-red-600 text-center'>Welcome To My Ash-Note</h1>
                    <Link to="/login" className='font-medium text-primary'>Login</Link> <Link to="/signup" className='font-medium text-primary'>Create Account</Link>
                    <p className='text-white sm:text-red-600 text-xs text-center'>Never forget a thought again. Capture and organize your ideas with ease.Take notes and stay on top of your life with our powerful and intuitive note-taking app</p>
                    <p className='text-slate-950 text-xs text-center'>Note: Create your accout and keep your login credentials to relogin to get your saved notes </p>
                </div>
            </div>
        </div>
    )
}

export default Welcome