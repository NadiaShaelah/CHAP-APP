import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillTransfer, faTruck, faStar } from '@fortawesome/free-solid-svg-icons'


import { Link } from 'react-router-dom';

function EpicerieMarket() {
    return (
        <div className="flex flex-col justify-between">
                        <div className="flex justify-between mb-4">
                            <h2 className="text-2xl lg:text-4xl tracking-[0.1rem] font-bold">Epicerie</h2>
                            <Link className="text-xs lg:text-sm font-bold underline" to={'/epicerie-products'}>Voir plus</Link>
                        </div>
                        <div className="flex -mx-4 overflow-x-scroll">{/**flex-wrap */}
                            <Link to={'/product-details'} className="w-full lg:w-1/5 px-4 mt-6">
                                <div className="bg-white p-4 my-4 lg:my-0 flex flex-col items-center relative">
                                    <div className="h-20 w-20 rounded-full mb-2">
                                        <img className="h-20 w-20 bg-orange-500" src={""} alt="" />
                                    </div>
                                    <h3 className="uppercase font-bold mb-2 text-xs lg:text-sm">{"nom"}</h3>
                                    <small className="bg-green-600 p-1 rounded-2xl text-white absolute -top-2 left-0 capitalize">{"Disponible"}</small>
                                    <div className="text-yellow-300 mb-2">
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <span className="text-black">0 avis</span>
                                    </div>
                                    <span className="italic text-slate-400 text-xs mb-2">Livré le 31/01/2024</span>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faTruck} />Livraison dans toute la France</span>
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faMoneyBillTransfer} />Payez en espèce</span>
                                    </div>
                                    <span className="self-end mb-2 text-xl lg:text-2xl text-red-600 font-bold">{56}€</span>
                                    <div className="w-full mt-4 flex justify-between">
                                        <Link to={'/store-details'} className="text-white font-bold bg-amber-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">Commerce</Link>
                                        <button className="text-white font-bold bg-cyan-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">+Ajouter</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/product-details'} className="w-full lg:w-1/5 px-4 mt-6">
                                <div className="bg-white p-4 my-4 lg:my-0 flex flex-col items-center relative">
                                    <div className="h-20 w-20 rounded-full mb-2">
                                        <img className="h-20 w-20 bg-orange-500" src={""} alt="" />
                                    </div>
                                    <h3 className="uppercase font-bold mb-2 text-xs lg:text-sm">{"nom"}</h3>
                                    <small className="bg-green-600 p-1 rounded-2xl text-white absolute -top-2 left-0 capitalize">{"Disponible"}</small>
                                    <div className="text-yellow-300 mb-2">
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <span className="text-black">0 avis</span>
                                    </div>
                                    <span className="italic text-slate-400 text-xs mb-2">Livré le 31/01/2024</span>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faTruck} />Livraison dans toute la France</span>
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faMoneyBillTransfer} />Payez en espèce</span>
                                    </div>
                                    <span className="self-end mb-2 text-xl lg:text-2xl text-red-600 font-bold">{56}€</span>
                                    <div className="w-full mt-4 flex justify-between">
                                        <Link to={'/store-details'} className="text-white font-bold bg-amber-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">Commerce</Link>
                                        <button className="text-white font-bold bg-cyan-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">+Ajouter</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/product-details'} className="w-full lg:w-1/5 px-4 mt-6">
                                <div className="bg-white p-4 my-4 lg:my-0 flex flex-col items-center relative">
                                    <div className="h-20 w-20 rounded-full mb-2">
                                        <img className="h-20 w-20 bg-orange-500" src={""} alt="" />
                                    </div>
                                    <h3 className="uppercase font-bold mb-2 text-xs lg:text-sm">{"nom"}</h3>
                                    <small className="bg-green-600 p-1 rounded-2xl text-white absolute -top-2 left-0 capitalize">{"Disponible"}</small>
                                    <div className="text-yellow-300 mb-2">
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <span className="text-black">0 avis</span>
                                    </div>
                                    <span className="italic text-slate-400 text-xs mb-2">Livré le 31/01/2024</span>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faTruck} />Livraison dans toute la France</span>
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faMoneyBillTransfer} />Payez en espèce</span>
                                    </div>
                                    <span className="self-end mb-2 text-xl lg:text-2xl text-red-600 font-bold">{56}€</span>
                                    <div className="w-full mt-4 flex justify-between">
                                        <Link to={'/store-details'} className="text-white font-bold bg-amber-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">Commerce</Link>
                                        <button className="text-white font-bold bg-cyan-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">+Ajouter</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/product-details'} className="w-full lg:w-1/5 px-4 mt-6">
                                <div className="bg-white p-4 my-4 lg:my-0 flex flex-col items-center relative">
                                    <div className="h-20 w-20 rounded-full mb-2">
                                        <img className="h-20 w-20 bg-orange-500" src={""} alt="" />
                                    </div>
                                    <h3 className="uppercase font-bold mb-2 text-xs lg:text-sm">{"nom"}</h3>
                                    <small className="bg-green-600 p-1 rounded-2xl text-white absolute -top-2 left-0 capitalize">{"Disponible"}</small>
                                    <div className="text-yellow-300 mb-2">
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <span className="text-black">0 avis</span>
                                    </div>
                                    <span className="italic text-slate-400 text-xs mb-2">Livré le 31/01/2024</span>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faTruck} />Livraison dans toute la France</span>
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faMoneyBillTransfer} />Payez en espèce</span>
                                    </div>
                                    <span className="self-end mb-2 text-xl lg:text-2xl text-red-600 font-bold">{56}€</span>
                                    <div className="w-full mt-4 flex justify-between">
                                        <Link to={'/store-details'} className="text-white font-bold bg-amber-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">Commerce</Link>
                                        <button className="text-white font-bold bg-cyan-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">+Ajouter</button>
                                    </div>
                                </div>
                            </Link>
                            <Link to={'/product-details'} className="w-full lg:w-1/5 px-4 mt-6">
                                <div className="bg-white p-4 my-4 lg:my-0 flex flex-col items-center relative">
                                    <div className="h-20 w-20 rounded-full mb-2">
                                        <img className="h-20 w-20 bg-orange-500" src={""} alt="" />
                                    </div>
                                    <h3 className="uppercase font-bold mb-2 text-xs lg:text-sm">{"nom"}</h3>
                                    <small className="bg-green-600 p-1 rounded-2xl text-white absolute -top-2 left-0 capitalize">{"Disponible"}</small>
                                    <div className="text-yellow-300 mb-2">
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <i className="text-xs"><FontAwesomeIcon className="mr-2" icon={faStar} /></i>
                                        <span className="text-black">0 avis</span>
                                    </div>
                                    <span className="italic text-slate-400 text-xs mb-2">Livré le 31/01/2024</span>
                                    <div className="flex flex-col mb-2">
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faTruck} />Livraison dans toute la France</span>
                                        <span className="text-slate-700 text-sm mb-2"><FontAwesomeIcon className="mr-2" icon={faMoneyBillTransfer} />Payez en espèce</span>
                                    </div>
                                    <span className="self-end mb-2 text-xl lg:text-2xl text-red-600 font-bold">{56}€</span>
                                    <div className="w-full mt-4 flex justify-between">
                                        <Link to={'/store-details'} className="text-white font-bold bg-amber-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">Commerce</Link>
                                        <button className="text-white font-bold bg-cyan-800 text-xs lg:text-[1rem] py-2 px-4 rounded-3xl">+Ajouter</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
    )
}

export default EpicerieMarket