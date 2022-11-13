import { MdChevronRight } from "react-icons/md";

function HotelDetail({img, name, price, detail}){
    
    let style={
        border:"3.5px solid orange",
        fontSize:"15px",
        padding: "15px",
        backgroundColor: "white",
        color:"black",
    }
    
    return (
                <div key={name} style={{display:"flex", height:"300px", width: "90%",margin:"30px auto auto auto", justifyContent:"space-around", boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px', marginTop:"30px"}}>
                    <div style={{height:"300px", width:"400px", maginTop:"60px", margin:"auto"}}>
                        <img src={img} alt={name} height="80%" width="100%" marginTop="60px"/>
                    </div>
                    <div style={{width:"50%"}}>
                        <h3>{name}</h3>
                        <p>{price}</p>
                        <p>{detail}</p>
                        <button style={style}>See Availability <MdChevronRight size={20} textAlign="center"/></button>
                    </div>
                </div>
    )
}
export default HotelDetail