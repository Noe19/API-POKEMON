
const consultarPokemon = (id,number) => 
{
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)/* aqui esta la api"*/
    .then((response) => {/* aqui nosotros traemos los datos tipo json*/
      return response.json();
    })

    .then((data) => {/* aqui estan los datos jsom*/
      console.log(data);
      console.log(data.sprites.front_default);/* se esa forma navegamos en los datos que deseamos traer*/
      console.log(data.name);
   
      pintarPokemon(data,number)
    
    })

    .catch((error) => {
      console.log(error);
    });
};



const btnSeleccionar = () => 
{
  let primerPokemon = Math.round(Math.random() * 150);
  let segundoPokemon = Math.round(Math.random() * 150);
  consultarPokemon(primerPokemon,1);/* aqui que posicion es la que estan los pokemon*/
  consultarPokemon(segundoPokemon,2);
};

btnSeleccionar()

const lista = document.getElementById("listarpokemon")

const pintarPokemon = (data, id) =>
{
  let item = lista.querySelector(`#pok-${id}`);/* seleccionamos a donde queremos que vaya las imagens e informacion*/

  item.getElementsByTagName("img")[0].setAttribute("src", data.sprites.front_default);/*imagenes de los Pokemones*/

  item.getElementsByTagName("p")[0].innerHTML = data.name;/* [0] significa a la primera etiqueta  es importante que  se ponga las etias */

/*
let poke=''
for(let i=0; i<data.abilities.length;i++)
{
  poke += `<li>${data.abilities[i].ability.name}</li>` 
}
item.getElementsByTagName('ol')[0].innerHTML= poke
*/
let poke=''
for (let i=0; i<data.abilities.length;i++)
{
  poke += `<li>${data.abilities[i].ability.name}</li>`
}
item.getElementsByTagName('ol')[0].innerHTML=poke

}


// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_getelementsbytagname2

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_document_queryselector

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_element_setattribute1