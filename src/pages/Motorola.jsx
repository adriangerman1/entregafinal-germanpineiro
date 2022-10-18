import {useState,useEffect } from "react"
import Item from "../container/Item"
import {getFirestore,collection,getDocs,query,where}   from 'firebase/firestore'

const Motorola = () =>{

    const [product, setProduct] = useState([])

    const Category = 'Motorola'
    
        useEffect(() =>{
            const db = getFirestore()
            const items = collection(db, 'items')
            const q = query(items, where('trademark', '==', Category))
            getDocs(q).then((snapshot)  => {
                const docs = snapshot.docs.map((doc)=> ({
                    id: doc.id,
                    ...doc.data()
                }))
                setProduct(docs)
            })
        },[Category])
    
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

export default Motorola
