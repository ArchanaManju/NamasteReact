import { useState , useEffect} from "react"

const useOnlineStatus = () =>{
    const [onlineStatus, setOnlineStatus] = useState(true)

// check if online 
// event listner 
// using effect because we need to do only once and at the bigining 
useEffect(()=>{

    window.addEventListener('offline', ()=>{
        setOnlineStatus(false)
   })

    window.addEventListener('online', ()=>{
        setOnlineStatus(true)
    })
    

},[])
        return onlineStatus
}

export default useOnlineStatus