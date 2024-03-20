import Aerien from "./Aerien";
import Maritime from "./Maritime";
import { useState } from "react";

export default function Devis() {

    const [radio, setRadio] = useState("Aerien");


    return (
        <>
            <div className="w-full py-10">
                <div>
                    <h1 className="text-center text-2xl lg:text-4xl font-bold">Envoyer votre colis maintenant.</h1>
                    <div className="flex flex-col justify-center items-center mb-10 mt-4 p-4">
                        <div className="flex flex-col justify-center items-center mb-10 gap-4 max-[680px]:flex-col">
                            <h2 className="text-xl font-semibold">Moyen de transport :</h2>
                            <div className="">
                                <div className="">
                                    <label htmlFor="">Aérien</label>
                                    <input type="radio" name="" id="" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value="Aerien"/>
                                </div>
                                <div className="">
                                    <label htmlFor="">Maritime</label>
                                    <input type="radio" name="" id="" className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" value="Maritime"/>
                                </div>
                            </div>
                        </div>
                        {radio === "Maritime" ? <Maritime/> : <></>}
                        {radio === "Aerien" ? <Aerien/> : <></>}
                    </div>
                </div>
            </div>
        </>
    );
}