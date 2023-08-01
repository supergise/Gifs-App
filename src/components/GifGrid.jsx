import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
    const { images, isloading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>

            {isloading && <h2>Cargando...</h2>}

            <div className="card-grid">
                {images.map(
                    (
                        image // img desestructurado
                    ) => (
                        <GifItem
                            key={image.id}
                            // title={ image.title }
                            // url={ image.url }
                            {...image}
                        />
                    )
                )}
            </div>
        </>
    );
};