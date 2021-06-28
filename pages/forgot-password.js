import React from 'react'
import Meta from '../components/Meta';
import Footer from '../components/Footer';

export default function ForgotPassword() {
    return (
        <div>
            <Meta title="Forgot Password | WOOTailor"/>
            
            <div className="mobile">
<div className="mobile-login">
    <div className="above-content">
    <i onClick={()=>window.history.back()} className="fa fa-chevron-left" aria-hidden="true"></i>

    <img onClick={()=>window.location.href="/"} src="/images/namelogo.png"/>



    </div>

    <div className="bottom-content">
   
<form>
<div className="input-fields">
    <label>Phone number or email address *</label>
<input placeholder="Phone number or email address"/>


</div>





<button style={{fontSize:12}}>Send Rest Link</button>
</form>




    </div>




</div>
<div className="error-footer">
        <Footer/>
        </div>
            </div>
   




            <div className="desktop">

<div className="desktop-login">
   <div className="first-content" style={{marginTop:'-6%'}}>
   <img onClick={()=>window.location.href="/"} src="/images/namelogo.png"/>
<p>India's 1st tailor marketplace where you can directly order from tailor. <a href="https://z164ncjhk6d.typeform.com/to/WIHMXjw1">Become Merchant </a></p>
   
   <img className="page" src="/loginPage.png"/>
   </div>
   <div className="second-content" >

     <form>
     <div className="input-fields">
    <label>Phone number or email address *</label>
<input placeholder="Phone number or email address"/>


</div> 



<button style={{width:'43%'}}>Send Rest Link</button>

     </form>




   </div>
</div>


</div>

   
        </div>
    )
}
