import React from "react";
import "./stylesComponets.css";
import { PokeContent1, PokeContent2 } from "./PokeContent";

export function PokeContainer1() {
  return (
    <div className="PokeContainer1">
      <PokeContent1/>
    </div>
  );
}

export function PokeContainer2() {
  return (
    <div className="PokeContainer2">
      <PokeContent2/>
    </div>
  );
}
