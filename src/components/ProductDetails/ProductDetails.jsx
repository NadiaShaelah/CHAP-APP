import React from 'react'
import fruit from "../../images/fruit.jpg"
import RecommendedProducts from '../RecommendedProducts/RecommendedProducts'

function ProductDetails() {
    return (
        <>
            <section className="product-details py-10">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row -mx-4 px-4 lg:px-0">
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="w-full">
                                <img src={fruit} alt="" />
                            </div>
                            <div className="flex -mx-4 my-10">
                                <div className="px-4 w-1/4 cursor-pointer">
                                    <img src={fruit} alt="" />
                                </div>
                                <div className="px-4 w-1/4 cursor-pointer">
                                    <img src={fruit} alt="" />
                                </div>
                                <div className="px-4 w-1/4 cursor-pointer">
                                    <img src={fruit} alt="" />
                                </div>
                                <div className="px-4 w-1/4 cursor-pointer">
                                    <img src={fruit} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4">
                            <div className="flex flex-col gap-6">
                                <span className='text-slate-600'>Aliment / Fruits</span>
                                <h2 className='font-bold text-lg'>Consomez au moins 5 fruits.</h2>
                                <span className='text-xl font-bold'>13.9 €</span>
                                <div className="">
                                    <select className='p-2'>
                                        <option value="Mangue">Mangue</option>
                                        <option value="Goyave">Goyave</option>
                                        <option value="Raisin">Raisin</option>
                                        <option value="Mangoustan">Mangoustan</option>
                                        <option value="Ananas">Ananas</option>
                                    </select>
                                    <div className="flex my-10">
                                        <input type="text" className='w-14 border p-2 mr-2 focus:outline-none placeholder:text-center' placeholder='1' name="" id="" />
                                        <button className='bg-orange-300 p-2 '>Ajouter au panier</button>
                                    </div>
                                    <div className="flex flex-col">
                                        <h2 className='font-bold mb-4'>Description</h2>
                                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reprehenderit 
                                            natus ducimus veniam magnam quam ipsum, eum voluptates dolor illo sit perspiciatis 
                                            laudantium quos doloremque molestiae iste esse aliquid? Reiciendis, ab.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pour un card, juvenal utilise une div flex, pour le parent
                a l'interier duquel se trouve lenfant qui a deux div, dont div class w-1/3 et div bg-white 
                donc <div flex -mx-4><div w-1/3 px-4><div bg-white>et le contenu</div></div></div>
                il utilise un px-4 au niveau du w1/3 pour espacer les elemnts au lieu des ml-4 et vu que ça
                decal les elements par rapport au container, il utilise un -mx-4 sur le parent flex pour y remedier*/}
               
                <RecommendedProducts/>


            </section>
        </>
    )
}

export default ProductDetails