
const apiUrl = "https://harry-potter-api-en.onrender.com/characters";
const charactersList = document.getElementById("characters-list");
const characterDetails = document.getElementById("character-details");

// Function to fetch all characters from the API
async function fetchCharacters() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}

// Function to display character details
function displayCharacterDetails(character) {
  characterDetails.innerHTML = `
    <h2>${character.character}</h2>
    <p>Nickname: ${character.nickname}</p>
    <p>Hogwarts House: ${character.hogwartsHouse}</p>
  `;
}

// Function to display characters as buttons
function displayCharacters(characters) {
  characters.forEach((character) => {
    const characterButton = document.createElement("button");
    characterButton.classList.add("btn", "btn-primary", "character-button" ,"character-space");
    characterButton.textContent = character.character;

    characterButton.addEventListener("click", () => {
      displayCharacterDetails(character);
      characterDetails.scrollIntoView({ behavior: "smooth", block: "start"

 });
    });

    charactersList.appendChild(characterButton);
  });
}

// Fetch and display characters
fetchCharacters().then((characters) => {
  if (characters === null) {
    const errorMessage = document.createElement("p");
    errorMessage.textContent = "Failed to fetch characters.";
    charactersList.appendChild(errorMessage);
  } else {
    displayCharacters(characters);
  }
});
