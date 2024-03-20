import React from 'react'
import epicerieImg from '../../images/fruits.jpg'
import { faBox, faCartShopping, faHandshakeSimple, faPlateWheat, faSearch, faUtensils } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


function EpicerieStores() {
    return (
        <>
            <section className="all-epicerie-stores my-10">
                <div className="container mx-auto">
                    <div className="search-bar flex justify-center items-center mb-10">
                        <input type="search" className='border px-14 py-2 focus:outline-none focus:border-cyan-800' placeholder='Rechechez vos magasins ici...'/>
                        <button className='bg-cyan-800 py-[0.6rem] px-3 rounded-r-md text-white'><FontAwesomeIcon icon={faSearch}/></button>
                    </div>
                    <div className="stores flex flex-col gap-8">
                        <div className="boxes flex -mx-4">
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="boxes flex -mx-4">
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className="boxes flex -mx-4">
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                            <Link to={"/epicerie-store-details"} className="box w-[30rem] h-[15rem] ml-4 relative">
                                <img src={epicerieImg} className="absolute inset-0 bg-gray-700 opacity-60" alt="" />
                                <div className="flex flex-col justify-center items-center absolute top-[10%] left-[1/2] transform -translate-x-[1/2] p-2">
                                    <h1 className='text-4xl mb-4 z-10'>Nady Boutique</h1>
                                    <div className="flex flex-col justify-center items-center z-10">
                                        <span className='w-full text-center'>Spécialisée dans la vente d'accessoires de luxe.</span>
                                        <span className='text-md font-semibold mt-1'>+225 0789807498</span>
                                        <span className='text-md font-semibold mt-1'>Abidjan Côte D'Ivoire</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

{/* <div class="relative max-w-xl mx-auto mt-20">
                    <img class="h-64 w-full object-cover rounded-md" src="https://images.unsplash.com/photo-1680725779155-456faadefa26" alt="Random image"/>
                    <div class="absolute inset-0 bg-gray-700 opacity-60 rounded-md"></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                        <h2 class="text-white text-3xl font-bold">Get Lost in Mountains</h2>
                    </div>
</div> */}