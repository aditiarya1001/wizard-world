const apiUrl = "https://harry-potter-api-en.onrender.com/spells";
// This line defines a constant variable named apiUrl and assigns it 
// the value of the API endpoint from which we will fetch the spells.

const spellsContainer = document.getElementById("spells-container");
// This line finds an HTML element with the ID "spells-container" and assigns 
// it to the variable spellsContainer. It will be used to display the buttons 
// representing the spells.

const outputSection = document.getElementById("output");
// This line finds an HTML element with the ID "output" and 
// assigns it to the variable outputSection. It will be used 
// to display the details of a selected spell.

// Function to fetch all spells from the API
async function fetchSpells() {
  // This line defines an asynchronous function named fetchSpells 
  // which is responsible for fetching the spells from the API. 
  // It uses the fetch function to make an HTTP request and returns 
  // the parsed JSON response.

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
}
// This block sets up a try-catch structure. Inside the try block, 
// the code attempts to fetch the spells from the API using the fetch()
// function and awaits the response. If an error occurs during the fetching 
// process, it will be caught in the catch block, and the error will be 
// logged to the console.

// Function to display spell details
function displaySpellDetails(spell) {
  // This line declares a function named displaySpellDetails that takes a 
  // spell object as a parameter. This function is responsible for creating 
  // an HTML element that displays the details of a spell. It returns the 
  // created element.

   const spellDetails = document.createElement("div"); 
   //This above line creates a new div element 
  // using the document.createElement() method 
  //and assigns it to the variable spellDetails. 
  // This element will serve as a container for the spell details.

  spellDetails.classList.add("spell-details");
// This line adds the CSS class "spell-details" to the spellDetails element 
// using the classList.add() method. This allows you to apply specific styling 
// to the spell details container.

  const spellName = document.createElement("h1");
  //this line works as we click on any spell 
  //the heading of the spell is in bold letters
  // This line creates a new h4 (heading) element using the 
  // document.createElement() method and assigns it to the variable 
  // spellName. This element will be used to display the 
  // name of the spell.

  spellName.textContent = spell.spell;

  // This line sets the textContent property of the spellName 
  // element to the spell property of the spell object. 
  // It assigns the name of the spell as the text content 
  // of the heading element.

  // The textContent is the DOM property that is used to set text content 
  // for the HTML element or get the text content written inside that element. 
  // If you set the text using textContent for an element, then the other child 
  // elements will be removed and only this text will be added in that element.

  spellDetails.appendChild(spellName);
// This line appends the spellName element as a child of the spellDetails element. 
// It adds the spell name heading inside the spell details container.

  const spellUse = document.createElement("h5");
  // This line creates a new p (paragraph) element using the document.createElement() 
  // method and assigns it to the variable spellUse. This element will be used to 
  // display the use of the spell.

  spellUse.textContent = `Use: ${spell.use}`;
  // This line sets the textContent property of the spellUse element to a string that 
  // includes the word "Use:" followed by the use property of the spell object. 
  // It assigns the usage information of the spell as the text content of the paragraph element.

  spellDetails.appendChild(spellUse);
  // This line appends the spellUse element as a child of the spellDetails element. 
  // It adds the spell usage paragraph inside the spell details container, 
  // below the spell name heading.

  return spellDetails;
  // This line returns the spellDetails element. The function has created the spell 
  // details container, populated it with the spell name and usage information, 
  // and now returns the container element.

}

// Function to display spells on the webpage
function displaySpells(spells) {
  spellsContainer.innerHTML = "";
  // This line sets the innerHTML property of the spellsContainer element 
  // to an empty string. It clears the existing content inside the spellsContainer 
  // element, ensuring that it's empty before displaying the spell buttons.

  if (spells === null) {
  // This conditional statement checks if the spells parameter is null. 
    // If it is null, it means there was an error fetching the spells, 
    // so an error message will be displayed in the spellsContainer element. 
    // Otherwise, the spell buttons will be created and added to the 
    // spellsContainer element.   

    const errorMessage = document.createElement("p");
    // This line creates a new p (paragraph) element using the document.
    // createElement() method and assigns it to the variable errorMessage. 
    // This element will be used to display the error message.

    errorMessage.textContent = "Failed to fetch spells.";
  // This line sets the textContent property of the errorMessage element to the string 
  // "Failed to fetch spells.". It assigns the error message to be displayed.
    spellsContainer.appendChild(errorMessage);
    // This line appends the errorMessage element as a child of the spellsContainer element. 
    // It adds the error message paragraph to the spellsContainer, displaying it on the webpage.
  } 
  else {
    spells.forEach((spell) => {
       // This line uses the forEach method to iterate over each spell in the spells array. 
      // For each spell, the code inside the arrow function will be executed.      
      
      const spellButton = document.createElement("button");
      // This line creates a new button element using the document.createElement() 
      // method and assigns it to the variable spellButton. 
      // This element will represent a spell button.

      spellButton.classList.add("btn", "btn-dark",  "spell-button");
// This line adds multiple CSS classes to the spellButton element using the classList.add() method. 
// The classes "btn", "btn-primary", and "spell-button" will be applied to the spell button, 
// allowing you to style it accordingly.

      spellButton.textContent = spell.spell;
      // This line sets the textContent property of the spellButton element to the spell property 
      // of the current spell object. It assigns the name of the spell as 
      // the text content of the button.

      spellButton.addEventListener("click", async () => {
        // This line adds an event listener to the spellButton element for 
        // the click event. When the button is clicked, the event listener 
        // function will be triggered.

        const spellDetails = displaySpellDetails(spell);
        // This line calls the displaySpellDetails function, passing the current spell 
        // object as an argument. It returns the spell details element 
        // (created using the displaySpellDetails function) 
        // based on the provided spell.

        outputSection.appendChild(spellDetails);
        // This line appends the spellDetails element as a child of the outputSection element. 
        // It adds the spell details to the outputSection, displaying them on the webpage.
       
        spellButton.disabled = true;
        // This line sets the disabled property of the spellButton element to true. 
        // It disables the spell button, preventing further clicks on it.
        
        // Scroll to the output section
        outputSection.scrollIntoView({ behavior: "smooth", block: "end" });
        // This line scrolls the outputSection element into view using the scrollIntoView() method. 
        // The behavior: "smooth" option adds a smooth scrolling effect, and the block: "end" option ensures 
        // that the end of the outputSection is aligned at the top of the visible area.
      });

      spellsContainer.appendChild(spellButton);
      // This line appends the spellButton element as 
      // a child of the spellsContainer element.
      //  It adds the spell button to the spellsContainer, 
      //  displaying it on the webpage.
    });
  }
}

// Fetch and display spells
fetchSpells().then((spells) => {
  // Fetch the spell:
  // This is a function call to the fetchSpells function, 
  // which is an asynchronous function responsible for fetching 
  // the spells from the API. It returns a promise.
  // This line initiates the process of fetching the spells 
  // from the API by calling the fetchSpells function. 
  // The function returns a promise that will resolve with 
  // the fetched spells data. The then method is used to handle 
  // the resolved promise. The spells parameter in the callback 
  // function represents the fetched spells.

//   .then((spells) => { ... })

// This is a promise chain. The then method is used to handle 
// the resolved promise returned by the fetchSpells function. 
// It takes a callback function with the spells parameter, 
// which represents the fetched spells.

  displaySpells(spells);
  // This line calls the displaySpells function and passes the fetched spells 
  // as an argument. The purpose is to display the spells on the webpage based 
  // on the fetched data.

  // Inside the then callback function, the displaySpells 
  // function is called and passed the spells as an argument. 
  // This is done to display the spells on the webpage based 
  // on the fetched data.
});


