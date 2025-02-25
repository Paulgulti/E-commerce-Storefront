import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../Store/slices/cart-slice'


const ProductTile = ({ product }) => {


  const cart = useSelector(state => state.cart)

  const dispatch = useDispatch()

  
  function handleAddToCart(){
    dispatch(addToCart(product))
  }
  
  function handleRemoveFromCart(){
    dispatch(removeFromCart(product.id))
  }


  return (
    <div>
      <div className='flex flex-col border-2 border-amber-900 p-4 gap-3 rounded-xl  mt-10 ml-5'>
        <div className=' h-[180px] w-full '>
          <img
            className=' h-full w-full object-cover '
            src={product.image}
          />
        </div>
        <div>
          <h1 className=' w-40 truncate text-lg font-bold text-gray-700 mt-3 '>{product.name}</h1>
          <h1 className=' w-40 truncate text-lg font-bold text-gray-700 mt-3 '>$ &nbsp;{product.price}</h1>
        </div>
        <div className='mt-5'>
          <button
            onClick={cart.some(item => item.id === product.id) ? handleRemoveFromCart : handleAddToCart}
            className=' bg-red-950 cursor-pointer p-4 font-bold border-2 rounded-lg text-white items-center'
          >
            {cart.some(item => item.id === product.id) ? "Remove from Cart" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductTile