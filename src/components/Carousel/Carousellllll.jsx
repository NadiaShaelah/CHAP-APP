import { faChevronCircleLeft, faCircleChevronLeft, faCircleChevronRight, faPlus, faSubtract } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

export default function Carousel() {
    
    const slides = [
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2FabjPars.png?alt=media&token=c037631d-b5d7-47e8-b844-beb8b7fdca71",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slide%2FBakery.png?alt=media&token=574eecdf-7fc8-449f-a8d0-e5f9e14f9325",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slide%2FMicrosoftTeams-image1.png?alt=media&token=58788349-42b9-4b70-ae4e-6de227c5cb04",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F3.png?alt=media&token=e5393663-2adf-4ea1-96be-a097839ec561",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F4.png?alt=media&token=7eaa7ac6-28cb-4d7b-877f-e2014116b87a",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F5.png?alt=media&token=513878-493e-4457-b4e4-f4217d7fba8c",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F7.png?alt=media&token=9938ab34-a4eb-4fa5-9527-d1e741f048c3",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F1.png?alt=media&token=b6f83978-875d-429f-88ab-1dd2d962b49e",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F2.png?alt=media&token=caa391bd-bffb-491f-9679-a655d3fee05f",
        "https://firebasestorage.googleapis.com/v0/b/appchapfinal.appspot.com/o/slider%2F6.png?alt=media&token=11b0ef49-fc5e-44bd-b104-bb750053d133"
    ];
    // export default function Carousel({ slides }) {
    let [current, setCurrent] = useState(0);

    let previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    let nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    return (
        <div className='w-[80%] mx-auto'>{/* bg-orange-200 */}
            <div className="overflow-hidden relative">
                <div className={`flex transition ease-out duration-40`} style={{ transform: `translateX(-${current * 100}%)`,}}>
                    {slides && slides !== "" ? slides.map((slide, index) => {
                        return <img className='w-full h-[40rem]' key={index} src={slide} alt="Slide images"/>;
                    }):<p>Cool</p>}
                </div>

                <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                    <button onClick={previousSlide}>
                        <FontAwesomeIcon className="text-cyan-800" icon={faChevronCircleLeft} />
                    </button>
                    <button onClick={nextSlide}>
                        <FontAwesomeIcon className="text-cyan-800" icon={faCircleChevronRight} />
                    </button>
                </div>

                {/* <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {slides.map((s, i) => {
                        return (
                            <div onClick={() => { setCurrent(i)}} key={"circle" + i} className={`rounded-full cursor-pointer  ${ i === current ? "bg-white" : "bg-gray-500" }`}></div>
                        );
                    })}
                </div> */}
            </div>
        </div>

    );
}

// function Carousel() {



//     return (
//         <div className='w-[60%] h-[400px] bg-orange-200 mx-auto'>
            
//         </div>
//     )
// }

// export default Carousel