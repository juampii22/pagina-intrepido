
import { useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link } from "react-router-dom"

import { CartContext } from "../../context/CartContext"
import "./ItemDetail.css"


const ItemDetail = ({id, title, image, categoryId, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded]= useState(0)

    const { addItem } = useContext(CartContext)


    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, title, price
        }

        addItem(item, quantity)
    }

    return(
       <article className="CardDetailItem">
        <header className="HederDetail">
            <h2 className="NameHeader">
                {title}
            </h2>
        </header>
        <picture>
            <img src={image} alt={title} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Id:{id}
            </p>
            <p className="Info">
                Categoria:{categoryId}
            </p>
            <p className="article-description">
                Descripcion: {description}
            </p>
            <b className="article-price">
                Precio: ${price}
            </b>
        </section>
        <footer className="ItemFooter">
            {   
                quantityAdded > 0 ? (
                    <Link to="/cart" className="article-buy-button" >Terminar Compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )

            }
        </footer>
       </article>
    )
}

export default ItemDetail