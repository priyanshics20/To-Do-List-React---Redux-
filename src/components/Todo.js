import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItems from "./TodoItems";
import { addTodo } from "../utils/slice";
import { clearTodo } from "../utils/slice";

const Todo = () =>{

    const [Input ,setInput]= useState("");

    const dispatch = useDispatch();
    const todos = useSelector(state => state.Toddos.todos);

    const handleAddTodo = (Input)=>{
        if(Input.trim() !== ""){
            dispatch(addTodo(Input.trim()));
            setInput("");
        }
    }

    const handleCLearTodo = ()=> {
        dispatch(clearTodo());
    }

    return(
        <div className="p-8 m-5" >
            <div className="flex justify-center border-b-2" >
                <input 
                    className=""
                    placeholder="add items" 
                    value = {Input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button onClick={()=> handleAddTodo(Input)}>Add</button>
            </div>

            <div>
                {todos.length !== 0 && (
                    <ul>
                        {
                            todos.map((todo,index)=> <TodoItems key={index} todo={todo} index={index} />
                            
                        )}
                    </ul>
                )}

            </div>
            <div className="flex justify-center m-5 p-5">
                <button 
                    onClick={()=> handleCLearTodo()}
                    className="bg-gray-300 p-5 rounded-full"
                >
                    Clear Todo
                </button>
            </div>
        </div>
        
    );
}

export default Todo;