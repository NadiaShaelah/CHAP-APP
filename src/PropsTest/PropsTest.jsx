import React from 'react'
import PropsParent from './PropsParent'

function PropsTest() {
    return (
        <div>
            <PropsParent/>
        </div>
    )
}

export default PropsTest



// import React from 'react'
// import { faBox, faCartShopping, faHandshakeSimple, faPlateWheat, faSearch, faUtensils } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// import { Link } from 'react-router-dom'
// import Carousel from '../Carousel/Carousel'
// import Carton1 from '../../images/carton-1.png'
// import Carton2 from '../../images/carton-2.png'
// import Carton3 from '../../images/carton-3.png'
// import Carton4 from '../../images/carton-4.png'
// import Carton5 from '../../images/carton-5.png'
// function Epicerie() {
//   return (
//     <>
//         <section className="epicerie bg-white py-4">
//             <div className="epicerie-market flex flex-col px-4 lg:px-0">
//                 <div className="header flex justify-between items-center py-10">
//                     <h2 className='font-bold text-xl lg:text-2xl'>Epicerie</h2>
//                     <Link to={"/epicerie-stores"} className='text-xs font-semibold underline'>Voir plus</Link>
//                 </div>
//                 <div className="flex -mx-4 overflow-x-scroll">
//                     <Link to={"/epicerie-store-details"} className="box w-full lg:w-1/5 px-4">
//                         <div className="bg-white flex flex-col justify-center items-center border">
//                             <img src={Carton1} alt=""/>
//                             <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
//                             <span>Lorem, ipsum dolor.</span>
//                         </div>
//                     </Link>
//                     <Link to={"/epicerie-store-details"} className="box w-full lg:w-1/5 px-4">
//                         <div className="bg-white flex flex-col justify-center items-center border">
//                             <img src={Carton2} alt=""/>
//                             <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
//                             <span>Lorem, ipsum dolor.</span>
//                         </div>
//                     </Link>
//                     <Link to={"/epicerie-store-details"} className="box w-full lg:w-1/5 px-4">
//                         <div className="bg-white flex flex-col justify-center items-center border">
//                             <img src={Carton3} alt=""/>
//                             <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
//                             <span>Lorem, ipsum dolor.</span>
//                         </div>
//                     </Link>
//                     <Link to={"/epicerie-store-details"} className="box w-full lg:w-1/5 px-4">
//                         <div className="bg-white flex flex-col justify-center items-center border">
//                             <img src={Carton4} alt=""/>
//                             <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
//                             <span>Lorem, ipsum dolor.</span>
//                         </div>
//                     </Link>
//                     <Link to={"/epicerie-store-details"} className="box w-full lg:w-1/5 px-4">
//                         <div className="bg-white flex flex-col justify-center items-center border">
//                             <img src={Carton5} alt=""/>
//                             <span className='text-center'>Lorem ipsum dolor sit amet consectetur.</span>
//                             <span>Lorem, ipsum dolor.</span>
//                         </div>
//                     </Link>
//                 </div>
//             </div>
//         </section>
//     </>
//   )
// }

// export default Epicerie