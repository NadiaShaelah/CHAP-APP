import { faBox, faCartShopping, faHandshakeSimple, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Carousel from '../Carousel/Carousel'
import Epicerie from '../AllMarketCategories/Epicerie'
import Cosmetique from '../AllMarketCategories/Cosmetique'
import Textile from '../AllMarketCategories/Textile'

function HomPage() {
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    const slides = [
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2FabjPars.png?alt=media&token=c037631d-b5d7-47e8-b844-beb8b7fdca71",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slide%2FBakery.png?alt=media&token=574eecdf-7fc8-449f-a8d0-e5f9e14f9325",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slide%2FMicrosoftTeams-image1.png?alt=media&token=58788349-42b9-4b70-ae4e-6de227c5cb04",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F3.png?alt=media&token=e5393663-2adf-4ea1-96be-a097839ec561",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F4.png?alt=media&token=7eaa7ac6-28cb-4d7b-877f-e2014116b87a",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F5.png?alt=media&token=513878-493e-4457-b4e4-f4217d7fba8c",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F7.png?alt=media&token=9938ab34-a4eb-4fa5-9527-d1e741f048c3",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F1.png?alt=media&token=b6f83978-875d-429f-88ab-1dd2d962b49e",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F2.png?alt=media&token=caa391bd-bffb-491f-9679-a655d3fee05f",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F6.png?alt=media&token=11b0ef49-fc5e-44bd-b104-bb750053d133"
    ];

    return (
        <>
            {/* <Carousel/> */}
            <div className='container mx-auto flex justify-center items-center'>
                <div className="w-full px-4 lg:px-0">
                    <Carousel slides={slides} />
                </div>
            </div>
            <section className="home-menu-section bg-white py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col gap-4 px-4 justify-between items-center -mx-4 lg:px-0 lg:gap-0 lg:flex-row">
                        <Link to={"/reservation-resto"} className='w-full lg:w-1/4 px-4'>
                            <div className="bg-white py-4 flex flex-col justify-center items-center transition duration-500 ease-in-out hover:text-cyan-800 transform hover:-translate-y-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                                <span><FontAwesomeIcon className='size-10' icon={faUtensils} /></span>
                                <h2 className='font-bold'>RESERVER</h2>
                                <span>Une table</span>
                            </div>
                        </Link>
                        <Link to={'/courses-africaines'} className='w-full lg:w-1/4 px-4'>
                            <div className="bg-white py-4 flex flex-col justify-center items-center transition duration-500 ease-in-out hover:text-cyan-800 transform hover:-translate-y-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                                <span><FontAwesomeIcon className='size-10' icon={faCartShopping}/></span>
                                <h2 className='font-bold'>COURSES</h2>
                                <span>Africaines</span>
                            </div>
                        </Link>
                        <Link to={"/devis"} className='w-full lg:w-1/4 px-4'>
                            <div className="bg-white py-4 flex flex-col justify-center items-center transition duration-500 ease-in-out hover:text-cyan-800 transform hover:-translate-y-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                                <span><FontAwesomeIcon className='size-10' icon={faBox}/></span>
                                <h2 className='font-bold'>ENVOYEZ</h2>
                                <span>Vers l'afrique</span>
                            </div>
                        </Link>
                        <Link to={'/partners'} className='w-full lg:w-1/4 px-4'>
                            <div className="bg-white py-4 flex flex-col justify-center items-center transition duration-500 ease-in-out hover:text-cyan-800 transform hover:-translate-y-1 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                                <span><FontAwesomeIcon className='size-10' icon={faHandshakeSimple}/></span>
                                <h2 className='font-bold'>PARTENAIRES</h2>
                                <span>Rejoinez-nous</span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="all-stores-section bg-white py-10">
                <div className="container mx-auto">
                    <h1 className='text-2xl lg:text-4xl font-bold'>Nos marchés</h1>
                    <div className="all-market flex flex-col">
                        <Epicerie/>
                        <Cosmetique/>
                        <Textile/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomPage