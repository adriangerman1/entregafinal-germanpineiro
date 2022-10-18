import { useContext, useState } from "react"
import { Context } from "../context/CardContext"

import { addDoc, collection, getFirestore, } from "firebase/firestore";
import ItemByid from "./ItemByid";

const ContatacForm = () => {

    const {card, clear,precioTotal} = useContext(Context)   

    const [id , setId ] = useState()
    
    const [form, setForm] = useState({
        name: "",
        apellido: "",
        email: "",
        message:"",
        order : card.map(prod  => ({id:prod.id, title:prod.title, price:prod.price})),
        total: precioTotal,
    })
    
    const changeHandler= (event) => {

        const newForm = {...form, [event.target.name] : event.target.value}
        setForm(newForm)

    }

    const submitHandler = (event) => {

        event.preventDefault()

        const db = getFirestore()
        const contacFormCollection = collection(db, 'orders')
        addDoc(contacFormCollection, form).then((snapshot) =>setId(snapshot.id))
        
    }

    return (
        <div>
            {typeof id !== 'undefined' ? 
            (<div>
                
                <h2 className="p-2">La compra se realizo con exito</h2>
                <h5 className="p-2">Para ver su factura ingrese el siguiente codigo: {id}</h5>
                <ItemByid />
                {clear()}
            </div>
            )
                :
            (
            <form onSubmit={submitHandler}>

                <div>
                    <label htmlFor="name">Nombre</label>
                    <input className="m-2" type="text" name="name" id="name" placeholder="Ingrese su nombre" value={form.name} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="apellido">Apellido</label>
                    <input className="m-2" type="text" name="apellido" id="apellido" placeholder="Ingrese su Apellido" value={form.apellido} onChange={changeHandler} />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input className="m-2" type="email" name="email" id="email"  placeholder="Ingrese su email" value={form.email} onChange={changeHandler}  />
                </div>

                <div>
                    <label htmlFor="message">Mensaje</label>
                    <textarea className="m-2" name="message" id="message" cols="30" rows="5" value={form.message} onChange={changeHandler}></textarea>
                </div>

                <button className="btn btn-success m-2">Enviar</button>

            </form>
            )}
            
        </div>    
    )
}

export default ContatacForm