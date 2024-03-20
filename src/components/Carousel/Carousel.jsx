import { useState } from "react";

import { faChevronCircleLeft, faCircleChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function Carousel({ slides }) {
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
        <div className="overflow-hidden relative">
            <div className={`flex transition ease-out duration-40`} style={{ transform: `translateX(-${current * 100}%)`,}}>
                {slides && slides !=="" ? slides.map((slide, index) => {
                    return <img key={index} src={slide} alt=""/>;
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
        </div>
    );
}