import React from 'react'
import logo from '../../images/chap-logo.png'
import { Link } from 'react-router-dom'


function PartnersRegister() {
    return (
        <>
            <section className="register py-4">
                <div className="container mx-auto">
                    <div className="flex flex-col justify-center items-center">
                        <img className="w-[15rem] " src={logo} alt="" />
                        <h1 className='mb-10 text-2xl lg:text-3xl font-bold lg:text-start text-center'>Bienvenue très chers fournisseurs</h1>
                        <form className='flex flex-col justify-between items-center bg-slate-200 p-4'>
                            <select className='border p-2 w-full my-6 bg-white text-cyan-800 focus:outline-none' name="" id="">
                                <option value="">Restaurant</option>
                                <option value="">Salon de coiffure</option>
                                <option value="">Commerce</option>
                                <option value="">Cosmétique</option>
                                <option value="">Épicie</option>
                            </select>
                            <div className='flex flex-col lg:flex-row justify-between items-center -mx-4 px-4 lg:px-0'>
                                <div className="w-full flex flex-col gap-2 mx-4 py-6 lg:py-0">
                                    <div className="">
                                        <label htmlFor="">Nom du gérant</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Société/Organisation</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Ville</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Adresse</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Mot de passe</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Confirmation de mot de passe</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                </div>
                                <div className="w-full flex flex-col gap-2 mx-4 py-6 lg:py-0">
                                    <div className="">
                                        <label htmlFor="">Numéro de la structure</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Code postal</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Email</label>
                                        <input type="text" className=' focus:outline-none border p-2 w-full'/>
                                    </div>
                                    <div className="">
                                        <label htmlFor="">Description</label>
                                        <textarea className=' focus:outline-none border p-2 w-full resize-none' name="" id="" cols="30" rows="7"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="flex flex-col items-center mt-4 gap-8 px-4 lg:px-0">
                            <div className="">
                                <input type="checkbox" />
                                <span className='ml-4'>Je certifie avoir lu et approuvé <Link className='font-bold'>les termes et condictions.</Link></span>
                            </div>
                            <Link className='bg-cyan-800 py-2 px-8 text-white'><button>S'inscrire</button></Link>
                            <span>Avez vous deja un compte ? <Link to={"/partners-login"} className='font-bold'>Connectez-vous</Link></span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PartnersRegister