import React, {useState} from 'react'
import ToDo from './ToDo'
import ToDoForm from './ToDoForm'

function ToDoList() {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text))  { // Test de la valeur qui n'est pas retournée si nulle 
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)  

        console.log(...todos); 

    }

    const removeTodo = id => { // Fonction pour retirer une tâche
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const updateTodo = (todoId, newValue) => {

        if(!newValue.text || /^\s*$/.test(newValue.text))  { // Test de la valeur qui n'est pas retournée si nulle
            return
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id => { // Fonction pour compléter une tâche et la griser au clic

        let updatedTodos = todos.map((todo) => {
            if(todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
     setTodos(updatedTodos);   
    }


    return (
        <div className='todo'>

            <h1 id='title'>Qu'avez-vous prévu aujourd'hui ?</h1>

            <ToDoForm onSubmit={addTodo} />
            <ToDo 
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
            
        </div>
    )
}

export default ToDoList
