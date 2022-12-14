import {getFirestore,collection,getDocs,query,where}   from 'firebase/firestore'
import { useState,useEffect,} from "react"
import { useParams } from 'react-router-dom';
import Item from "../container/Item"

const CategoryPhones = () => {

    let productId = useParams();

    const [product, setProduct] = useState([])

        useEffect(() =>{
            const db = getFirestore()
            const items = collection(db, 'items')
            const q = query(items, where('trademark', '==', productId.idCategory))
            getDocs(q).then((snapshot)  => {
                const docs = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProduct(docs)
            })
        },[productId])
        
    
    return (

        <div className="container-fluid" >
            <div className="row">
                {product.map((products) => (

                    <div className="col-md-3">
                        <Item product={products}/>
                    </div>
                    
                ))}
            </div>
        </div>
    )

}

export default CategoryPhones