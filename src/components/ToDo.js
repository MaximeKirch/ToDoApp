import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from './ToDoList'
import {RiCloseCircleLine} from 'react-icons/ri'
import {TiEdit} from 'react-icons/ti'

function ToDo({todos, completeTodo, removeTodo, updateTodo}) {

    const [edit, setEdit] = useState({ // Valeur de la modification
        id: null,
        value:''
    });

    const submitUpdate = value => { // Fonction pour modifier l'entrée 
        updateTodo(edit.id, value)
       
        setEdit({
            id: null,
            value: ''
        })
    }

    if(edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate}></ToDoForm>
    }

    return todos.map((todo, index) => {

        return(
        
        <div 
            className={todo.isComplete ? 'todo-row-complete' : 'todo-row'} 
            key={index}
        >

            <div className='todo-text' key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>

            <div className='icons'>
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />

                <TiEdit 
                    onClick={() => setEdit({id: todo.id, value: todo.text})}
                    className='edit-icon'
                />
            </div>

        </div>
        )
    })
}

export default ToDo
