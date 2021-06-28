
import Head from 'next/head'

const Meta = (props)=>(<>
    <Head>
        <link href="/fonts/style.css" rel="stylesheet"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <title>{props.title}</title>
        <link rel="icon" type="image/png" href={props.image} />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta property="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta property="og:image" content={props.ogimage} />
        <meta property="og:url" content={props.url} />
        <meta property="og:site_name" content={props.title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="fb:app_id" content={props.facebook} />
        <meta name="twitter:site" content={props.twitter} />
        <meta property="og:type" content={props.type} />
         <link rel="apple-touch-icon" href="./images/logo.png" />
  

        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#ff5722" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content={props.themeColor} />
 

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ERGVSMJLTF"></script>
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCzcex3Srs0aaspKYfaamZWI-Fiz_W4tss&libraries=places"></script>
    </Head>
</>)
Meta.defaultProps={
    themeColor:'#ff5722',
    type:'website',
    image:'/images/logo.png',
    ogimage:'/images/logo.png',
    Site:"WOOTailor | India's 1st Tailor Marketplace | Order Online From Your Fav Tailor",
    facebook:'924784658348026',
    twitter:'@WOOTailor',
    url:'/',
    keywords:"WOOTailor, wootailor, wootailor.com, tailor marketplace, talior online, talior online shop, India's 1st tailor market place,man thapa,book tailor online, timidlly, timidlly.com ",
    title:"WOOTailor | India's 1st Tailor Marketplace | Order Online From Your Fav Tailor",
    description:'WooTailor.com is a market place for tailor services, where from you can book the online tailoring services from your favorite tailor by seating at your place.Order online to your favorite tailor'
}
export default Meta;