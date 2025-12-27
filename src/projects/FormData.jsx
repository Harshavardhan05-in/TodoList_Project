import { useState } from "react";

export const FormData = ({TodoForm}) => {
    const [inputValue,setInputValue] = useState({});
    

    const handleFormSubmit = (event) => {
        event.preventDefault();
        TodoForm(inputValue);
        setInputValue({id:"",content:"",checked:false});

    }
    const handleInputChange = (val) => {
        setInputValue({id:val,content:val,checked:false});
    }
    return (
        <section>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter Task" className="mainform" value={inputValue.content} autoComplete="off" onChange={(e)=>handleInputChange(e.target.value)}></input>
                <button className="addbut" type="submit">Add</button>
            </form>
        </section>
    )
}