import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function AvailableProducts() {
    return (
        <>
           <div className="produits-en-stock bg-gray-300 py-10">
                <div className="container mx-auto mt-10 flex flex-col gap-4">
                    <h2 className='text-2xl lg:text-4xl font-bold text-center lg:text-start mb-4'>Les produits disponible dans notre boutique.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 lg:px-0">
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                    
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                        <Link to={"/product-details"} className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800">
                            <div className="h-24 w-28 bg-green-400"></div>
                            <span>Le nom du produit</span>
                            <small>Le nom du marché</small>
                            <small>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                                <FontAwesomeIcon icon={faStar}/>
                            </small>
                            <span>Livraison gratuite</span>
                            <span>75 €</span>
                            <button className='bg-cyan-800 text-white py-2 px-6 rounded-sm'><FontAwesomeIcon icon={faPlus}/>Ajouter</button>
                        </Link>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default AvailableProducts