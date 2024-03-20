import React from 'react'
import { Link } from 'react-router-dom'

function DropDown() {
    return (
        <>
            <div className="flex flex-col items-center absolute lg:top-[4.5rem] lg:right-[16rem] before:border-l-[1px] before:content-[''] 
                before:border-t-[1px] before:border-gray-400 before:bg-white before:w-[14px] before:h-[14px] 
                before:right-[6rem] before:top-[-0.4rem] before:absolute before:rotate-45">
                <ul className='flex flex-col gap-4 bg-white text-slate-700 py-4 px-10 z-10 shadow-[0_0_12px_rgba(0,0,0,0.2)]'>
                    <li className='bg-cyan-800 p-2 text-white rounded-md transition duration-500 ease-in-out hover:bg-cyan-700 transform '><Link to={"/user-connexion"}>Se connecter</Link></li>
                    <li className='bg-cyan-800 p-2 text-white rounded-md transition duration-500 ease-in-out hover:bg-cyan-700 transform '><Link to={"/user-register"}>S'inscrire</Link></li>
                </ul>  
            </div>
        </>
    )
}

export default DropDown