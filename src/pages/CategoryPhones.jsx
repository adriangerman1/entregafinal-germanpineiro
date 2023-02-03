import {getFirestore,collection,getDocs,query,where}   from 'firebase/firestore'
import { useState,useEffect,} from "react"
import { useParams } from 'react-router-dom';
import Item from "../container/Item"

const CategoryPhones = () => {

    let productId = useParams();

    const [product, setProduct] = useState([])
    const [ordenes , setOrdenes] = useState({})

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
        
        
        useEffect(() =>{

            // const firestore = firebase.firestore()

            // firestore.settings({ timestamosInSnapshots: true })

            const firestore = getFirestore()

            const col = collection(firestore,'orders')

            // const query= col.where('order' , 'array-contains')
            const querys = query(col, where('order' , 'array-contains', 'title'))

            getDocs(querys).then(snapshot =>{
                const docu = snapshot.docs.forEach(doc =>({
                    // console.log(doc.id, doc.data())
                    id : doc.id,
                    ...doc.data()
                }))
                setOrdenes(docu)
            })

        },[])

        // console.log(ordenes)
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