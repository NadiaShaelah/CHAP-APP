import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLocationDot, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import cityMap from '../../images/map-city.avif'

function StoreDetails() {
    return (
        <section className="store-details">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4">
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
                <div className="flex flex-col items-center p-6 gap-4">
                    <h2 className='text-2xl font-bold'>Nous rejoindre</h2>
                    <div className="carte">
                        <img className='h-52' src={cityMap} alt="" />
                    </div>
                    <div className="flex items-center">
                        <Link className='bg-green-600 p-2 text-white'>Nous contacter</Link>
                        <Link className='bg-orange-600 p-2 text-white ml-[5.5rem]'>Site Web</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StoreDetails