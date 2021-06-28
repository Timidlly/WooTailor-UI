import React from 'react'
import BackNav from '../components/BackNav'
import Meta from '../components/Meta';
import Footer from '../components/Footer';
export default function FAQ(){
    return(
      <div>
      <Meta title="Frequently Asked Questions | WOOTailor"/>
          <BackNav title="Frequently Asked Questions" onClick={()=>window.history.back()}/>
<div className="page-content-back-nav">
  <p><b>What is the customer care number?</b></p>
  <ul><li>+91-9716156309</li></ul>

  <p><b>Escalation matrix :</b></p>
  <ul><li>Email: contact@wootailor.com</li><li>Email: info@wootailor.com</li><li>Email: man@wootailor.com</li><li>Call at 9716156309</li></ul>

<p><b>I want to partner with the WOOTailor.com</b></p>
<ul><li>Please call on 9716156309 and email detail at contact@wootailor.com</li></ul>

<p><b>I want to provide feedback?</b></p>
<ul><li>We welcome to our customer for their valuable feedback Plz email at contact@wootailor.com</li></ul>


<p><b>Can I edit my order?</b></p>
<ul><li>Yes you can do it by call to the tailor directly in any change of the design.</li></ul>

<p><b>Is there a minimum order value?</b></p>
<ul><li>Not yet.</li></ul>

<p><b>Do you charge delivery charges?</b></p>
<ul><li>Delivery charges may be vary from city to city.</li></ul>


<p><b>How long do you take to deliver?</b></p>
<ul><li>Generally 7 days, but it’s totally depends on shop and festival season.</li></ul>

<p><b>Do you support bulk order?</b></p>
<ul><li>Yes we do accept bulk order.</li></ul>

<p><b>I want an invoice for my order?</b></p>
<ul><li>Yes you can request for the invoice, we will provide you the same.</li></ul>
</div>
       <Footer/>
      </div>
   )
}
