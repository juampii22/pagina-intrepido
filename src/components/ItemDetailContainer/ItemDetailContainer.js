import { useEffect } from "react"
import { useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../services/firebaseConfig"




const ItemDetailContainer = () =>{
    const [product, setProduct] = useState(null);

    const { itemId } = useParams()

    useEffect(()=> {
        const docRef = doc(db, "items", itemId)

        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data}
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    },  [itemId])

    return(
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer