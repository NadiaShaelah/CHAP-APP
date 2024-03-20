import React from 'react'

import { faUser, faUserCircle, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

import logo from '../../images/chap-logo.png'


function UserLogin() {
    return (
        <>
            <section className="user-login py-4">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full lg:w-3/6 flex flex-col items-center">
                            <img src={logo} alt="" />
                        </div>
                        <div className="w-full lg:w-3/6 flex flex-col items-center gap-4 ">{/*shadow-[0_0_12px_rgba(0,0,0,0.2)]*/}
                            <h1 className='text-3xl font-semibold'>Bienvenue cher client...</h1>
                            <div className="flex flex-col items-center gap-4">
                                <p>Connectez-vous à votre compte</p>
                                <button className='text-xl shadow-[0_0_12px_rgba(0,0,0,0.2)] p-2'>Connexion avec google</button>
                            </div>
                            <span>Ou</span>
                            <form className='flex flex-col gap-4 py-10'>
                                <input type="text" placeholder='Email' className='border border-cyan-800 rounded-sm p-2 focus:outline-none'/>
                                <input type="text" placeholder='Entrez votre mot de passe' className='border border-cyan-800 rounded-sm p-2 focus:outline-none'/>
                                <Link className='text-end font-semibold'>Mot de passe oublié ?</Link>
                                <button className='bg-cyan-800 text-white p-2'>Connexion</button>
                                <span>Pas de compte ?<Link to={"/user-register"} className='ml-2 text-red-400 font-semibold underline'>Créer un compte</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserLogin