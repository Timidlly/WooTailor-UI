import React from 'react'
import Meta from '../components/Meta';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
export default function Err() {
    return (
        <>
        <Navbar/>
        <div className="errorScreen">
            <Meta title="404 | Page not found"/>
            <img src="/images/no-store.svg"/>
            <h2> The page is not found  </h2>
            <button onClick={()=>window.location.href="/"}><i className="fa fa-angle-left" aria-hidden="true"></i> Back to home page</button>
   
        
        </div>
        <div className="error-footer">

       
        <Footer/>
        </div>
        </>
    )
}
