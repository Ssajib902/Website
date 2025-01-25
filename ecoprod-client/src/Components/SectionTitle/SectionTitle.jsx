import React from 'react'

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <>
            <div className='mx-auto text-center w-full md:w-1/2 my-8'>
                <p className='text-orange-600 mb-2'>{subHeading}</p>
                <h3 className='text-3xl text-center uppercase border-y-4 p-4 font-bold text-orange-600'>{heading}</h3>
            </div>
        </>
    )
}

export default SectionTitle