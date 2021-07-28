import React from 'react'
import {app} from '../config/firebase';
export default function TestPayment() {

const id= app.auth().currentUser?.uid

    function PaymentInit(){
 
     const data=[{
         id:122,
         orderStatus:'pending',
         productName:'Blouse',
         productPrice:'23',
         productQty:1,
         merchantId:'12233',
         userID:id,

         options:[
             {
                 id: 1,
                 title:'Blah bha',
                 img:'https://www.instagram.com'
             }
         ]
     }]

     localStorage.setItem('cart',JSON.stringify(data))
    window.location.href="/api/payments/53/699hh9266299yyh362/hero/test@gmail.com/123456789/sdhsjdhsdjs"
 
    
    }

    return (
        <div>
            Test Payment

            <button onClick={PaymentInit}>Pay 45</button>
        </div>
    )
}
