import React, { useState } from 'react'
import chapLogo from '../../images/chap-logo.png'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import DropDown from '../DropDown/DropDown'

function Header() {

    const [clickOnConnexion, setClickOnConnexion] = useState(false)

    return (
        <>
            <header className='bg-white py-4'>
                <div className="flex flex-col">
                    <div className="container mx-auto">
                        <div className='flex justify-between items-center'>
                            <div className="left">
                                <img className='h-20' src={chapLogo} alt="Logo chap" />
                            </div>
                            <div className="right">
                                <Link className='ml-2 lg:ml-6 text-sm lg:text-lg text-cyan-800 transition duration-500 ease-in-out hover:text-cyan-700 transform'><FontAwesomeIcon icon={faBell}/></Link>
                                <button onClick={() => setClickOnConnexion(!clickOnConnexion)} className='relative ml-2 lg:ml-6 text-sm lg:text-lg bg-cyan-800 text-white py-2 px-4 rounded-sm transition duration-500 ease-in-out hover:bg-cyan-700 transform'>Connexion</button>
                                {clickOnConnexion && <DropDown/>}
                                <Link className='ml-2 lg:ml-6 text-sm lg:text-lg' to="/basket">Panier(18)</Link>{/**<FontAwesomeIcon icon={faBagShopping}/> */}
                            </div>
                        </div>
                    </div>
                    <nav className='bg-cyan-800 py-4'>
                        <ul className="container mx-auto">
                            <div className="flex flex-col px-4 gap-2 underline lg:no-underline lg:gap-0 lg:px-0 lg:flex-row lg:justify-between lg:items-center text-white">   
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/"}>Accueil</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/epicerie-stores"}>Epicerie</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/textile-stores"}>Textile</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/cosmetic-stores"}>Cosmétique</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/hair-dressing-stores"}>Coiffure</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/fret-stores"}>Fret</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/hair-brush-stores"}>Mèches</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/all-restaurants"}>Restaurant</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/who-we-are"}>Qui sommes-nous</Link></li>
                                <li className="transition duration-500 ease-in-out hover:font-bold transform hover:-translate-y-1 "><Link to={"/contact-us"}>Nous contacter</Link></li>
                            </div> 
                        </ul>
                    </nav>
                </div>
            </header> 
        </>
    )
}

export default Header