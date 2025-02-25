import React from 'react'
import ProductTile from '../Components/product-tile';
import { faker } from '@faker-js/faker';

const Home = () => {



  faker.seed(99);

  const products = [...Array(20)].map(() => ({
    id: faker.number.int(),
    name: faker.commerce.product(),
    price: faker.commerce.price(),
    image: faker.image.url(),
    inStock: faker.helpers.arrayElement([0, 3, 5, 6, 7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
  }))


  return (
    <div className=' min-h-[80vh] grid xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-3 '>
      {
        products && products.length ?
          products.map(productItem => <ProductTile key={productItem.id} product={productItem} />)
          : null
      }
    </div>

  )
}

export default Home
