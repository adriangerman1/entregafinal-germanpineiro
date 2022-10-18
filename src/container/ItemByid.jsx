import { getDoc, getFirestore,doc } from "firebase/firestore"
import { useEffect, useState } from "react"


const ItemByid = () => {

    const [id, setId] = useState('')

    const [product, setProduct] = useState({})

    const inputChangeHandler = (ev) => {
        setId(ev.target.value)
    }

    useEffect(() =>{
        if (id){
            const db= getFirestore()
            const itemRef = doc(db, 'orders', id.trim())

            getDoc(itemRef).then((snapshot) => {
                if(snapshot.exists){
                    const newProduct ={
                        id: snapshot.id,
                        ...snapshot.data(),
                    }
                    setProduct(newProduct)
                }
            })
        }
        

    },[id])

    return (
        <div>
            <h2 className="m-2">Consulta tu recibo de compra</h2>
            <label htmlFor="codigo">Ingrese el codigo</label>
            <input name="codigo" className="m-2" onChange={inputChangeHandler} value={id} />
            <h5>Titular: {product.name}</h5>
            <h5>Precio : ${product.total}</h5>
        </div>
    )

}

export default ItemByid