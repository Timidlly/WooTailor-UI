import React,{useState} from 'react'
import Meta from '../components/Meta';
import Footer from '../components/Footer';



import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props'
import { GoogleLogin } from 'react-google-login';
import { GoogleID, FbID,DFBID } from '../API';
import axios from 'axios'
import {app} from '../config/firebase'

import referralCodeGenerator from 'referral-code-generator'

export default function Login(props) {
    const [loading,setLoading] = useState(false);
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const responseGoogle = (response) => {
      const name = response.profileObj.name
      const email = response.profileObj.email
      const pass ="1234%GOOGLE"

      app.auth().signInWithEmailAndPassword(email,pass).then(res=>{
        const id = app.auth().currentUser.uid
        localStorage.setItem('userid', id.toString());
        localStorage.setItem('name', name);
        window.location.href="/"
       }).catch(e=>alert(e.message))
      }



     function Data(e){
       e.preventDefault();
       setLoading(true);
       const nes= email + "@wootailor.com";
       const passt= password+'12#55'
       app.auth().signInWithEmailAndPassword(nes,passt).then(res=>{
        const id = app.auth().currentUser.uid
        app.firestore().collection('users').doc(id.toString()).get().then(res=>{
          localStorage.setItem('userid', id.toString());
          localStorage.setItem('name', res.data().name.toString());
          window.location.href="/"
        })
      
       }).catch(e=>{
         setLoading(false)
         alert(e.message)
        })
        
     }

     const responseFacebook = (response) => {
        const name = response.name;
        const email = response.id+'fb@wootailor.com';
        const pass ="1234%Facebook";

         app.auth().signInWithEmailAndPassword(email,pass).then(res=>{
          const id = app.auth().currentUser.uid
          localStorage.setItem('userid', id.toString());
          localStorage.setItem('name', name);
          window.location.href="/"
         }).catch(e=>alert(e.message))
      }


return (
        <div>
            <Meta title="Signup WOOTailor"/>
            <div className="mobile">
<div className="mobile-login" style={{paddingBottom:'23%'}} >
    <div className="above-content" style={{position:'relative', overflow:'hidden'}}>
    <i onClick={()=>window.history.back()} className="fa fa-chevron-left" aria-hidden="true"></i>

    <img onClick={()=>window.location.href="/"} src="/images/namelogo.png"/>



    </div>

    <div className="bottom-content">
   
<form>

<div className="input-fields">
    <label>Enter your name*</label>
<input placeholder="Enter your name"/>


</div>
<div className="input-fields">
    <label>Email address *</label>
<input placeholder="Email address"/>
</div>

<div className="input-fields">
    <label>Phone number *</label>
<input type="tel" placeholder="Phone number"/>
</div>
<div className="input-fields">
    <label>Referral</label>
<input  placeholder="Referral Code (optional)"/>
</div>

<div className="input-fields">
    <label>Pin *</label>
<input type="password" placeholder="****"/>


</div>

<button>Signup</button>
</form>


<div className="extras">

<p>Have an account? <a href="/login">Login</a></p>
<p className="forgot"><a href="/forgot-password">Forgot Password</a> | <a href="https://z164ncjhk6d.typeform.com/to/WIHMXjw1">Become Merchant</a> </p>

<div className="extra-login">
<div className="google">
        <img src="/google.png"/>
    </div>
    <div className="facebook">
        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"/>
    </div>

    
</div>


</div>



    </div>




</div>
<div className="error-footer" style={{position:'relative', marginTop:'54%'}}>
        <Footer/>
        </div>
            </div>
   



<div className="desktop">

<div className="desktop-login">
   <div className="first-content">
   <img onClick={()=>window.location.href="/"} src="/images/namelogo.png"/>
<p>India's 1st tailor marketplace where you can directly order from tailor. <a href="https://z164ncjhk6d.typeform.com/to/WIHMXjw1">Become Merchant </a></p>
   
   <img className="page" src="/loginPage.png"/>
   <div className="extra-login">
<div className="google">
        <img src="/google.png"/>
    </div>
    <div className="facebook">
        <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512"/>
    </div>

    
</div>

   </div>
   <div className="second-content">

     <form>

     <div className="input-fields">
    <label>Enter your name*</label>
<input placeholder="Enter your name"/>


</div>
<div className="input-fields">
    <label>Email address *</label>
<input placeholder="Email address"/>
</div>

<div className="input-fields">
    <label>Phone number *</label>
<input type="tel" placeholder="Phone number"/>
</div>
<div className="input-fields">
    <label>Referral</label>
<input  placeholder="Referral Code (optional)"/>
</div>

<div className="input-fields">
    <label>Pin *</label>
<input type="password" placeholder="****"/>


</div>

<button>Signup</button>

     </form>
     <div className="extras">

<p>Have an account? <a href="/login">Login</a></p>
<p className="forgot"><a href="/forgot-password">Forgot Password</a></p>



</div>



   </div>
</div>


</div>

        </div>
    
    )
}
