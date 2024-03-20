import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/chap-logo.png'

function PartnersLogin() {
    return (
        <>
            <section className="partners-login">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row justify-center items-center bg-slate-200">
                        <img className="w-full lg:w-3/6 " src={logo} alt="" />
                        <div className="w-full lg:w-3/6 bg-white py-10 px-6">
                            <form className='flex flex-col gap-8 p-10'>
                                <div className="flex flex-col gap-2">
                                    <label className='font-semibold' htmlFor="">Email</label>
                                    <input className='w-full p-2 bg-white border focus:outline-none focus:border-cyan-800' type="text" placeholder='Entrez votre adresse email.'/>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className='font-semibold' htmlFor="">Mot de Passe</label>
                                    <input className='w-full p-2 bg-white border focus:outline-none focus:border-cyan-800' type="password" placeholder='Entrez votre mot de passe.'/>
                                </div>
                                <Link className='text-end font-semibold'>Mot de passe oublié ?</Link>
                                <button className='bg-cyan-800 text-white p-2'>Connexion</button>
                                <span>Pas de compte ?<Link to={"/partners-register"} className='ml-2 text-red-400 font-semibold underline'>Créer un compte</Link></span>
                            </form>
                        </div>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default PartnersLogin