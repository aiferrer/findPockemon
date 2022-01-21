let btn = document.getElementById("btnBuscar");
    
function buscar(){   
    let id = document.getElementById("texto").value;

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => response.json())
    .then(json => dataPockemon(json)) 
    .catch(err => alert(`No encontramos Pockemon con id o nombre:  ${id}`)); 
   
 }


 function dataPockemon(pockemon){    

    let img = document.getElementsByClassName("card-img-top")[0];
    img.setAttribute("src", pockemon.sprites.other.dream_world.front_default )

    let nombre = document.getElementsByTagName("h2")[0];
    nombre.textContent = pockemon.name;

    let tipo = document.getElementsByTagName("li")[0];
    tipo.textContent = pockemon.types[0].type.name;

    let expBase = document.getElementsByTagName("li")[1];
    expBase.textContent = pockemon.base_experience;

    let altura = document.getElementsByTagName("li")[2];
    altura.textContent = pockemon.height;

    let peso = document.getElementsByTagName("li")[3];
    peso.textContent = pockemon.weight;

    let habilidades = document.getElementsByTagName("li")[4];
    let ability = "";  

    if (pockemon.abilities.length > 1) {

        arr = pockemon.abilities;
       
        arr = arr.map(function(elem) {
           ability += elem.ability.name + " ";      
            
        })         
    } else { ability = pockemon.abilities[0].ability.name;   }

    habilidades.textContent = ability;     
 }


//Lamada al Buscador
btn.addEventListener("click", buscar);




