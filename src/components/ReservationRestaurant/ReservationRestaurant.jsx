import React from 'react'
import resto from '../../images/restaurant-reservation.jpg'
import { Link } from 'react-router-dom'

function ReservationRestaurant() {
    return (
        <>
            <section className="reservation-resto py-10">
                <div className="container mx-auto">
                    <h1 className='text-center text-2xl lg:text-3xl'>Bonjour <strong className='font-bold '>{"Nom du connecté"}</strong>, soyez la bienvenue.</h1>
                    <p className='text-center font-semibold text-2xl mt-6 mb-10'>Choisissez votre restaurant ici !</p>

                    <div className="flex flex-col gap-8 lg:gap-0 lg:flex-row justify-between items-center -mx-4 my-10">
                        <div className="w-full lg:w-1/3 px-4">
                            <Link to={"/reservation-resto-details"} className='flex flex-col items-center gap-4'>
                                <h2>Le nom du restaurant</h2>
                                <div className="">
                                    <img className='w-[24rem]' src={resto} alt="" />
                                </div>
                                <span>Ouvert ou Fermé.</span>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <Link to={"/reservation-resto-details"} className='flex flex-col items-center gap-4'>
                                <h2>Le nom du restaurant</h2>
                                <div className="">
                                    <img className='w-[24rem]' src={resto} alt="" />
                                </div>
                                <span>Ouvert ou Fermé.</span>
                            </Link>
                        </div>
                        <div className="w-full lg:w-1/3 px-4">
                            <Link to={"/reservation-resto-details"} className='flex flex-col items-center gap-4'>
                                <h2>Le nom du restaurant</h2>
                                <div className="">
                                    <img className='w-[24rem]' src={resto} alt="" />
                                </div>
                                <span>Ouvert ou Fermé.</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ReservationRestaurant