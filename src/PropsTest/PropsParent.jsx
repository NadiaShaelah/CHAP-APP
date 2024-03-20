import React from 'react'
import PropsEnfant from './PropsEnfant'
import ModalTest from './ModalTest'
import ModalTestParent from './ModalTestParent'

function PropsParent() {

    const informationsPersonnelles = [
        {nom : "Nady", prenom : "Shaélah", boulot : "Dev"}
    ]

    return (
        <>
            <div className="">
                <PropsEnfant informationsPersonnelles={informationsPersonnelles}/>
                <ModalTestParent/>
            </div>
        </>
    )
}

export default PropsParent