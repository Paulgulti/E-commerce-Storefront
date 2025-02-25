import React from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '../../Store/slices/cart-slice'

const CartTile = ({ cartItem }) => {

  console.log(cartItem)

  const dispatch = useDispatch()

  function handleRemoveFromCart(){
    dispatch(removeFromCart(cartItem.id))
  }

  return (
    <>
      <div className=' md:flex items-center justify-between  bg-red-500 p-5 mt-2 mb-2 rounded-xl'>
        <div className=' md:flex p-3 '>
          <img
            src={cartItem.image}
            className=' h-28 w-30 object-cover rounded-lg'
          />
          <div className='md:ml-8 self-start md:space-y-5'>
            <h1 className='text-xl text-white font-bold'>{cartItem.name}</h1>
            <p className='text-white font-extrabold'>$ {cartItem.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className=' bg-red-950 cursor-pointer p-4 font-bold rounded-lg text-white '
          >
          Remove from Cart
          </button>
        </div>
      </div>
    </>
  )
}

export default CartTile
