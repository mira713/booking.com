import { HStack,Box ,Img,Text,VStack} from '@chakra-ui/react'
import style from "./style.module.css"
import Zoom from "./zoomPic.jsx"
import Scroll from "./scrolling.jsx"
export default function Body(){
    let buttonStyle={
        height: "50px",
        width:"160px",
        backgroundColor:"rgb(40,100,220)",
        color:"white",
        border:"none",
        fontSize:"15px",
        marginTop:"-5px",
        textAlign:"center"
    }

    let mainStyle={
        margin:"5%",
        alignItems: "center"
    }

    return(
        <div>
            <div className="mainDiv" style={mainStyle}>

                           {/* Offers heading with two divs */}
                <h2>Offers</h2>
                <p>Promotions, deals and special offers for you</p>
            
                <HStack>
                            {/* 1st div with one detail and other image */}
                    <Box>
                        <HStack boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" p='15' rounded='10px'  ml="1%" w="500px" >
                        <Box >
                            <h4>Fly away to your dream holiday</h4>
                            <p>Get inspired, compare and book flights with <br/>more flexibility</p>
                            <button style={buttonStyle}>Search for flights</button>
                        </Box>
                        <img src="https://t-cf.bstatic.com/design-assets/assets/v3.42.0/illustrations-traveller/TripsFlightsPlane.png" height="60px" alt="flight"/>
                        </HStack>
                    </Box>
                            {/* 2nd div with a backGround image and some detail     */}
                    <VStack>
                            <Box>
                                <Img src="https://q-xx.bstatic.com/psb/capla/static/media/long_stays_banner_wide.a1b12d47.png" alt="bgImg" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" width="540px" borderRadius='10px' ml="10%" height="200px" />
                            </Box>
                            <div style={{position:"absolute", left:"53%", border:"1px soliid red"}}>
                                <h4 style={{color:"white"}}>Escape for a while</h4>
                                <Text color="white">Enjoy the freedom of an extended stay<br/> on Booking.com</Text>
                                <button style={buttonStyle}>Discocver extended stays</button>
                            </div>
                    </VStack> 

                </HStack>
                            {/* explore India part with some city details */}
                
                 <h2>Explore India</h2>
                 <p>These popular destinations have a lot to offer</p>

                 <Scroll/>


               <br/>
               <br/>
                <Box ml='20px'>
                    <VStack>
                        <HStack h="45%" w="100%">
                            <div style={{position:"absolute",top:"309%", left:'7%', height:"630px", backgroundColor:"rgba(0,0,0,0.12)", width:"87%"}}></div> 
                            <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg/1280px-Ahilya_Ghat_by_the_Ganges%2C_Varanasi.jpg" alt="" h="350px"/>
                            <h2 style={{position:"absolute", left:"90px",top:"311%", color:"white"}}>Varanasi</h2>
                            <Img  src="https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2017/10/25/Pictures/_5dad3302-b959-11e7-83cc-689513d74e1b.jpg" alt="" h="350px"/>
                            <h2 style={{position:"absolute", left:"45%",top:"311%", color:"white"}}>Delhi</h2>
                        </HStack>
                        <HStack>
                            <Img src="https://cf.bstatic.com/xdata/images/city/square250/684597.webp?k=b95763a25bb32f8c6fd9137aa44b5930920118f95c3d6f2e30da32420f4ea23c&o=" alt="" h="300px" w="30%"/>
                            <h2 style={{position:"absolute", left:"7%",top:"372%", color:"white"}}>Darjeeling</h2>
                            <Img src="https://media.gettyimages.com/id/114133606/photo/view-of-the-powai-lake.jpg?s=612x612&w=0&k=20&c=5a_QCmIz6d2KC57uhcNAPb5ZeZI1th0wdikxAFH642w=" alt="" w="40%"/>
                            <h2 style={{position:"absolute", left:"35%",top:"372%", color:"white"}}>Mumbai</h2>
                            <Img src="https://cf.bstatic.com/xdata/images/city/square250/684547.webp?k=4ba42ba95af757b38c45f361860ddbbda0f6d9e63bc85aa7edebc7543fc7c310&o=" alt="" h="300px" w="30%"/>
                            <h2 style={{position:"absolute", left:"70%",top:"372%", color:"white"}}>Puri</h2>
                        </HStack>
                    </VStack>
                </Box>
                <br/>
                <br/>

                <h2>Get inspiration for your next trip</h2>
                <VStack>
                    <Zoom/>
                </VStack>
<br/><br/>
                <h2>Connect with other travellers</h2>
                <HStack>
                    <Box>
                        <Img src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/india/a047bf294ce2d2e145fdcdd3097b9a7f4e6df229.jpg" alt="" height="250px"/>
                        <h3>India</h3>
                        <p>Travel comunity <br/>155,077 travellers</p>
                    </Box>
                    <Box>
                        <Img src="https://cf.bstatic.com/static/img/communities/cover-photo/300x300/travel-discussions/35a717b9feba5c8f800e2a8949dfa5014e4e79b4.jpg" alt="" height="250px"/>
                        <h3>Tavel Talk</h3>
                        <p>General Discussion <br/>599,349 travellers</p>
                    </Box>
                    <Box>
                        <Img src="https://cf.bstatic.com/static/img/communities/communities-index/photo-300x300/b2d5ae20ed65039fe73edbeea8b34ccfddbd63b4.png" alt="" height="250px"/>
                        <h3>More Comunity</h3>
                        <p>View All <br/>1,884,345 travellers</p>
                    </Box>
                </HStack>
            </div>
        </div>
    )
}

