import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/Cartitem"

const Cart = () => {
    const {cart, clearCart, totalQuantity, total} = useContext(CartContext)
    
    if(totalQuantity === 0){
        return (
            <div className="cart">
                <h3 className="sinItems">No hay productos en su carrito</h3>
                <Link to="/" className="Option">Productos</Link>
            </div>
        )
    }

    return (
        <div className="carrito-compras">
            {cart.map(p => <CartItem key={p.id} {...p} />)}
            <h3>Total: ${total}</h3>
            <button onClick={() => clearCart()} className="Option">Limpiar Carrito</button>
            <Link to="/checkout" className="Option">Checkout</Link>
        </div>
    )
}

export default Cart;