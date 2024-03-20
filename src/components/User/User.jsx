import React from 'react'

import { faUser, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


function User() {
    return (
        <div>
            <section className="user-login py-10">
                <div className="container mx-auto py-10">
                    <div className="flex justify-center items-center py-10">
                        <div className="flex flex-col items-center justify-center mx-10">
                            <Link to={"/user-login"} className="text-5xl lg:text-7xl text-cyan-800 bg-cyan-50 shadow-[0_0_12px_rgba(0,0,0,0.2)] w-32 h-32 lg:h-48 lg:w-48 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faUser}/>
                            </Link>
                            <h2 className='mt-4 text-3xl font-bold text-cyan-800'>Client</h2>
                        </div>
                        <div className="flex flex-col items-center justify-center mx-10">
                            <Link to={"/partners-login"} className="text-5xl lg:text-7xl text-cyan-800 bg-cyan-50 shadow-[0_0_12px_rgba(0,0,0,0.2)] w-32 h-32 lg:h-48 lg:w-48 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon icon={faUserGroup}/>
                            </Link>
                            <h2 className='mt-4 text-3xl font-bold text-cyan-800'>Partenaire</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default User