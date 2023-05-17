
import ItemCount from "../ItemCount/ItemCount"


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    

    return(
       <article className="CardDetailItem">
        <header className="HederDetail">
            <h2 className="NameHeader">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt={name} className="ItemImg"/>
        </picture>
        <section>
            <p className="Info">
                Id:{id}
            </p>
            <p className="Info">
                Categoria:{category}
            </p>
            <p className="Info">
                Descripcion: {description}
            </p>
            <b className="Info">
                Precio: ${price}
            </b>
        </section>
        <footer className="ItemFooter">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("Cantidad agregada", quantity)}/>
        </footer>
       </article>
    )
}

export default ItemDetail