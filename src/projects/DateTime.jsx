import "../projects/style.css"
import { useEffect,useState } from "react";


export const DateTime = () => {
    const [dateTime,setDateTime] = useState("");
    useEffect(()=>{
        const interval = setInterval(()=>{
            const now = new Date();
            const updatedDate = now.toLocaleDateString();
            const updatedTime = now.toLocaleTimeString();
            setDateTime(`${updatedDate}-${updatedTime}`)
        },1000)

        return ()=>clearInterval(interval);
        
    },[])

    return <section className="datetime"> {dateTime} </section> 
    
}