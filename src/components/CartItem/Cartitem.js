import { useContext } from 'react';
import './Cartitem.css';
import { CartContext } from '../../context/CartContext';
const CartItem = ({id, title, price, quantity}) => {
    const { removeItem } = useContext(CartContext)
    return(
        <>
            <div className="productos-carrito">
                <h2>Prodcuto: {title}</h2>
                <h4>Precio: ${price}</h4>
                <h4>Cantidad: {quantity}</h4>
                <button onClick={() => removeItem(id)} className='OptionCarrito'>X</button>
            </div>
            <br></br>
    </>
    
    )
}

export default CartItem