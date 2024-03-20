import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function RecommendedProducts() {
    return (
        <>
            <div className="produits-recommandes bg-white py-10">
                <div className="container mx-auto mt-10">
                    <h2 className='text-2xl lg:text-4xl font-bold text-center lg:text-start mb-4'>Les produits recommandés.</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 px-4 lg:px-0">
                        <div className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                            <div className="h-24 w-28 bg-orange-400"></div>
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
                        </div>
                        <div className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                            <div className="h-24 w-28 bg-orange-400"></div>
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
                        </div>
                        <div className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                            <div className="h-24 w-28 bg-orange-400"></div>
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
                        </div>
                        <div className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                            <div className="h-24 w-28 bg-orange-400"></div>
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
                        </div>
                        <div className="flex flex-col items-center p-6 gap-4 bg-white border-cyan-800 shadow-[0_0_12px_rgba(0,0,0,0.2)]">
                            <div className="h-24 w-28 bg-orange-400"></div>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RecommendedProducts