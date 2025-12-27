import { MdDeleteForever } from "react-icons/md";

import { IoMdCheckmark } from "react-icons/io";


export const ListItem = ({currdata,checked,handleTextMark,handleDeleteItem}) => {
    return (
        <li style={{listStyleType: "none"}} className="items">
            <span className={checked?"mark":"unmark"} > {currdata} </span>
            <span >
            <button onClick={()=>handleTextMark(currdata)} className="butt" style={{backgroundColor:"#4ebf6d"}}><IoMdCheckmark /></button>
            <button onClick={()=>handleDeleteItem(currdata)} className="butt" style={{backgroundColor:"#d64046"}}>  <MdDeleteForever /> </button>
            </span>
        </li>
    )
}