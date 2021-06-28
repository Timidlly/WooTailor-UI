import React from 'react'
import Meta from '../components/Meta';
import BackNav from '../components/BackNav'
export default function Profile() {
    return (
        <>
                    <Meta title="Privacy Policy | WOOTailor"/>

            <div className="mobile">
            <BackNav title="My Profile" onClick={()=>window.history.back()}/>

<div className="profile-mobile">

<div className="header-content">
   
   <div className="profile-contents">
       <div className="profile-pic">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU"/>
       </div>
       <div className="name">Sample Profile</div>
       <div className="email">sampleprofile@gmail.com</div>
   </div>
    
    </div>
<div className="footer-content">
    
    <div className="option-button">


    </div>


    
    </div>

</div>


            </div>


            <div className="desktop">
             profile
            </div>


        </>
    )
}
