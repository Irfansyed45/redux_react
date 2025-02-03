import {useState} from 'react'
import Checkout from './Checkout'

 function Cart(){
const[clicked, setClicked] = useState(false)
function gotoCheckout()
{
    setClicked(true)
}

if(clicked === true)
{
    return <Checkout/>
}

    return (
        <div>
            <h3> Welcome to checkout </h3>
            {/* <h2> Price : {props.price}</h2> */}
            <button onClick = {gotoCheckout}>
                GO to Checkout
            </button>
        </div>
    );
}

export default Cart;