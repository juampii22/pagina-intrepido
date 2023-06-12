import { Link } from "react-router-dom"

const Item = ({id, title, image, price, stock}) =>{
    return(
            <article className="CardItem">
                <header className="Header">
                    <h2 className="ItemHeader">
                        {title}
                    </h2>
                </header>
                <picture>
                    <img src={image} alt={title} className="ItemImg"/>
                </picture>
                <section className="ItemSection">
                    <p className="Info">
                        Precio: ${price}
                    </p>
                    <p className="Info">
                        Stock disponible: {stock}
                    </p>               
                </section>      
                <footer>
                    <Link to={`/item/${id}`} className="Option">Ver Detalle</Link>
                </footer>   
            </article>
    )
}

export default Item