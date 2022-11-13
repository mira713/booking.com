import { Button, ButtonGroup,Stack,Box } from '@chakra-ui/react'
import { BiBed,BiTaxi} from "react-icons/bi";
import { TfiCar  } from "react-icons/tfi";
import { SiDbt,SiAirplayaudio } from "react-icons/si";
import { TbPlane } from "react-icons/tb";
import style from "./style.css"

export default function NavFoot(){
  
  return(
    
      <Stack direction='column'>
  <Box
    display='flex'
    alignItems='center'
    width='100%'
    py={12}
    bgPosition='center'
    bgRepeat='no-repeat'
  >
    <ButtonGroup gap='12' position="absolute" top="15%" left="3%">
      <Button className='hover' style={style} as="b" variant='ghost' size='lg' border="2px solid white" bg="glass" p="12" borderRadius="20px" width="50px" color="white" fontSize="20px"><BiBed /> stays</Button>
      <Button className='hover' style={style} as='b' variant='ghost' size='md'bg="glass" p="12" borderRadius="20px" width="auto"border="1px solid glass" color="white" fontSize="20px"><TbPlane className='icon'/>flight</Button>
      <Button className='hover' style={style} as='b' variant='ghost' size='md' border="1px solid glass" bg="glass" p="12" borderRadius="20px" width="auto" color="white" fontSize="20px"><SiDbt/>flight + hotel</Button>
      <Button className='hover' style={style} as='b' variant='ghost' size='md' bg="glass"border="1px solid glass" width="auto"p="12" borderRadius="20px" color="white" fontSize="20px">< TfiCar/>car rental</Button>
      <Button className='hover' style={style} as='b' variant='ghost' size='md' border="1px solid glass" bg="glass"width="auto"p="12" borderRadius="20px" color="white" fontSize="20px"><SiAirplayaudio/>attractions</Button>
      <Button className='hover' style={style} as='b' variant='ghost'size='md' border="1px solid glass" bg="glass"width="auto"p="12" borderRadius="20px" color="white" fontSize="20px"><BiTaxi/>airport taxi</Button>
    </ButtonGroup>
  </Box>
  </Stack>
  )
}


