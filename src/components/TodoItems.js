import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../utils/slice";


const TodoItems = ({ todo , index})=>{
    const dispatch = useDispatch();
    const todos = useSelector((store) => store.Toddos.todos)

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    }

    return(

        <li className="felx flex-col sm:flex-row justify-center sm:items-center border-b-2 py-2 gap-2">
            <div className="flex items-center">
                <span className="mr-4 text-gray-500">{index + 1}</span>
                <span className="m-5">{todo}</span>
            </div>
            <button onClick={() => handleDeleteTodo(index)} className="ml-10"><RiDeleteBin6Line/></button>
        </li>
    )
}

export default TodoItems;