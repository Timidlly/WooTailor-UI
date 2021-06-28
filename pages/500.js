import React from 'react'
import Meta from '../components/Meta';
import Navbar from '../components/Navbar'
export default function Err() {
    return (
        <>
        <Navbar/>
        <div className="errorScreen">
            <Meta title="500 | Server Timeout"/>
            <img src="/images/no-store.svg"/>
            <h2> Server Timeout 500</h2>
            <button onClick={()=>window.location.href="/"}><i className="fa fa-angle-left" aria-hidden="true"></i> Back to home page</button>
   
        
        </div>
        <div className="error-footer">

       
<Footer/>
</div>
        </>
    )
}
