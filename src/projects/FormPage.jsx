import "../projects/style.css"

import {  useState } from "react";
import { FormData } from "./FormData";
import { DateTime } from "./DateTime";
import { ListItem } from "./ListItem";
import { getLocalStorage, setLocalStorage } from "./LocalStorage";


export const FormPage = () => {

    const [task,setTask] = useState(()=> getLocalStorage()); 
   
    const handleDeleteItem = (val) =>{
        const updatedTask = task.filter((curr)=>{
            return val!==curr.content;
        })
        setTask(updatedTask);
    }

    const handleDeleteAll = () =>{
        setTask([]);
    }

    const handleTextMark = (clickedValue) => {
        const updatedMark = task.map((curr)=>{
            if(curr.content===clickedValue){
                return {...curr,checked:!curr.checked};
            }else {
                return curr;
            }
        })
        setTask(updatedMark);
    }


    const handleFormSubmit = (inputValue)=>{
        const{id,content,checked} = inputValue;
        if(!content)return ;
        const isMatched = task.find((ele)=>
            ele.content===content
        )
        if(isMatched) return ;
        setTask((prev)=>[...prev,{id:id,content:content,checked:checked}]);
    }
    setLocalStorage(task);

    return (
        <>
           <div className="main">
            <header>
                <h1 id="todo"> TODO LIST </h1>
                <DateTime />
            </header>
            <div className="form-content">
                <FormData TodoForm={handleFormSubmit} />
                <section >
                    <ul >
                        {task.map((currEle)=>{
                            return (
                                <ListItem key={currEle.id} checked={currEle.checked} handleTextMark={handleTextMark} currdata={currEle.content} handleDeleteItem={handleDeleteItem} />
                            )
                        })}
                    </ul>
                    <button className="clearBut" onClick={handleDeleteAll}> Clear All </button>
                </section> 
            </div>
           </div>
        </>
    )
}