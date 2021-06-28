import React,{useState} from 'react'
import Meta from '../components/Meta';
import TextField from '@material-ui/core/TextField';
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
            <Meta title="Login WOOTailor"/>
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



<div className="input-fields">
    <label>Pin *</label>
<input placeholder="****"/>


</div>

<button>Login</button>
</form>


<div className="extras">

<p>Don't have an account? <a href="/signup">Signup</a></p>
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
<div className="error-footer">
        <Footer/>
        </div>
            </div>
   



<div className="desktop">

<div className="desktop-login">
   <div className="first-content">
   <img onClick={()=>window.location.href="/"} src="/images/namelogo.png"/>
<p>India's 1st tailor marketplace where you can directly order from tailor. <a href="https://z164ncjhk6d.typeform.com/to/WIHMXjw1">Become Merchant </a></p>
   
   <img className="page" src="/loginPage.png"/>
   </div>
   <div className="second-content">

     <form>
     <div className="input-fields">
    <label>Phone number or email address *</label>
<input placeholder="Phone number or email address"/>


</div> 

<div className="input-fields">
    <label>Pin *</label>
<input placeholder="4 Digit pin"/>


</div> 

<button>Login</button>

     </form>
     <div className="extras">

<p>Don't have an account? <a href="/signup">Signup</a></p>
<p className="forgot"><a href="/forgot-password">Forgot Password</a></p>

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


</div>

        </div>
    
    )
}
