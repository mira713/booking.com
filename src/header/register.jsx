import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    Button,
    Portal,
    Input
  } from '@chakra-ui/react'
  import {useState} from 'react'
  import {AppContext} from '../Context/appContext'
  import {useContext} from 'react'


export default function Register(){
    let {users, setAllUsers} = useContext(AppContext)
let [data, setData] = useState({
    name:'',
    email: "",
    password : ""
})
let{name, email, password} =data;


    let handleReg=()=>{
        setAllUsers(data)
        setData({
            name:"",
            email:"",
            password:""
        })
    }


    let handleChange=(e)=>{
     let {name, value} = e.target;
     setData({
        ...data,
        [name] : value
     })
    }


   let style={
     backgroundColor:"white",
     padding: "5px",
     fontSize: "16px",
     color:"blue",
     border: "none",
     borderRadius: "5px",
     marginTop:"5px",
     width:"20%",
     height:"47%",
     marginTop:"5%",
     marginLeft: "2%",
     border:"1px solid blue"
    }
  return(
<Popover>
  <PopoverTrigger>
    <Button style={style}>Register</Button>
  </PopoverTrigger>
  <Portal>
    <PopoverContent  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"height="400px" w="400px" borderRadius={"5px"} textAlign="centere" bg="white" alignItems='center'>
      <PopoverArrow />
      <PopoverHeader fontSize={23} textAlign="center">Fill the credential</PopoverHeader>
      <PopoverCloseButton w="20%" alignItems="center"/>
      <PopoverBody>
        {/* <Button colorScheme='blue'>Button</Button> */}
        <h4 style={{textAlign:"centere"}}>name :</h4>
        <Input placeholder="enter name" h="35px" w="300px" fontSize={20} alignItem="center" type="text" onChange={handleChange} name="name" value={name}/>
        <h4 style={{textAlign:"centere"}}>email :</h4>
        <Input placeholder="enter email" h="30px"  w="300px"fontSize={20} alignItem="center" type="text" onChange={handleChange} name="email" value={email}/>
        <h4 style={{textAlign:"centere"}}>password :</h4>
        <Input placeholder="enter password" h="30px" w="300px" fontSize={20} alignItem="center" type="password" onChange={handleChange} name="password" value={password}/>
        
      </PopoverBody>
      <PopoverFooter>
        <Button style={style}onClick={handleReg}>Register</Button>
      </PopoverFooter>
    </PopoverContent>
  </Portal>
</Popover>


  )
}