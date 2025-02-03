import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import  {upadteWallet} from '../store'

 export default function Payment()
 {
   const [clicked, setClicked] = useState(false)
   const user = useSelector(state => state.user)
   const dispatch = useDispatch();
   function handleOnClick(){
      setClicked(true)
      dispatch(upadteWallet(1000))
   }

   if(clicked)
   {
      return(
         <>
         <Payment />
         <h4> updated wallet : {user.wallet} </h4>
         </>
      )
   }
    return(
        <div>
           <h3> Welcome to Payment component! </h3>
           {/* <h2> Price : {props.price} </h2> */}


           <h2>intial wallet : {user.wallet}</h2>
           <button onClick = {handleOnClick}>Pay 1000 </button>
        </div>
    )
 }