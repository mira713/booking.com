import {AppContext} from "../Context/appContext";
import {useContext} from 'react';
import {Button} from '@chakra-ui/react'

export default function Logout(){
    let {logout} = useContext(AppContext);

    let handleClick=()=>{
        logout()
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
        <Button style={style} onClick={handleClick}>Logout</Button>
    )
}