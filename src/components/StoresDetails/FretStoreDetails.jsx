import React from 'react'
import fretBgImg from '../../images/livraison.avif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileWord, faGlobe, faLocationDot, faMapMarkedAlt, faPhone, faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import cityMap from '../../images/map-city.avif'
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts'
import StoreDetails from './StoreDetails'
import AvailableProducts from '../AvailableProducts/AvailableProducts'

function FretStoreDetails() {
    return (
        <>
            <section className="store-details mt-0">
                <div>
                    <img className="w-full h-[60vh] object-cover" src={fretBgImg} alt="" />
                </div>
                <div className="container mx-auto py-10">
                    <h1 className='text-6xl font-bold text-center'>African Makanaki</h1>
                    <StoreDetails/>
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

export default FretStoreDetails;