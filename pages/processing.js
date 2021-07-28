import React,{useEffect} from 'react'
import {app} from '../config/firebase';


export default function Processing() {
    useEffect(()=>{
        if(localStorage.getItem('cart')){
            const data= JSON.parse(localStorage.getItem('cart'))
            app.firestore().collection('orders').add({

                 ...data

                }).then(
                 window.location.href="/orders"
                ).catch(e=>console.log(e))
            }
        },[])
    return (
        <div>
            Please wait ...
        </div>
    )
}
