let content = document.querySelector(".content")
let heading = document.querySelector(".heading")
let button = document.querySelector(".button")
let dexscreen = document.querySelector(".screen")

let names = document.querySelector(".name")
let id = document.querySelector(".id")
let weight = document.querySelector(".weight")
let type = document.querySelector(".type")

let api = "https://pokeapi.co/api/v2/pokemon/"

let searchName = "none"


async function pokemon(){
    searchName = heading.value.toLowerCase();
    newapi = api + searchName

    try{
        const response = await fetch(newapi);

        const data = await response.json();

        id.innerText = data.id;
        names.innerText = data.name;

        type.innerText = data.types.map((i) => i.type.name).join(", ")

        // type.innerText = data.types.map(typeInfo => typeInfo.type.name).join(", ");
        
        weight.innerText = data.weight;

        dexscreen.style.backgroundImage = `url(${data.sprites.front_default})`
        dexscreen.style.backgroundSize = "cover"
        dexscreen.style.backgroundPosition = "10px"


    }
    catch(error){
        console.log(error)
    }


}

button.addEventListener("click",pokemon)