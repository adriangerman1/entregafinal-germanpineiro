import React, { createContext, useState,useEffect } from "react"
import {getFirestore,collection,getDocs}   from 'firebase/firestore'

export const Context = createContext()

const CardContext = ({children}) => {

    const [card,setCard] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)

    const [products, setProducts] = useState([])
    
    useEffect(() =>{
        const db = getFirestore()
        const items = collection(db, 'items')
        getDocs(items).then((snapshot)  => {
            const docs = snapshot.docs.map((doc)=> ({
                id: doc.id,
                ...doc.data()
            }))
            setProducts(docs)
        })
    },[])

    const Total = () => {
        let total = 0
        card.forEach((prod) => {
            total = total + prod.price * prod.quantity
        } )
        return total
    }

    const clear =() =>{
        setCard([])
    }

    const removeItem = (itemId) =>{
        setCard(card.filter((e)=> e.id !== itemId))
    }

    const isInCart = (id) => {
        return card.find((e) => e.id === id)
    }

    const addItem = (item,quantity) => {
        const productAux = isInCart(item.id)

        if (productAux){
            const arreglo = card.filter(e => e.id !== item.id)
            item.quantity = quantity + productAux.quantity
            arreglo.push(item)
            setCard(arreglo)
        }else{
            item.quantity = quantity
            setCard([...card,item])
        }
        
    }

    return (
        <Context.Provider value={{products,card,addItem,removeItem,clear, Total, precioTotal, setPrecioTotal}}>
            {children}
        </Context.Provider>
    )

}

export default CardContext