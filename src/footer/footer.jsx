import style from "./footer.module.css";

export default function Footer(){
    let main={
        backgroundColor:"rgb(15,15,123)",
        height:"auto",
        width:"100%",
        color:"white"
    }

    let flex={
        display:"flex",
        justifyContent:"space-around"
    }
    return(
        <>
        <div style={main}>
            <div style={{height:"100%", width:"90%", margin:"auto"}}>
                <div style={flex}>
                    <div style={{arginTop:"-100%"}}>
                        <p style={{fontSize:"14px", color:"white"}}>Countries</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Region</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Cities</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Districts</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Airports</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Hotel</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Places and interest</p>  
                    </div>
                    <div>
                        <p style={{fontSize:"14px", color:"white"}}>Home</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Apartments</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Resorts</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Villas</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Hotels</p>  
                        <p style={{fontSize:"14px", color:"white"}}>B&Bs</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Guest houses</p>  
                    </div>
                    <div>
                        <p style={{fontSize:"14px", color:"white"}}>Unique places to stay</p>  
                        <p style={{fontSize:"14px", color:"white"}}>All destinations</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Discover</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Reviews</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Discover monthly stays</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Unpacked: Travel articles</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Travel Communities</p>
                        <p style={{fontSize:"14px", color:"white"}}>Seasonal and holiday deals</p>  
                    </div>
                    <div>
                        <p style={{fontSize:"14px", color:"white"}}>Car hire</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Flight finder</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Restaurant reservations</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Booking.com for Travel Agents</p>  
                    </div>
                    <div>
                        <p style={{fontSize:"14px", color:"white"}}>Coronavirus (COVID-19) FAQs</p>  
                        <p style={{fontSize:"14px", color:"white"}}>About Booking.com</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Customer Service help</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Reviews</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Partner help</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Careers</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Sustainability</p>
                        <p style={{fontSize:"14px", color:"white"}}>Press centre</p>
                        <p style={{fontSize:"14px", color:"white"}}>Safety resource centre</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Investor relations</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Terms & Conditions</p>
                        <p style={{fontSize:"14px", color:"white"}}>Partner dispute</p>  
                        <p style={{fontSize:"14px", color:"white"}}>How we work</p>  
                        <p style={{fontSize:"14px", color:"white"}}>Privacy & Cookie Statement</p>
                        <p style={{fontSize:"14px", color:"white"}}>MSA Statement</p> 
                        <p style={{fontSize:"14px", color:"white"}}>Corporate contact</p>  
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
