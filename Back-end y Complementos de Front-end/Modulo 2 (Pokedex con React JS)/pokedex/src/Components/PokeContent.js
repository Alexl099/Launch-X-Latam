import React from "react";
import "./stylesComponets.css";
import { useContext } from "react";
import { PokeContext } from "../PokeContext/PokeContext";

export function PokeContent1() {
  const { POKEAPI, cambioSRC, PokeStadistics } = useContext(PokeContext);

  return (
    <>
      <img
        className="PokeScreenImage"
        src="https://media.tenor.com/nyF1LSznl94AAAAC/squirtle-bailando.gif"
        alt="ImagenPokemon"
        id="ImagenPokemon"
      />

      <div className="ScreenInput">
        <input type="text" className="SecreenInput__input" id="PokeInput" />
        <button
          className="ScreenInput__button"
          onClick={async function () {
            let pokeID = document.getElementById("PokeInput");
            pokeID = pokeID.value;
            pokeID = pokeID.toLowerCase();
            const pokeConsulta = POKEAPI + pokeID;
            console.log(pokeConsulta);
            console.log(typeof pokeConsulta);

            const CONSULTA = await fetch(pokeConsulta).then(
              (RespuestaPokeApi) => {
                console.log(RespuestaPokeApi);

                if (RespuestaPokeApi.status != "200") {
                  cambioSRC("https://media.tenor.com/4VqyxVX44UMAAAAC/pikachu-triste.gif");
                } else {          
                  return RespuestaPokeApi.json();
                }
              }
            );

            if (CONSULTA) {
      
              cambioSRC(CONSULTA.sprites.front_default); 
              
              PokeStadistics(CONSULTA.abilities, CONSULTA.forms)
              
              
              
              
              /* let nombre = CONSULTA.forms;
              let xd = nombre.map((item) => item.name);
              console.log("El nombre es: " + xd); */
              //console.log(nombre.map((item) => item.name));
            }
          }}
        >
          Aceptar
        </button>
      </div>
    </>
  );
}

export function PokeContent2() {

  
  return (
    <>
      <textarea type="text" className="PokeScreen" id="pokeSpecs" disabled></textarea>

      <img
        src="https://i.pinimg.com/originals/bd/cd/20/bdcd20f5411ee5785889542d303ad4cb.png"
        alt="Pokedex-Logo"
        className="PokeImage"
      />
    </>
  );

  
}
