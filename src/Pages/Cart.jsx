import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import CartTile from '../Components/cart-tile'

const Cart = () => {

  const cart = useSelector(state => state.cart)
  const [totalCartAmount, setTotalCartAmount] = useState(0)

  useEffect(() => {
    const total = cart.reduce((acc, curr) => { return acc + parseFloat(curr.price ) }, 0 )
    setTotalCartAmount( total.toFixed(2) )
  }, [cart])

  console.log(totalCartAmount)

  return (
    <div className='flex justify-center '>
      {cart && cart.length ? (
        <>
          <div className='min-h-[80vh]'>
            <div className=' flex flex-col justify-center max-w-6xl mx-auto  p-3 '>
              {
                cart.map(cartItem => <CartTile key={cartItem.id} cartItem={cartItem} />)
              }
            </div>
          </div>
          <div className='w-[300px] '>
            <div className=' flex flex-col justify-center items-end p-5 space-y-5 mt-14'>
              <h1 className='font-bold text-lg text-red-800'>Your Cart Summary</h1>
              <p>
                <span className='text-gray-800 font-bold'>Total Item: </span>
                <span>{cart.length}</span>
              </p>
              <p>
                <span className='text-gray-800 font-bold'>Total Amount: </span>
                <span>$ {totalCartAmount}</span>
              </p>
            </div>
          </div>
        </>
      ) : (
        <div className=" min-h-[80vh] flex flex-col justify-center items-center">
          <h1 className=' text-gray-800 font-bold mb-2 text-xl '>
            Your Cart is Empty
          </h1>
          <Link to={"/"} className=' bg-red-950 cursor-pointer p-4 font-bold border-2 rounded-lg text-white '>Shop Now</Link>
        </div>)}
    </div>
  )
}

export default Cart
