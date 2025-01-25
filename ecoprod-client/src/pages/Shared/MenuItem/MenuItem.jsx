import React from 'react'

const MenuItem = ({item}) => {
    const {name, image, price, recipe, category} = item;
  return (
    <>
        <div className='flex space-x-2 justify-around'>
            <img style={{borderRadius: '0 200px 200px 200px'}} className='w-[150px] h-[100px] p-3 border' src={image} alt="" />
            <div>
                <h3 className='font-bold text-xl'>{name}</h3>
                <p className='w-80'>{recipe}</p>
                {/* <p>{category}</p> */}
            </div>
            <div>
                <p className='text-orange-600 flex'><span className='font-bold'>৳</span>{price}</p>
            </div>
        </div>
    </>
  )
}

export default MenuItem