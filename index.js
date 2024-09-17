const myinput = document.getElementById("myInput");
const myimg = document.getElementById("myimg");
const myresult = document.getElementById("myResult");

async function findPokemon()
{
    
    try{
        let name = myinput.value;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
        const data = await response.json();
        console.log(data);
        let imgsrc = data.sprites.front_default;
        myimg.src = imgsrc;
        myimg.style.display = "block";
        myresult.textContent = `Weight: ${data.weight}, Type: ${data.types[0].type.name}`
    }
    catch(error)
    {
        myimg.src = "";
        myimg.style.display = "none";
        myresult.textContent = `Not Found 😢`;
    }

}
