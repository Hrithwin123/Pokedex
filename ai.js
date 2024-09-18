let content = document.querySelector(".content");
let heading = document.querySelector(".heading");
let button = document.querySelector(".button");

let names = document.querySelector(".name");
let id = document.querySelector(".id");
let weight = document.querySelector(".weight");
let type = document.querySelector(".type");

const baseApi = "https://pokeapi.co/api/v2/pokemon/";

async function pokemon() {
    let searchName = heading.value.toLowerCase();
    let api = baseApi + searchName;
    
    try {
        const response = await fetch(api);
        const data = await response.json();
        
        // Update the DOM with the fetched data
        id.innerText = data.id;
        names.innerText = data.name;
        weight.innerText = data.weight;
        // For types, you need to extract the type names from the array
        type.innerText = data.types.map(typeInfo => typeInfo.type.name).join(", ");
        
    } catch (error) {
        console.log(error);
        alert("Error fetching Pokémon data. Please check the name and try again.");
    }
}

button.addEventListener("click", pokemon);