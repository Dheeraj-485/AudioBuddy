import "./CartCard.css"

export const CartCard = ({product}) => {
  const {name,Image,price}=product
  return (
    
      <div className="cartCard">
        <img src={Image} alt={name}/>
        <p className="productName">{name}</p>
          
            <p className="productPrice">${price}</p>
            <button>Remove</button>
          
      </div>

  )
}

