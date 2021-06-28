import Navbar from '../components/Navbar';
import Meta from '../components/Meta';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
export default function Page(props){
    return(
        <>
            <Meta title="Search Tailors | WOOTailor  "/>
     <Navbar visible={true} mobile="sjdjsj" desktop="desktop"/>

<div className="mobile">

<div className="search-container">
{/* <h2>Popular Tailors</h2>  */}
<div className="mobile-slider">
<img src="https://www.heddels.com/wp-content/uploads/2019/11/how-to-find-a-tailor.jpg"/>
</div>

<div className="merchant-list">

<h2>Popular Tailors</h2>
<p>Here you can find your popular tailors</p>

<div className="merchant-card">
 <div>
    <div className="merchant-title">Sample Merchant Store</div>
  
    <div className="merchant-location"><i className="fa fa-map-marker" aria-hidden="true"></i> sample location</div>
    <div className="merchant-location merchant-ratings"><i className="fa fa-star" aria-hidden="true"></i> 4.4</div>
    </div>
    <div className="merchant-store-image">
    <img src="https://imgmedia.lbb.in/media/2018/07/5b4466ee235c4e012db6c3fe_1531209454277.jpg"/>
</div>

</div>

<div className="merchant-card">
 <div>
    <div className="merchant-title">Sample Merchant Store</div>
  
    <div className="merchant-location"><i className="fa fa-map-marker" aria-hidden="true"></i> sample location</div>
    <div className="merchant-location merchant-ratings"><i className="fa fa-star" aria-hidden="true"></i> 4.4</div>
    </div>
    <div className="merchant-store-image">
    <img src="https://imgmedia.lbb.in/media/2018/07/5b4466ee235c4e012db6c3fe_1531209454277.jpg"/>
</div>

</div>
<div className="merchant-card">
 <div>
    <div className="merchant-title">Sample Merchant Store</div>
  
    <div className="merchant-location"><i className="fa fa-map-marker" aria-hidden="true"></i> sample location</div>
    <div className="merchant-location merchant-ratings"><i className="fa fa-star" aria-hidden="true"></i> 4.4</div>
    </div>
    <div className="merchant-store-image">
    <img src="https://imgmedia.lbb.in/media/2018/07/5b4466ee235c4e012db6c3fe_1531209454277.jpg"/>
</div>

</div>



<div className="merchant-card">
 <div>
    <div className="merchant-title">Sample Merchant Store</div>
  
    <div className="merchant-location"><i className="fa fa-map-marker" aria-hidden="true"></i> sample location</div>
    <div className="merchant-location merchant-ratings"><i className="fa fa-star" aria-hidden="true"></i> 4.4</div>
    </div>
    <div className="merchant-store-image">
    <img src="https://imgmedia.lbb.in/media/2018/07/5b4466ee235c4e012db6c3fe_1531209454277.jpg"/>
</div>

</div>



<div className="merchant-card">
 <div>
    <div className="merchant-title">Sample Merchant Store</div>
  
    <div className="merchant-location"><i className="fa fa-map-marker" aria-hidden="true"></i> sample location</div>
    <div className="merchant-location merchant-ratings"><i className="fa fa-star" aria-hidden="true"></i> 4.4</div>
    </div>
    <div className="merchant-store-image">
    <img src="https://imgmedia.lbb.in/media/2018/07/5b4466ee235c4e012db6c3fe_1531209454277.jpg"/>
</div>

</div>



</div>



</div>


</div>




        </>
    )
}
