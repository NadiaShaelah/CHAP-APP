import React from 'react'
import { Link } from 'react-router-dom'

import { faAddressCard, faCity, faEnvelope, faMailBulk, faPhone, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function UserRegister() {
    return (
        <>
            <section className="user-register bg-white">
                <div className="container mx-auto">
                    <div className="flex flex-col px-4 lg:px-0">
                        <div className="flex flex-col gap-4 items-center pt-10">
                            <h1 className='text-lg lg:text-xl'>Bonjour...</h1>
                            <p className='text-2xl text-center lg:text-3xl font-semibold'>Bienvenue sur notre page d'inscription.!</p>
                        </div>

                        <form className='flex flex-col items-center w-full py-10'>
                            <div className="w-full lg:w-3/6 flex flex-col gap-4 shadow-[0_0_12px_rgba(0,0,0,0.2)] p-10">
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faUser}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre nom'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faUser}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre prénom'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faEnvelope}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre email'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faPhone}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre numéro de téléphone'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faAddressCard}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre adresse'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faMailBulk}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre code postal'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faCity}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre ville'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faUserLock}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Entrez votre mot de passe'/>
                                </div>
                                <div className='flex border-b border-b-cyan-800'>
                                    <span className='px-4 p-2 text-3xl text-cyan-800'><FontAwesomeIcon icon={faUserLock}/></span>
                                    <input type="text" name="" id="" className='w-full p-2 focus:outline-none' placeholder='Confirmez votre mot de passe'/>
                                </div>
                                <button className='bg-cyan-800 text-white p-2 mt-4 transition duration-500 ease-in-out hover:bg-cyan-700 transform'>Inscription</button>
                                <span className='text-center'>Avez vous déjà un compte ? <Link className='text-cyan-800 font-semibold underline' to={'/user-login'}>Connectez-vous</Link></span>
                            </div>
                            <p className='py-10 w-full lg:w-3/6'>En continuant, vous acceptez nos <span className='text-cyan-800 font-bold'>Terrmes et Conditions</span>. Nous utilisons vos données personnelles pour vous offrir une expérience personnalisée, ainsi que pour mieux comprendre et améliorer notre service. Pour plus de détails, cliquez ici.</p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserRegister