import React from 'react'
import BackNav from '../components/BackNav'
import Meta from '../components/Meta';
import Footer from '../components/Footer';

export default function About(){
    return(
      <div>
      <Meta title="About | WOOTailor"/>
          <BackNav title="About WOOTailor" onClick={()=>window.history.back()}/>
<div className="page-content-back-nav">
 <p>We have started a wootailor.com with a vision to give the stitching services to customers to their home and any other place where they like. Customer have to choose across various tailors and boutique available in their region where from they wants to take service or they are taking services since long time. We give a comfort of fabric stitching services from there favorite tailor online. Now every customer favorite tailor is ready to accept the online stitching services, all this make possible by us WOOTailor.com WooTailor.com is a market place for the Tailor, fashion designers and Boutique, Where from customer can book the online tailoring services from their favorite tailor by seating at their own place."This has been started by the Managing Director Miss. Geeta Devi with the support of CEO Man Bahadur Thapa with an idea to provide the tailor servicing to customer at home from there favorite tailor. Customer can choose the boutique/tailor from different points of view like by price, By rating, By customer feedback, By delivery time, By distance, By specialty, by alteration ratio etc.</p>
<p><b>How we work :</b></p>

<ul><li>Visit at www.WooTailor.com</li><li>Choose Your Favorite Tailor from list.</li><li>Choose your customized design for stitching.</li><li>Choose how you want to give measurement:</li><li>Choose the available time slot for the visit of our specialist for the measurement or for the pickup.</li><li>Rider will pick up the fabric and give it to the chosen tailor by you and the stitching will be done by your favorite Tailor master.</li><li>Our rider will deliver the stitched fabric to your desire location.</li><li>In case of any alteration required, just relax and raise the alteration request on wootailor.com, we will take care after that and provide the solution at the earliest.</li></ul>

<p><b>Pricing</b></p>
<ul>
  <li>The pricing of the stitching and the fabric is depend on boutique to boutique. The price of the fabric, dress and the stitching service is decided by the boutique itself. So please check the pricing of the individual boutique for the exact pricing for your product/services.</li>
</ul>


</div>
       <Footer/>
      </div>
    )
}
