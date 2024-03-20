import React from 'react'
import { Link } from 'react-router-dom'
import TextileImg from "../../images/textile-tissus.jpg"

function Textile() {
  return (
    <>
        <section className="textile bg-white py-4">
            <div className="textile-market flex flex-col px-4 lg:px-0">
                <div className="header flex justify-between items-center py-10">
                    <h2 className='font-bold text-2xl lg:text-3xl'>Textile</h2>
                    <Link to={"/textile-stores"} className='text-xs font-semibold underline'>Voir plus</Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                    <Link to={"/textile-store-details"} className="box">
                        <div className="bg-gray-500 text-white flex flex-col justify-center items-center border">
                            <img src={TextileImg} alt=""/>
                            <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </Link>
                    <Link to={"/textile-store-details"} className="box">
                        <div className="bg-gray-500 text-white flex flex-col justify-center items-center border">
                            <img src={TextileImg} alt=""/>
                            <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </Link>
                    <Link to={"/textile-store-details"} className="box">
                        <div className="bg-gray-500 text-white flex flex-col justify-center items-center border">
                            <img src={TextileImg} alt=""/>
                            <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </Link>
                    <Link to={"/textile-store-details"} className="box">
                        <div className="bg-gray-500 text-white flex flex-col justify-center items-center border">
                            <img src={TextileImg} alt=""/>
                            <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
                            <span>Lorem, ipsum dolor.</span>
                        </div>
                    </Link>
                    <Link to={"/textile-store-details"} className="box">
                        <div className="bg-gray-500 text-white flex flex-col justify-center items-center border">

                            <img src={TextileImg} alt=""/>
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

export default Textile