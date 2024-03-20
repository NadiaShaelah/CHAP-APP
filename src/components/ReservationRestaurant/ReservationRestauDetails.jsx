import React, { useState } from 'react'
import vegetalImg from '../../images/vegetables.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faLocationDot, faPhone, faRestroom, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import cityMap from '../../images/map-city.avif'
import MenuCard from '../MenuCard/MenuCard'
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts'
import ReservationModal from '../ReservationModal/ReservationModal'

function ReservationRestauDetails() {

    const [reservation, setReservation] = useState(false);
    const [open, setOpen] = useState(false);

    const makeReservation = () => {
        setReservation(!reservation);
    }

    return (
        <>
            <section className="store-details mt-0">
                <div>
                    <img className="w-full h-[60vh] object-cover" src={vegetalImg} alt="" />
                </div>
                <div className="container mx-auto py-10 relative">
                    <h1 className='text-6xl font-bold text-center'>African Makanaki</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
                            <button onClick={()=> setOpen(true)} className='bg-cyan-700 p-2 text-white font-semibold'>Reserver une table</button>
                            <ReservationModal open={open} onClose={() => setOpen(false)}>
                                <div className="text-center w-full">
                                    <FontAwesomeIcon icon={faRestroom} size='56' className='mx-auto text-red-600'/>
                                    <div className="mx-auto my-4 w-full">
                                        <h2 className='text-3xl text-cyan-800 text-center font-bold'>Reservation de table.</h2>
                                        <form className='w-full flex flex-col items-center gap-4 py-10'>
                                            <div className="flex flex-col lg:flex-row gap-2">
                                                <label htmlFor="" className='w-full self-start'>Date</label>
                                                <input type="date" name="" id="" className='border p-2 w-full'/>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-2">
                                                <label htmlFor="" className='w-full self-start'>Heure</label>
                                                <input type="time" name="" id="" className='border p-2 w-full'/>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-2">
                                                <label htmlFor="" className='w-full self-start'>Nombre de personne</label>
                                                <input type="number" name="" id="" className='border p-2 w-full'/>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-2">
                                                <label htmlFor="" className='w-full self-start'>Nom</label>
                                                <input type="text" name="" id="" className='border p-2 w-full'/>
                                            </div>
                                            <div className="flex flex-col lg:flex-row gap-2">
                                                <label htmlFor="" className='w-full self-start'>Email</label>
                                                <input type="text" name="" id="" className='border p-2 w-full'/>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="flex gap-4">
                                        <button className="bg-cyan-700 text-white rounded-sm w-full py-2">Reserver</button>
                                        <button className="text-white bg-red-600 rounded-sm w-full py-2 shadow-xl"
                                        onClick={() => setOpen(false)}>Annuler</button>
                                    </div>
                                </div>
                            </ReservationModal>
                            {/* <button onClick={() => makeReservation()} className='bg-cyan-700 p-2 text-white font-semibold'>Reserver une table</button>
                            {reservation ? <div className=" absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%] w-96 h-56 bg-neutral-800"></div> : null} */}
                            
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
                            <h2 className='text-center text-2xl font-bold'>Nous rejoindre</h2>
                            <div className="carte">
                                <img className='h-52' src={cityMap} alt="" />
                            </div>
                            <div className="flex items-center">
                                <Link className='bg-green-600 p-2 text-white'>Nous contacter</Link>
                                <Link className='bg-orange-600 p-2 text-white ml-[5.5rem]'>Site Web</Link>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="menu-cart bg-gray-300 py-10">
                    <div className="container mx-auto flex flex-col gap-4">
                        <h2 className='text-4xl font-bold text-center mb-4'>La carte</h2>
                        <MenuCard/>
                    </div>
                </div>

                <RecommendedProducts/>

                <div className="flex flex-col justify-center items-center py-10">
                    <h2 className='text-2xl font-semibold underline'>Avis</h2>
                    <ul className='my-10'>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                        <li>Lorem ipsum dolor sit amet.</li>
                    </ul>

                    <button className='bg-cyan-800 py-2 px-6 text-white'>Donnez vos avis</button>
                </div>
            </section>
        </>
    )
}

export default ReservationRestauDetails;