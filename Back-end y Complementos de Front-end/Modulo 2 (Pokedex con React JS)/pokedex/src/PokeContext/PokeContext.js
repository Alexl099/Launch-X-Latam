import { createContext } from "react";
export const PokeContext = createContext();

export function PokeContextFunctionProvider(props) {
  
  const POKEAPI = "https://pokeapi.co/api/v2/pokemon/";

  function cambioSRC(pokeapi){

    const POKESRC = document.getElementById("ImagenPokemon"); 

    POKESRC.src = pokeapi; 
  }

  function PokeStadistics(habilidades, nombre){

    const PokeValue = document.getElementById("pokeSpecs");
    
    const  nombrePokemon = nombre.map((item) => item.name);
    const nombreHabilidades = habilidades.map((item) => item.ability.name);


    PokeValue.value = "Nombre: \n\t" + nombrePokemon + "\nHabilidades: \n\t" + nombreHabilidades;
  }


  return (
    <PokeContext.Provider value={{POKEAPI, cambioSRC, PokeStadistics}}>
        {props.children}
    </PokeContext.Provider>
  );
}
