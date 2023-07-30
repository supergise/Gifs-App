import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(["the office"]);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    console.log(categories);

    return (
        <>
            <h1>Buscador de gifs</h1>

            <AddCategory
                onNewCategory={onAddCategory}
            />

            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};