import {useState, useEffect} from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { getDocs, collection, query, where} from "firebase/firestore" 
import { db } from "../../services/firebaseConfig"


const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([])

    const capturaId = useParams().categoryId;


    useEffect(() => {
        const collectionRef = capturaId
            ? query(collection(db, "items"), where("categoryId", "==", capturaId))
            :collection(db, "items")

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc =>{
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    } ,[capturaId])

    if(!products) return <h2>Cargando...</h2>

    return(
        
            <ItemList products={products}/>
    
    )
}

export default ItemListContainer