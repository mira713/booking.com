import {motion} from "framer-motion";
import {useState, useEffect, useRef} from "react";


export default function Scroll(){

    let [width, setWidth] = useState(0);
    let [width1, setWidth1] = useState(0);
    let slider= useRef();
    let slide1 = useRef();
    useEffect(()=>{
      let finalWidth=    (slider.current.scrollWidth - slider.current.offsetWidth)
      console.log(slider.current.scrollWidth - slider.current.offsetWidth)
      setWidth(finalWidth)
    },[])

    useEffect(()=>{
       setWidth1(slide1.current.scrollWidth - slide1.current.offsetWidth);
       
    },[])

    let images=[
        {
            id:1,
            src:"https://cf.bstatic.com/xdata/images/city/square250/684571.webp?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
            city:"kolkata",
            pro:"943 popeties"
        },
        {
            id:2,
            src:"https://cf.bstatic.com/xdata/images/city/square250/950190.webp?k=074fb7239083911679ecd57662ae111a7870c3dfef6ecc881be0e9e88854f664&o=",
            city:"mandamoni",
            pro:"955,433 popeties"
        },
        {
            id:3,
            src:"https://cf.bstatic.com/xdata/images/city/square250/647841.webp?k=aeb5ec9bbe70276484f43f02fd8b9706a818ac8754c6cc7dbbf39227be7f7253&o=",
            city:"digha",
            pro:"9,234,643 popeties"
        },
        {
            id:4,
            src:"https://cf.bstatic.com/xdata/images/region/square250/49646.webp?k=b7f38878b9164ee38e0b99c4d4646dbea76b7bf4add8464b1aa75e4c9d0efc6e&o=",
            city:"Goa",
            pro:"3,456 popeties"
        },
        {
            id:5,
            src:"https://cf.bstatic.com/xdata/images/city/square250/684597.webp?k=b95763a25bb32f8c6fd9137aa44b5930920118f95c3d6f2e30da32420f4ea23c&o=",
            city:"Darjeeling",
            pro:"8,943 popeties"
        },
        {
            id:6,
            src:"https://cf.bstatic.com/xdata/images/city/square250/684799.webp?k=397354c65103bbb54623a26a643e9eec8ca14d7de26a260d84c3b0201404fd02&o=",
            city:"Puri",
            pro:"9,743 popeties"
        },
        {
            id:7,
            src:"https://cf.bstatic.com/xdata/images/city/square250/684765.webp?k=3f7d20034c13ac7686520ac1ccf1621337a1e59860abfd9cbd96f8d66b4fc138&o=",
            city:"Basnoi",
            pro:"1,234,943 popeties"
        },
        {
            id:8,
            src:"https://cf.bstatic.com/xdata/images/city/square250/684571.webp?k=2166dfd3192f12497a35d57434f14f2f9175eca9e2698b04eeb827064c3c9d4d&o=",
            city:"kolkata",
            pro:"943 popeties"
        }
    ]

    let hotels=[
        {
            id:1,
            src:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/57584488.jpeg?k=d8d4706fc72ee789d870eb6b05c0e546fd4ad85d72a3af3e30fb80ca72f0ba57&o=",
        stay:"hotels",
         prop:"12,345 property"
        },
        {
            id:2,
            src:"https://r-xx.bstatic.com/xdata/images/hotel/300x240/119467716.jpeg?k=f3c2c6271ab71513e044e48dfde378fcd6bb80cb893e39b9b78b33a60c0131c9&o=",
            stay:"Apartment",
            prop: "121,456 property"
        },
        {
            id:3,
            src:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450084.jpeg?k=f8c2954e867a1dd4b479909c49528531dcfb676d8fbc0d60f51d7b51bb32d1d9&o=",
        stay:"hotels",
        prop:"12,345 property"
        },
        {
            id:4,
            src:"https://r-xx.bstatic.com/xdata/images/hotel/300x240/100235855.jpeg?k=5b6e6cff16cfd290e953768d63ee15f633b56348238a705c45759aa3a81ba82b&o=",
            stay:"villas",
            prop: "121,456 property"
        },
        {
            id:5,
            src:"https://r-xx.bstatic.com/xdata/images/hotel/300x240/52979454.jpeg?k=6ac6d0afd28e4ce00a8f817cc3045039e064469a3f9a88059706c0b45adf2e7d&o=",
            stay:"hotels",
            prop:"12,345 property"
        },
        {
            id:6,
            src:"https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450074.jpeg?k=7039b03a94f3b99262c4b3054b0edcbbb91e9dade85b6efc880d45288a06c126&o=",
            stay:"apartment",
            prop: "121,456 property"
        },
        {
            id:7,
            src:"https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450090.jpeg?k=52f6b8190edb5a9c91528f8e0f875752ce55a6beb35dc62873601e57944990e4&o=",
        stay:"villas",
        prop:"12,345 property"
        },
        {
            id:8,
            src:"https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450113.jpeg?k=76b3780a0e4aacb9d02ac3569b05b3c5e85e0fd875287e9ac334e3b569f320c7&o=",
            stay:"hotel",
            prop: "121,456 property"
        },
        {
            id:9,
            src:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o=",
            stay:"apartment",
            prop:"12,345 property"
        },
        {
            id:10,
            src:"https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450279.jpeg?k=cb9ab85ffe439f3030e00281f2d52583a398bf076e54f00f746e1d1baf62bf6e&o=",
            stay:"hotels",
            prop: "121,456 property"
        },
    ]
 
    let imgStyle={
        height:"65%",
        width:"100%",
        borderRadius:"5px",
        pointerEvent:"none",
    }
    
    let itemStyle={
        padding:"10px",
        minHeight:"50px",
        minWidth:"190px",
        scroll:"smooth",
    }
    let itemStyle1={
        scroll:"smooth",
        padding:"10px",
        minHeight:"110px",
        minWidth:"260px",
    }
    return(
        <>
         <motion.div className="slider" ref={slider} style={{cursor:"grab", overflow:"hidden"}} whileTap={{curser: "grabing"}}>
           
            <motion.div drag="x" dragConstraints={{right:0 , left:-width}} className="innner-slider" style={{display:"flex"}}>
               {images.map((image)=>{
                return(
                    <motion.div className="item" key={image.id} style={itemStyle} >
                        <img style={imgStyle} src={image.src} alt=""/>
                        <h4>{image.city}</h4>
                        <p>{image.pro}</p>
                    </motion.div>
                )
               })}
            </motion.div>
         </motion.div>
         <br/>

         <h2>Browse by property type</h2>
         <motion.div className="slider" ref={slide1} style={{cursor:"grab", overflow:"hidden"}} whileTap={{curser: "grabing"}}>
             <motion.div drag="x" dragConstraints={{right:0, left :-width1}} className="innner-slider" style={{display:"flex"}}>
                 {hotels.map((hotel)=>{
                    return(
                        <motion.div className="item" key={hotel.id} style={itemStyle1}>
                        <img style={imgStyle} src={hotel.src} alt=""/>
                        <h4>{hotel.stay}</h4>
                        <p>{hotel.prop}</p>
                        </motion.div>
                    )
                 })}    
             </motion.div>
         </motion.div>
        </>
    )
}