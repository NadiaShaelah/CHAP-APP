import React from 'react'

import { Link } from 'react-router-dom'
import CosmeticImg from "../../images/creme-naturelle.jpg"

function Cosmetique() {
    return (
        <>
            <section className="cosmetic bg-white py-4">
                <div className="cosmetic-market flex flex-col px-4 lg:px-0">
                    <div className="header flex justify-between items-center py-10">
                        <h2 className='font-bold text-2xl lg:text-3xl'>Cosmétique</h2>
                        <Link to={"/cosmetic-stores"} className='text-xs font-semibold underline'>Voir plus</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        <Link to={"/cosmetic-store-details"} className="box">
                            <div className='bg-white text-slate-600 border flex flex-col justify-center items-center'>
                                <img src={CosmeticImg} alt=""/>
                                <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                        </Link>
                        <Link to={"/cosmetic-store-details"} className="box">
                            <div className='bg-white text-slate-600 border flex flex-col justify-center items-center'>
                                <img src={CosmeticImg} alt=""/>
                                <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                        </Link>
                        <Link to={"/cosmetic-store-details"} className="box">
                            <div className='bg-white text-slate-600 border flex flex-col justify-center items-center'>
                                <img src={CosmeticImg} alt=""/>
                                <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                        </Link>
                        <Link to={"/cosmetic-store-details"} className="box">
                            <div className='bg-white text-slate-600 border flex flex-col justify-center items-center'>
                                <img src={CosmeticImg} alt=""/>
                                <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                        </Link>
                        <Link to={"/cosmetic-store-details"} className="box">
                            <div className='bg-white text-slate-600 border flex flex-col justify-center items-center'>
                                <img src={CosmeticImg} alt=""/>
                                <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                                <span>Lorem, ipsum dolor.</span>
                            </div>
                        </Link>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Cosmetique