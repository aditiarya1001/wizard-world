
const apiURL = "https://harry-potter-api-en.onrender.com/db";

fetch(apiURL).then((res) => res.json()).then((data) => {
    console.log(data.characters)

    data.characters.forEach(element => 
        document.getElementById("main").innerHTML += 
            '<div id="character">' +
            '<img src="' + element.image + '" width="200px" height="100px">' +
            '<div id="name">' + element.character + '</div>') +
            '</div>'
}).catch((error) => console.log(error));