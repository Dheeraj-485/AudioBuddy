import React from 'react'
import { ProductCard } from '../components'
import { useTitle } from '../hooks/useTitle'

export const Home = () => {
  useTitle("Home")
    const products=[
   {"id":1,"name":"Sony WH-CH720N Bluetooth Wireless","price":149,"Image":"/assets/Images/1001.png"},
   {"id":1,"name":"Boat Rockerz 450 Wired Headset","price":150,"Image":"/assets/Images/1002.png"},
   {"id":1,"name":"JBL Tune 660NC ","price":200,"Image":"/assets/Images/1003.png"},
   {"id":1,"name":"Zebronics Wired Headset","price":250,"Image":"/assets/Images/1004.png"},
   {"id":1,"name":"Apple New Airpods Max Bluetooth Headset","price":500,"Image":"/assets/Images/1005.png"}

    ]
  return (
   <main>
    <section className='products'>
        {
            products.map((product)=>(
                <ProductCard  id={product.id} product={product} />
            ))
        }
{/* <ProductCard
  Img={products.Image}
  text={products.name}

/> */}
     
    </section>

   </main>
  )
}
