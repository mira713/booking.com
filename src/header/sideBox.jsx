export default function Sidebox(){
    let styles={
        color:"white",
        position:"absolute",
        top:"27%",
        left:"3%"
    }
    let inlineStyle={
        color:"white",
        fontSize: "25px"
    }
    let buttonStyle={
        height: "50px",
        width:"150px",
        backgroundColor:"rgb(20,100,250)",
        color:"white",
        border:"none",
        fontSize:"20px",
        marginTop:"-10px",
        textAlign:"center"
    }
    return (
        <div style={styles}>
            <p style={inlineStyle}>Available until Jan 3, 2023</p>
            <h1 style={inlineStyle} >Save 15% with Late Escape <br/> Deals</h1>
            <p style={inlineStyle}>There's still time to check one more destination off your <br/>wishlist</p>
            <button style={buttonStyle}>Explore deals</button>
        </div>
    )
}