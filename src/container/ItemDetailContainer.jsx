import { useEffect, useState  } from "react";
import { useParams} from "react-router-dom"
import ItemDetail from "./ItemDetail";
import {getFirestore,doc,getDoc}   from 'firebase/firestore'

const ItemDetailContainer = () => {

    let productId = useParams();
    const [product, setProduct] = useState({})

    useEffect(() => {
        if(productId){
            const db = getFirestore()
            const item = doc(db, 'items', productId.id.trim())
            getDoc(item).then((snapshot)  => {
                if(snapshot.exists()){
                    const newProduct = {
                        id: snapshot.id,
                        ...snapshot.data(),    
                    }
                    setProduct(newProduct)
                } 
            })
        }
    },[productId])

    return(
        <div className="container-fluid">
            <ItemDetail product={product}/>
        </div>
    )

}

export default ItemDetailContainer