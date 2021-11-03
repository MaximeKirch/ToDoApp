import React, {useState, useEffect, useRef} from 'react'


// Input qui récupère les entrées
// Array qui stocke les listes
// Renvoyer la liste en JSX
// Bouton qui grise l'activité quand elle est remplie




export default function ToDoForm(props) {

    const [input, setInput] = useState('');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value);
    };
 
    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');

    };

    


    return (
        <div>
            <form className='todo-form'
                    onSubmit={handleSubmit}>

                <input 
                    type='text' 
                    placeholder='Ajoutez une tâche' 
                    value={input} 
                    name='text' 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />

                <button className='todo-button'>Ajouter</button>
            </form>
            
        </div>
    )
}
