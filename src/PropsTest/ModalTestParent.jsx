import React, { useState } from 'react'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ModalTest from './ModalTest';

function ModalTestParent() {
    const [open, setOpen] = useState(false);
    return (
        <main className="App container mx-auto py-10">
            <button className="bg-red-600 px-4 py-2 text-white" onClick={()=> setOpen(true)}>
                <FontAwesomeIcon icon={faTrash}/> Delete
            </button>

            <ModalTest open={open} onClose={() => setOpen(false)}>
                <div className="text-center w-56">
                    <FontAwesomeIcon icon={faTrash} size='56' className='mx-auto text-red-600'/>
                    <div className="mx-auto my-4 w-48">
                        <h3 className='text-lg font-black text-gray-800'>Confirm delete</h3>
                        <p className="text-sm text-gray-500">
                            Êtes vous sûre de vouloir supprimer cet élément ?
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <button className="bg-red-600 text-white rounded-xl w-full py-1">Delete</button>
                        <button className="bg-white text-red-600 rounded-xl w-full py-1 shadow-xl"
                        onClick={() => setOpen(false)}>Cancel</button>
                    </div>
                </div>
            </ModalTest>
        </main>

    )
}

export default ModalTestParent