async function ConsultarPokemon(){
    //Ocupamos el ID declarado en el HTML
    const nombrePokemon = document.getElementById("Pokederecha__buscador--Text"); 

    //Guardamos el valor que se almacenara en el input creando una variable. 
    
    let pokeNombre = nombrePokemon.value; 
    
    //Convertimos a minusculas para que la pokeapi no tenga problemas al leerlo.
    pokeNombre = pokeNombre.toLowerCase(); 


    //Consultamos a la pokeapi concatenando la variable en la URL
    const pokeApi = `https://pokeapi.co/api/v2/pokemon/${pokeNombre}`; 

    //La funcion fetch sirve para consultar apis
    //Entonces con la linea 18 lo que estamos haciendo es: 
        //Con el await estamos haciendo que no avance el flujo hasta que se cumpla la promesa
        //Con el fetch estamos consultando a la constante en la que se almacena la pokeapi
        //Con el .then recibimos el resultado de la promesa
    let rpta = await fetch(pokeApi).then((resul) =>{
        
        /*El estado del resultado debe ser diferente a 200 porque todos los status diferentes
        a 200 son considerados errores*/

        if(resul.status != "200"){

            console.log(resul);
            cambioImagen("https://media.tenor.com/4VqyxVX44UMAAAAC/pikachu-triste.gif");

        }
        else{
            //El Json es una manera de intercambio de datos a traves de archivos de texto.
            /*para acceder a los datos de json en JS, el json debe ser convertido a objeto, 
              para asi poder obtener sus datos*/
              
              return resul.json();
        }
        

    })
    
    if(rpta){
        let imagenPokemons = rpta.sprites.front_default; 
        console.log(rpta);
        
        cambioImagen(imagenPokemons);

        let infopokemon = rpta.abilities; 
        despliegueinformacion(infopokemon);
    }



}

function cambioImagen (pokeApi){
    const fotopokemon = document.getElementById("Pokederecha__imagen--Img");

    fotopokemon.src = pokeApi; 
    
}

function despliegueinformacion (abilities){

    const habilitades = document.getElementById("pokeSpecs"); 

    const nombrebrehabilidades = abilities.map((item) => item.ability.name);

    console.log("habilidades ", abilities);
    console.log("nombre", nombrebrehabilidades); 

    habilitades.innerHTML = nombrebrehabilidades;
    
    
}


