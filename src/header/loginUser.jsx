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

  let Login=()=>{
    let{state,login} = useContext(AppContext)
    let[data, setData] = useState({
        email:'',
        password: '',
    })

    let {email, password} = data

    let handleClick=()=>{
        console.log(state)
         login(data)
         console.log(state)
        setData({
            email:'',
            password:''
        })
        console.log(state)
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
        width:"20%",
        height:"47%",
        marginTop:"5%",
        marginLeft: "2%",
        border:"1px solid blue",
        borderRadius:"5px"
       }
       return(
        <Popover>
          <PopoverTrigger>
            <Button style={style}>Login</Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent  boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px"height="300px" w="400px" borderRadius={"5px"} textAlign="centere" bg="white" alignItems='center'>
              <PopoverArrow />
              <PopoverHeader fontSize={23} textAlign="center">Fill the credential</PopoverHeader>
              <PopoverCloseButton w="20%" alignItems="center"/>
              <PopoverBody>
                {/* <Button colorScheme='blue'>Button</Button> */}
                <h4 style={{textAlign:"centere"}}>email :</h4>
                <Input placeholder="enter email" h="30px"  w="300px"fontSize={20} alignItem="center" type="text" name="email" value={email} onChange={handleChange}/>
                <h4 style={{textAlign:"centere"}}>password :</h4>
                <Input placeholder="enter password" h="30px" w="300px" fontSize={20} alignItem="center" type="password" name="password"  value={password} onChange={handleChange}/>
                
              </PopoverBody>
              <PopoverFooter>
                <Button style={style} onClick={handleClick}>Login</Button>
              </PopoverFooter>
            </PopoverContent>
          </Portal>
        </Popover>
       )
        
  }
  export default Login