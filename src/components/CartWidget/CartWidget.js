import { useContext} from "react"
import cart from "./assets/cart.svg"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"

const  CarWidget = () =>{
    const { totalQuantity } = useContext(CartContext)

    return(
        <Link to="/cart" className="carrito" >
            <img className="cart-whidget" src={cart} alt="cart.widget"/>
            <span className="numeroCarrito">{ totalQuantity }</span>
        </Link>
    )
}

export default CarWidget