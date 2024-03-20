import React from 'react'
import ChapLogo from '../../images/chapfooter.png'

function WhoWeAre() {
    return (
        <>
            <section className="who-we-are py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col items-center px-4 lg:flex-row">
                        <div className="flex-1 w-full lg:w-1/2">
                            <h1 className='text-4xl lg:text-6xl font-bold'>Qui sommes-nous ?</h1>
                            <p className='mt-10 text-sm lg:text-lg w-full lg:w-[85%] leading-loose'>App Chap est un produit français qui a été conçu en France et développé en 
                                Côte d’Ivoire par notre partenaire RSCHAIN. Née(crée) dans l’objectif d’améliorer 
                                le quotidien des africains de la diaspora, L’App Chap propose le rapprochement de cette 
                                dernière (Diaspora) par la mise en vente de produits alimentaires, esthétiques, de vêtements et 
                                d’objet d’arts africains, tout en faisant la promotion de la diversité culinaire africaine. 
                                Chap agit ainsi comme intermédiaire entre les commerçants et les clients dans le but de booster le 
                                commerce des moyens artisans, afin d’offrir aux clients plus de choix de sorte à maximiser ses économies.
                            </p>
                        </div>
                        <div className="flex-1 w-full lg:w-1/2 flex justify-center items-center lg:-mt-16">
                            <img src={ChapLogo} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WhoWeAre