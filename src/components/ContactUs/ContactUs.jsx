import { faEnvelope, faLink, faMapLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function ContactUs() {
    return (
        <>
            <section className="contactez-nous py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row lg:-ml-52">
                        <div className="w-full lg:w-1/2 lg:relative">
                            <div className="w-full lg:w-[80%] flex flex-col lg:absolute lg:top-[10%] lg:left-[1/2] lg:-right-[10%] lg:transform lg:-translate-x-[1/2]">
                                <div className="w-full gap-8">
                                    <div className="w-full flex justify-around p-2 gap-2 lg:gap-0">
                                        <div className="h-[14rem] w-[18rem] flex flex-col justify-center items-center shadow-[0_0_12px_rgba(0,0,0,0.2)] bg-white">
                                            <span className='mb-6'><FontAwesomeIcon className='text-3xl lg:text-5xl text-cyan-600' icon={faMapLocationDot}/></span>
                                            <h2 className='font-bold mb-4 text-sm lg:text-lg text-center'>Notre bureau principal</h2>
                                            <span className='text-center text-xs lg:text-sm'>Cococdy Abidjan, Côte D'Ivoire</span>
                                        </div>
                                        <div className="h-[14rem] w-[18rem] flex flex-col justify-center items-center shadow-[0_0_12px_rgba(0,0,0,0.2)] bg-white">
                                            <span className='mb-6'><FontAwesomeIcon className='text-3xl lg:text-5xl text-cyan-600' icon={faPhone}/></span>
                                            <h2 className='font-bold mb-4 text-sm lg:text-lg text-center'>Numéro de téléphone</h2>
                                            <span className='text-center text-xs lg:text-sm'>+225 XX XX XX XX XX</span>
                                        </div>
                                    </div>

                                    <div className="w-full flex justify-around p-2 gap-2 lg:gap-0">
                                        <div className="h-40 w-[18rem] flex flex-col justify-center items-center shadow-[0_0_12px_rgba(0,0,0,0.2)] bg-white">
                                            <span className='mb-6'><FontAwesomeIcon className='text-3xl lg:text-5xl text-cyan-600' icon={faEnvelope}/></span>
                                            <h2 className='font-bold mb-4 text-sm lg:text-lg text-center'>E-mail</h2>
                                            <span className='text-center text-xs lg:text-sm'>srschain@gmail.com</span>
                                        </div>
                                        <div className="h-40 w-[18rem] flex flex-col justify-center items-center shadow-[0_0_12px_rgba(0,0,0,0.2)] bg-white">
                                            <span className='mb-6'><FontAwesomeIcon className='text-3xl lg:text-5xl text-cyan-600' icon={faLink}/></span>
                                            <h2 className='font-bold mb-4 text-sm lg:text-lg text-center'>Réseaux sociaux</h2>
                                            <span className='text-center text-xs lg:text-sm'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 p-2">
                            <div className="bg-cyan-600 p-6 flex flex-col justify-center items-center">
                                <h1 className='text-3xl text-white text-center font-bold'>Nous contacter</h1>
                                <div className="w-full lg:w-5/6 flex flex-col p-4 gap-8">
                                    <input type="text" className='p-2 border focus:outline-none focus:border-cyan-600' placeholder='Entrez votre nom' />
                                    <input type="text" className='p-2 border focus:outline-none focus:border-cyan-600' placeholder='Entrez votre email' />
                                    <textarea className='resize-none p-2 border focus:outline-none focus:border-cyan-600' placeholder='Entrez votre message' name="" id="" cols="30" rows="10"></textarea>
                                    <button className='bg-white text-cyan-600 p-2 font-bold transition duration-500 ease-in-out hover:text-cyan-800'>Envoyer</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ContactUs