import Navbar from "./header/navbar.jsx"
import NavFoot from "./header/navbarFooter.jsx"
import Side from "./header/sideBox.jsx"
import SearchInput from "./header/searchInput.jsx"

export default function Head(){
    let styles={
        height:"90%",
        width:"100%",
        position:"absolute",
        top:"0px",
        left:"0px",
        backgroundColor:"rgba(0,0,0,.4)"
    }
   
    return(
        
        <div>
            <div style={styles}></div>
            <div autoPlay  loop>
            <video style={{height:"100%", width:"100%"}}src='https://t-cf.bstatic.com/video/WebcorePromoHeroAssets/DesktopHero/Hero_Desktop_2MB.mp4' type="mp4" autoPlay="autoplay" loop muted/>
            </div>
            <Navbar/>
          <NavFoot/>
           <Side/>
           <SearchInput/>  
        </div>
    )
}