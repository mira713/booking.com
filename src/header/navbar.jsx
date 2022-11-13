import { Box } from '@chakra-ui/react'
import {QuestionOutlineIcon} from '@chakra-ui/icons'
import { Image} from '@chakra-ui/react'
import {useState, useContext} from "react"
import Res from "./register.jsx"
import Login from "./loginUser.jsx"
import {AppContext} from "../Context/appContext.jsx"
import Logout from "./logout.jsx"
export default function Navbar(){
    let{state,names} = useContext(AppContext)
  
  return  <Box bg='glass' w='100%' p={4} position="absolute" top="0px" left="40px" display="flex">
    <Box >
    {/* <Text fontSize='2xl'color="black">Booking.com</Text> */}
    <h1 style={{color:"white"}}>Booking.com</h1>
    </Box>


    <Box display="flex" marginLeft="35%" width="13%">
        <h4 style={{color:"white",padding:"10px"}}>INR</h4>
        <Image  borderRadius='50%'
        marginLeft="-5%"
        boxSize='25px'
        mt="5%"
        padding="25px"
        src="https://cf.bstatic.com/static/img/flags/new/48-squared/in/20aa535a5d3c505dd02fea275ed1a36c0fb1fe08.png"  alt="flag"/>
        <QuestionOutlineIcon boxSize="23px"  padding="20px" marginLeft="-10%" mt="8%"/>
    </Box>


    {/* <Box display="flex"width="30%">
        
        <p style={{color:"white",marginLeft:"1%" , padding:"20px",backgoundColor:"white", color:"rgb(30,100,225)"}}>Register</p>
        <p style={{color:"white",marginLeft:"1%", padding:"20px",backgoundColor:"white", color:"rgb(30,100,225)"}}>Login</p>
    </Box> */}
    <Box display="flex"width="30%" ml="0%">
    <p style={{color:"white",textAlign:"center",width:"40%", padding:"3px", height:"35%",border:"1px solid white" ,marginTop:"6%"}}>List Your Property</p>
        {/* <Button marginLeft="2%" h="40" border="1px solid rgb(30,100,225)" color="rgb(30,100,225)" padding="18px" marginTop="5.5%" onClick={handleReg}>Register</Button> */}
        {!state && < Res />}
        {/* <Button marginLeft="2%" h="40" border="1px solid rgb(30,100,225)" color="rgb(30,100,225)" padding="18px" marginTop="5.5%" >Login</Button> */}
        {!state && <Login/>} 
        {state && <h4 style={{color:"white", marginLeft:"10px"}}>hi! {names}</h4>}
        {state &&  <Logout/>}
        
    </Box>
</Box>
}