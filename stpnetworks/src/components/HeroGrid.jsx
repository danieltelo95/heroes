/**
 * HeroGrid Component
 * 
 * Este componente muestra una cuadrícula de superhéroes en un diseño 
 * responsivo. Cada superhéroe se representa con una imagen y su nombre 
 * sobre la imagen. El diseño se adapta a diferentes tamaños de pantalla 
 * utilizando clases de Tailwind CSS.
 * 
 * Estructura:
 * - Cuadrícula: Utiliza `grid` para crear una cuadrícula de superhéroes.
 * - Imagen: Cada superhéroe tiene una imagen que ocupa todo el ancho de la columna.
 * - Nombre: El nombre del superhéroe se muestra en la parte inferior de la imagen 
 *   en un cuadro de texto centrado.
 * 
 * Responsividad:
 * - En pantallas pequeñas, se muestra una columna.
 * - En pantallas medianas y grandes, se muestran dos columnas.
 * 
 * Uso:
 * ```jsx
 * import HeroGrid from './HeroGrid';
 * 
 * const App = () => {
 *   return (
 *     <div>
 *       <HeroGrid />
 *     </div>
 *   );
 * };
 * 
 * export default App;
 * ```
 */

import React from "react";
import batman from "../assets/images/batman.jpg"; // Importa las imágenes de los superhéroes
import spiderMan from "../assets/images/spiderman.jpg";
import superman from "../assets/images/super_man.jpg"; // Asegúrate de importar la imagen correcta
import thor from "../assets/images/thor.jpg";

const superheroes = [
    { name: "Batman", image: batman },
    { name: "Spider-Man", image: spiderMan },
    { name: "Superman", image: superman },
    { name: "Thor", image: thor },
];

const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mt-16 mb-8 ml-8 mr-8 px-16 ">
            {superheroes.map((hero, index) => (
                <div key={index} className="relative flex flex-col bg-black bg-opacity-30 overflow-hidden rounded-lg shadow-lg">
                    <img 
                        src={hero.image} 
                        alt={hero.name} 
                        className="w-full h-64 object-cover md:h-72 lg:h-80" // Ajusta la altura de la imagen
                    />
                    <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-white font-bold text-xl px-2 rounded">
                        {hero.name}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default HeroGrid;
