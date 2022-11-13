import { Input ,HStack, InputGroup,InputLeftAddon, InputRightAddon, Button} from '@chakra-ui/react'
import { AddIcon ,CalendarIcon,ArrowUpDownIcon} from '@chakra-ui/icons'
import { BsPersonPlusFill } from "react-icons/bs";
import {
  Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from '@chakra-ui/react'
import {useState} from 'react'
import Hotel from './searchModal.jsx'

export default function SearchInput(){
// let [search, setSearch] = useState(false)
let [city, setCity] = useState('')
const { isOpen, onOpen, onClose } = useDisclosure()

let arr=[
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/282576800.webp?k=9eabf122d7e983f69c2b2711756300199946e1dc710a88a8cb3273fe39c23191&o=&s=1",
      name:'FabHotel Veera Residency',
      price:'2394',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/369493889.webp?k=9f93c94d7027b506eb51024c99432ae2cf1c8678de0916d898aa099a2c2dc96f&o=&s=1",
      name:'FabHotel Prime Land',
      price:'2081',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/379109631.webp?k=8042b3c562f1c353e8db3dd6ce4d0da653e4914c08d26347ca89e0072c26b67f&o=&s=1",
      name:'Hotel Sion Residency',
      price:'1540',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/400068597.webp?k=0897ed0889cfbac8848a9750ee5f450746efdaac3c99f368398980464dc6f978&o=&s=1",
      name:'Hotel Aqua Galaxy',
      price:'2744',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/360117850.webp?k=b2c1f65d844dfe777a5b6665d813613ce4a0f3c0bb2996e0e721d244bf29df6c&o=&s=1",
      name:'De Classico Hotel Mhada',
      price:'1800',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/285404056.webp?k=0894cb737afefc83019b1cc925ee2481669bb46fd54cea3889502148b6cf4daa&o=&s=1",
      name:'The Byke Brightland Resort Pure Veg',
      price:'2925',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/399506330.webp?k=45230b21972e0700378edc5ca50401aca8978c4e37e33a6b68b36ad441a23f88&o=&s=1",
      name:'Capital O 74962 Hotel Sapna',
      price:'1841',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/367313156.webp?k=58fd25c0d8e4ab65dbd9ffb68fd35539f8aaa2d60c42428b74298937adf1dae0&o=&s=1",
      name:'FabExpress Jayshree',
      price:'2255',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/332251343.webp?k=97470fd7220e29922a91680a70f1df54a1975af31bf0eb4889a4380efe2cccb5&o=&s=1",
      name:'FabHotel Sakinaka',
      price:'1833',
      detail:'Deluxe Room 1 large double bed Breakfast included Free cancellation You can cancel later, so lock in this great price today.'
  },
  {
      img:"https://cf.bstatic.com/xdata/images/hotel/square600/367317879.webp?k=a863e336b695e0452d1018b84e56cf8be6bde960391af8cccf6b215b9637dfa2&o=&s=1",
      name:'FabHotel Arton Suites',
      price:'1946',
      detail:'Deluxe Room 1 large double bed , Breakfast included, Free cancellation ,You can cancel later, so lock in this great price today.'
  },
]
let hotels=arr.map((el)=>{
  return(
    <Hotel img={el.img} price={el.price} name={el.name} detail={el.detail} />
  )
})

  // let popUp=()=>{
  //    setSearch(true)
  //    onOpen()
  // }
 
  
    let style={
        border:"3.5px solid orange",
        fontSize:"17px",
        padding: "20px",
        height:"10px",
        backgroundColor: "white",
        color:"black"
    }
    let headStyle={
        dispaly:"flex",
        marginLeft:'7%',
        marginTop:"-1.5%",
    }
    let inputStyle={
        height:"18px",
        fontSize: "15px",
        marginLeft: "20px",
        border:"none",
        outline: 'none'
    }

     return(<>
     <HStack spacing={-2} style={headStyle} >
    
    <InputGroup style={style} width="25%" >
      <InputLeftAddon children={<AddIcon/>} />
      <Input type='text' style={inputStyle} placeholder='where do you want to go?' onChange={(e)=>setCity(e.target.value)} value={city}/>
    </InputGroup>
  

    {/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
    <InputGroup size='lg' style={style} width="15%">
      <InputLeftAddon children={<CalendarIcon/>} /><br/>
      <Input type="date" style={inputStyle}placeholder='check in  -  check out'/>
      {/* <InputRightAddon children='.com' /> */}
    </InputGroup>


    <InputGroup style={style} width="25%">
      <InputLeftAddon children={<BsPersonPlusFill/>} />
      <Input type='text' style={inputStyle} mr="50px" placeholder='1 adult . 1 child . 1 room' />
      <InputRightAddon children={<ArrowUpDownIcon/>}/> 
    </InputGroup>


        {/* <Button fontSize="25px"p="11px"border="3.5px solid orange" bg="rgb(20,100,250)" h="150%" color="white" w="15%" onClick={popUp} >Search</Button> */}
    
        

<Button fontSize="25px"p="11px"border="3.5px solid orange" bg="rgb(20,100,250)" h="150%" color="white" w="15%" onClick={onOpen} >Search</Button>
        {/* <Button onClick={onOpen}>Open Modal</Button> */}
  
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent bg="white" h="600px" w="95%" alignItems="center" textAlign="center" margin="auto" overflow="auto">
      <ModalHeader fontSize={25} m="40px" ><b>Hotels in {city}</b></ModalHeader>
      <ModalCloseButton m="-20px" onClose={onClose}/>
      <ModalBody>
        {/* <Lorem count={2} /> */}
       {hotels }
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' mr={3} onClick={onClose} style={style}>
          Close
        </Button>
        <Button variant='ghost' style={style}>Secondary Action</Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
  </HStack>
        </>
    )
}
