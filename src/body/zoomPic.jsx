import style from "./style.module.css";
 import {useState} from 'react'
 import { HStack,Box } from '@chakra-ui/react'

 export default function Zoom(){

    const [isHovering, setIsHovering] = useState(false);
    const [isHovering1, setIsHovering1] = useState(false);
    const [isHovering2, setIsHovering2] = useState(false);
    const [isHovering3, setIsHovering3] = useState(false);
    const [isHovering4, setIsHovering4] = useState(false);


    const handleMouseEnter = () => {
      setIsHovering(true);
    };
  
    const handleMouseLeave = () => {
      setIsHovering(false);
    };
    const handleMouseEnter1 = () => {
        setIsHovering1(true);
      };
    
      const handleMouseLeave1 = () => {
        setIsHovering1(false);
      };
      const handleMouseEnter2 = () => {
        setIsHovering2(true);
      };
    
      const handleMouseLeave2 = () => {
        setIsHovering2(false);
      };
      const handleMouseEnter3 = () => {
        setIsHovering3(true);
      };
    
      const handleMouseLeave3 = () => {
        setIsHovering3(false);
      };
      const handleMouseEnter4 = () => {
        setIsHovering4(true);
      };
    
      const handleMouseLeave4 = () => {
        setIsHovering4(false);
      };

    let styleCont={color:"black",backgroundImage:"10px solid black",display: "block",
    position: "relative",
    margin: "10px",
    height:"300px",
     width:"355px",
    overflow: "hidden",}
    



    return(
       <>
        <HStack>
                        <div style={styleCont}>
                        <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{backgroundImage: `url("https://bstatic.com/xdata/images/xphoto/1182x887/180173480.jpg?k=6ea6aa39bf8daaf82862915b72888bcf8ce68f0641053f336fcdd9d842b29d9d&o=?size=S")`, height:"100%", width:"100%", backgroundSize:"cover",backgroundRepeat: 'no-repeat', color:"white", padding:"5px", transition: "all 0.4s",backgroundPosition: 'center',transform : isHovering? "scale(1.2)" : ''}}>
                            <br/> <br/> <br/>
                            <br/><br/><br/><br/>
                            <h2 style={{color:"white"}}>Europ's 10 most festiv chrishmas markets</h2>
                            <h5 style={{letterSpacing:"1.5px"}}>Enjoy potent mulled wine in salzbarg and sugardusted gingerbread in valenberg</h5>
                        </Box>
                        </div>
                        <div style={styleCont}>
                        <Box onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}  style={{backgroundImage: `url("https://bstatic.com/xdata/images/xphoto/1182x887/178937293.jpg?k=f9fc668455f942b5d17dd64d5340671cea48c54e6c95710f54be72b8e66ca9b1&o=?size=S")`, height:"100%", width:"100%", backgroundSize:"cover",backgroundRepeat: 'no-repeat', color:"white", padding:"5px", transition: "all 0.4s",backgroundPosition: 'center',transform : isHovering1? "scale(1.2)" : ''}}>
                        <br/> <br/> <br/><br/><br/>
                            <br/><br/><br/><br/>
                            <h2 style={{color:"white"}}>48 hours in barcelona, spain</h2>
                            <h5 style={{letterSpacing:"1.5px"}}>Featuring beaches, churros and the art of salvador, dali</h5>
                        </Box>
                        </div>
                        <div style={styleCont}>
                        <Box onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}  style={{backgroundImage: `url("https://bstatic.com/xdata/images/xphoto/1182x887/178898286.jpg?k=23b8086aedb26a9603aaae39727435246ee7eb70ac50c235fd776aa97a466dbb&o=?size=M")`, height:"100%", width:"100%", backgroundSize:"cover",backgroundRepeat: 'no-repeat', color:"white", padding:"5px", transition: "all 0.4s",backgroundPosition: 'center',transform : isHovering2? "scale(1.2)" : ''}}>
                        <br/> <br/> <br/>
                            <br/><br/><br/><br/>
                            <h2 style={{color:"white"}}>The USA's cosiest stays for the festives seaason</h2>
                            <h5 style={{letterSpacing:"1.5px"}}>Long term stays for a festive breaks, from period properties to picture-perfect townhouses.</h5>
                        </Box>
                        </div>
                    </HStack>
                    <HStack>
                        <div style={styleCont}>
                       <Box onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}  style={{backgroundImage: `url("https://bstatic.com/xdata/images/xphoto/1182x887/177970143.jpg?k=33bf93ef93b9a619caa0a65f8626b5ed8ddac59b58e6430db339cc447855f0a7&o=?size=S")`, height:"100%", width:"100%", backgroundSize:"cover",backgroundRepeat: 'no-repeat', color:"white", padding:"5px", transition: "all 0.4s",backgroundPosition: 'center',transform : isHovering3? "scale(1.2)" : ''}}>
                        <br/> <br/> <br/><br/><br/>
                            <br/><br/><br/><br/>
                            <h2 style={{color:"white"}}>inspire yourself in the city : London</h2>
                            <h5 style={{letterSpacing:"1.5px"}}>fire up your imagination with the amazing art and creative activities</h5>
                        </Box>
                        </div>
                        <div style={styleCont}>
                        <Box onMouseEnter={handleMouseEnter4} onMouseLeave={handleMouseLeave4}  style={{backgroundImage: `url("https://bstatic.com/xdata/images/xphoto/1182x887/177192152.jpg?k=0bcedd1090e2e4579fdf61533211f1a2214f4fda49390c946a8c208680aa6dee&o=?size=S")`, height:"100%", width:"100%", backgroundSize:"cover",backgroundRepeat: 'no-repeat', color:"white", padding:"5px", transition: "all 0.4s",backgroundPosition: 'center',transform : isHovering4? "scale(1.2)" : ''}}>
                        <br/> <br/> <br/>
                            <br/><br/><br/><br/>
                            <h2 style={{color:"white"}}>7 incredible UNESCO World Heritage sites in India</h2>
                            <h5 style={{letterSpacing:"1.5px"}}>Bewitching landscapes,holey tamples candlelit banks of sacred rivers</h5>
                        </Box>
                        </div>
                    </HStack>
       </>
    )
 }