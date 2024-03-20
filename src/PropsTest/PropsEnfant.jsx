import React from 'react'

function PropsEnfant({informationsPersonnelles}) {
    return (
        <>
            <div className="">
                <h1>Mes informations personnelles : </h1>
                <div className="mt-10 mb-10 flex flex-col gap-4 text-red-600 text-3xl">
                    {informationsPersonnelles && informationsPersonnelles !== "" ? informationsPersonnelles.map((data, index) =>
                        <span key={index}>Je suis {data.nom} {data.prenom} et je suis {data.boulot} web</span>
                    ) : "Aucune données !"}
                </div>
            </div>            
        </>
    )
}

export default PropsEnfant