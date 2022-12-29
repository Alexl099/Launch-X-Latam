import React from "react";
import ReactDom from "react-dom/client";
//Importacion de componentes
import { PokeContainer1, PokeContainer2 } from "./Components/pokeContainer";
import { PokeContextFunctionProvider } from "./PokeContext/PokeContext";


const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <PokeContextFunctionProvider>
    <div className="ContainerPokedex">
      <PokeContainer1 />
      <PokeContainer2 />
    </div>
    
  </PokeContextFunctionProvider>
);
