import { useState } from "react"
import "./CheckoutForm.css"

const CheckoutForm = ({ onConfirm }) => {
    const[name, setName] = useState("")
    const[phone, setPhone] = useState("")
    const[email, setEmail] = useState("")

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData ={
            name, phone, email
        }

        onConfirm(userData)
    }
    
    return(
        <div>
            <form onSubmit={handleConfirm} className="Form">
                <label>
                    Nombre:
                    <input
                    className="Input"
                    type="text"
                    value={name}
                    onChange={({target}) => setName(target.value)}
                    />
                </label>
                <label>
                    Telefono:
                    <input
                    className="Input"
                    type="text"
                    value={phone}
                    onChange={({target}) => setPhone(target.value)}
                    />
                </label>
                <label>
                    Email:
                    <input
                    className="Input"
                    type="text"
                    value={email}
                    onChange={({target}) => setEmail(target.value)}
                    />
                </label>
                <div>
                    <button type="submit" className="form-button">Crear Orden</button>
                </div>
            </form>
        </div>
    )
}

export default CheckoutForm