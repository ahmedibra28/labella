import Image from 'next/image'
import React from 'react'

interface ItemProp {
  category: string
  item: string
  price: number
  image: string
}
const Item = ({ item }: { item: ItemProp }) => {
  return (
    <div className='card shadow-xl mx-auto bg-white text-gray-700 h-72'>
      <figure className='px-2 pt-2'>
        <Image
          src={item.image}
          alt={item.item}
          width={200}
          height={200}
          className='rounded-xl w-52 h-52 md:w-60 md:h-60 object-cover'
          quality={100}
        />
      </figure>
      <div className='card-body items-center text-center'>
        {/* <h2 className='card-title -mt-5'>{item?.item}</h2> */}
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

// const Item = ({ item }: { item: ItemProp }) => {
//   return (
//     <div className='text-gray-800 bg-gradient-to-r from-red-400 via-yellow-200 to-red-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-500 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-bold text-sm md:text-lg px-5 py-2.5 text-center mb-2 w-40 h-40 md:w-60 md:h-64 flex justify-center items-center relative mx-auto'>
//       <div className='mt-10 md:mt-28'>
//         <h3 className='md:text-lg uppercase font-bold leading-nones'>
//           {item.item}
//         </h3>
//       </div>

//       <figure className='absolute -top-14 md:-top-24 z-10 overflow-auto w-32 h-32 md:w-60 md:h-60 rounded-full shadow-2xl shadow-red-500 bg-yellow-500 hover:bg-gradient-to-br'>
//         <Image
//           src={item.image}
//           alt={item.item}
//           width={250}
//           height={250}
//           className='w-32 h-32 md:w-60 md:h-60 object-cover rounded-full shadow-2xl p-3'
//         />
//       </figure>

//       <button className='btn btn-secondary btn-xs md:btn-sm  font-bold border text-warning text-md absolute bottom-2 shadow-2xl shadow-warning'>
//         ${item.price.toFixed(2)}
//       </button>
//     </div>
//   )
// }

export default Item
