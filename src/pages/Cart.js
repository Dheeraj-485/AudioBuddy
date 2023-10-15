import { CartCard } from "../components"
import { useTitle } from "../hooks/useTitle"

export const  Cart=()=>{
    useTitle("Cart")
    const products=[
        {"id":1,"name":"Sony WH-CH720N Bluetooth Wireless","price":149,"Image":"assets/Images/1001.png"},
        {"id":2,"name":"Boat Rockerz 450 Wired Headset","price":150,"Image":"assets/Images/1002.png"}
    ]
    return (
        <div className="Cart">
            <h1 className="font-bold text-2xl">Cart: {products.length}</h1>
            {products.map((product)=>(
        <CartCard  key={product.id} product={product}/>
                 
            ))}
        </div>
    )
}