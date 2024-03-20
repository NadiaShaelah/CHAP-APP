import React from 'react'
import vegetalImg from '../../images/vegetables.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord, faGlobe, faLocationDot, faMapMarkedAlt, faPhone, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import cityMap from '../../images/map-city.avif'
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts'
import StoreDetails from './StoreDetails'
import AvailableProducts from '../AvailableProducts/AvailableProducts'

function EpicerieStoreDetails() {
    return (
        <>
            <section className="store-details mt-0">
                <div>
                    <img className="w-full h-[60vh] object-cover" src={vegetalImg} alt="" />
                </div>
                <div className="container mx-auto py-10">
                    <h1 className='text-6xl font-bold text-center'>African Makanaki</h1>
                    <StoreDetails/>
                    {/* <div className="flex justify-between items-center">
                        <div className="flex flex-col p-6 gap-4">
                            <div className="flex justify-start items-center">
                                <div className="text-yellow-400">
                                    <small className="ml-1"><FontAwesomeIcon icon={faStar}/></small>
                                    <small className="ml-1"><FontAwesomeIcon icon={faStar}/></small>
                                    <small className="ml-1"><FontAwesomeIcon icon={faStar}/></small>
                                    <small className="ml-1"><FontAwesomeIcon icon={faStar}/></small>
                                </div>
                                <span className='text-slate-700 ml-2 '>0 avis</span>
                            </div>
                            <div className='flex justify-start items-center'>
                                <FontAwesomeIcon className='size-6 mr-2' icon={faLocationDot}/>
                                <span>5 rue sainte-apolline, 75003, Paris</span>
                            </div>
                            <div className='flex justify-start items-center'>
                                <FontAwesomeIcon className='size-6 mr-2' icon={faGlobe}/>
                                <span>Non defini</span>
                            </div>
                            <div className='flex justify-start items-center'>
                                <FontAwesomeIcon className='size-6 mr-2' icon={faPhone}/>
                                <span>+225 XX XX XX XX XX</span>
                            </div>
                        </div>
                        <div className="">
                            <ul className='flex flex-col p-6 gap-4'>
                                <li><strong>Description : </strong>Alimentation exotique et cosmetiques</li>
                                <li><strong>Nationalité : </strong>Africaine</li>
                                <li><strong>Moyen de paiement : </strong>Espèces</li>
                                <li><strong>Reservation : </strong>En ligne</li>
                                <li><strong>Horaire : </strong>Liste d'heures ici.</li>
                            </ul>
                        </div>
                        <div className="flex flex-col p-6 gap-4">
                            <h2 className='text-center text-2xl font-bold'>Nous rejoindre</h2>
                            <div className="carte">
                                <img className='h-52' src={cityMap} alt="" />
                            </div>
                            <div className="flex justify-between items-center">
                                <Link className='bg-green-600 p-2 text-white'>Nous contacter</Link>
                                <Link className='bg-orange-600 p-2 text-white'>Site Web</Link>
                            </div>
                        </div>
                    </div> */}
                </div>
                
                <AvailableProducts/>

                <RecommendedProducts/>

                <div className="flex flex-col justify-center items-center py-10">
                    <h2 className='text-2xl font-semibold underline mb-4'>Avis</h2>
                    <button className='bg-cyan-800 py-2 px-6 text-white'>Donnez vos avis</button>
                </div>
            </section>
        </>
    )
}

export default EpicerieStoreDetails;