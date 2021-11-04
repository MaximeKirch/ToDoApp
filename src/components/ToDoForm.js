import React, {useState, useEffect, useRef} from 'react'


// Input qui récupère les entrées
// Stocker les tâches et les afficher en .map()
// Griser l'activité quand elle est complétée ( au clic)




export default function ToDoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus() // Récupère une valeur modifiable 
    })

    const handleChange = e => { // Récupère l'input de l'utilisateur
        setInput(e.target.value);
    };
 
    const handleSubmit = e => { // Stocke l'input avec un ID aléatoire
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
                {props.edit ? (  // Si la modale edit est ouverte alors on renvoie une nouvelle fenêtre d'input

                <>
                <input 
                    type='text' 
                    placeholder='Modifiez votre tâche' 
                    value={input} 
                    name='text' 
                    className='todo-input edit'
                    onChange={handleChange}
                    ref={inputRef}
                    autoComplete='off'
                />

                <button className='todo-button edit'>Modifier</button>

                </>
                ) : (


                <>
                <input 
                    type='text' 
                    placeholder='Ajouter une tâche' 
                    value={input} 
                    name='text' 
                    className='todo-input'
                    onChange={handleChange}
                    ref={inputRef}
                />

                <button className='todo-button'>Ajouter</button>

                </>
                
                )}

            
            </form>
            
        </div>
    )
}
