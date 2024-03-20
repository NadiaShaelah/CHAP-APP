import React from 'react'

import fretImg from '../../images/fret.jpg'
import { faMapLocationDot, faPhone, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

function FretStores() {
    return (
        <>
           <section className="all-fret-stores my-10">
                <div className="container mx-auto">
                    <div className="search-bar flex lg:flex-row justify-center items-center mb-10 px-4">
                        <input type="search" className='lg:w-[30%] w-full border px-14 py-2 focus:outline-none focus:border-cyan-800' placeholder='Rechechez vos magasins ici...'/>
                        <button className='bg-cyan-800 py-[0.6rem] px-3 rounded-r-md text-white'><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 lg:px-0">
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                        <Link to={"/fret-store-details"} className="box bg-neutral-400 text-white transition duration-500 ease-in-out hover:opacity-70">
                            <img src={fretImg} className="" alt="" />
                            <div className="flex flex-col items-center">
                                <h1 className='text-2xl lg:text-3xl mb-4'>Nady Boutique</h1>
                                <div className="flex flex-col items-center">
                                    <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faPhone}/> +225 0789807498</span>
                                    <span className='text-md font-semibold mt-1'><FontAwesomeIcon icon={faMapLocationDot}/> Abidjan Côte D'Ivoire</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </section> 
        </>
    )
}

export default FretStores