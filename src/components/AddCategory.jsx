import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState("");

    const onInputChange = ({ target }) => {
        // event o puedo pasar desestructurado target  //event.target.value
        setinputValue(target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return; // me salgo de la fn a menos que haya + 1 caracter

        setinputValue(""); // borra el input después de la entrada
        onNewCategory(inputValue.trim());
    };

    return (
        <form onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};