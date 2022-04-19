const list = document.querySelector("#list");

fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => makeCards(data.results))

function makeCards(charactersArray) {
    const cardContainer = document.querySelector('#card-container')
    //console.log(charactersArray)
    charactersArray.forEach(character => {
        cardContainer.innerHTML = cardContainer.innerHTML +
        `<h2>${character.name}</h2>
        <img src=${character.image}></img>
        `
        //console.log(character.name);
    });
}