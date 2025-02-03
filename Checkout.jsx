import {useState} from 'react'
import Payment from './Payment'

 function Checkout()
{
    const [clicked, setClicked] = useState(false)
    function gotoPayment()
    {
        setClicked(true)
    }
    if (clicked === true)
    {
        return <Payment />
    }
    return (
        <div>
          <h3> Welcome to Checkout!</h3>
          {/* <h2>Price : {props.price} </h2> */}
          <button onClick = {gotoPayment}>
            Go to Payment
            </button>
        </div>

    )
}
export default Checkout;