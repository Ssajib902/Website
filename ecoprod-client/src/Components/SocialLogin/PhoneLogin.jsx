import React from 'react'
import { FaPhone } from 'react-icons/fa'

const PhoneLogin = () => {
  return (
    <div className='p-8 flex flex-col items-center justify-center text-center'>
                <button className="btn bg-transparent border-red-50">
                    <FaPhone className='text-center mr-2 text-black-500' />
                    Phone
                </button>
            </div>
  )
}

export default PhoneLogin