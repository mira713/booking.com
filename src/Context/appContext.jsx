import {createContext, useState} from 'react';

export const AppContext = createContext();

export default function AppContextProvider({children}){
    // let [users, setUsers] = useState([]);
    let [names , setNames] = useState('') 
    let users=[]
    let [state, setState] = useState(false)

    let setAllUsers=(newUser)=>{
        users.push(newUser)
        console.log(users)
    }
    let login=(data)=>{
     users?.map((obj)=>{
        if(obj.email===data.email && obj.password===data.password){
            setState(true)
            setNames(obj.name)
        }
     })
    }

    let logout=()=>{
        setState(false)
        setNames('')
    }
    return(
        <AppContext.Provider value={{users,setAllUsers,names, state, login, logout}}>
            {children}
        </AppContext.Provider>
    )
}