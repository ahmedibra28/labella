import Image from 'next/image'
import React from 'react'
import BlurImage from './BlurImage'

interface ItemProp {
  category: string
  item: string
  price: number
  image: string
}
const Item = ({ item }: { item: ItemProp }) => {
  return (
    <div className='card shadow-xl mx-auto bg-white text-gray-700 h-72'>
      <figure>
        <BlurImage
          src={item.image}
          alt={item.item}
          width={500}
          height={500}
          className='rounded-xl w-72 h-72 object-contain'
        />
      </figure>
      <div className='card-body items-center text-center py-3 px-2'>
        <h3 className='md:text-lg text-sm uppercase font-bold leading-nones'>
          {item.item}
        </h3>
        <div className='card-actions'>
          <button className='btn btn-ghost bottom-1 outline-dotted btn-sm outline-secondary font-bold'>
            ${item.price.toFixed(2)}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Item
