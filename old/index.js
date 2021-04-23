import "./css/style.css";
import editIcon from "./assets/images/edit.png";
import delIcon from "./assets/images/delete.png";

// DOMElement
const divTodos = document.querySelector(".todos");

// Todo List
let todos2 = [
    {
        index: 1,
        note: "Faire un calin a Mina"
    },
    {
        index: 2,
        note: "Finir ce projet"
    },
    {
        index: 3,
        note: "Trouver du travail"
    },
    {
        index: 4,
        note: "Faire un calin a Mina surtout parce qu'elle est trop mignonne ma petite princesse"
    }
]

// Affichage des todos
for (const todo of todos2) {
    let uneDiv = document.createElement("div");
    uneDiv.className = "todo";
    uneDiv.id = todo.index;
    let unTexte = document.createTextNode("todo.note");

    // IMAGES
    // On commence par creer une div pour y inclure toutes les images
    let divImages = document.createElement("div");
    divImages.className = "todo-images";
    divImages.id = "todo-images";
    let delImg = document.createElement("img");
    editImg.setAttribute('src', editIcon);
    divImages.appendChild(editImg);
    delImg.setAttribute('src', delIcon);
    divImages.appendChild(delImg);

    // EVENTS
    editImg.addEventListener("click", () => {
        console.log("J'ai cliquer sur l'image edit");
    })
    delImg.addEventListener("click", () => {
        console.log("J'ai cliquer sur la croix de suppression");
    })

    // On lis nos deux elements ensemble pour constituer la liste.
    uneDiv.appendChild(divImages);
    uneDiv.appendChild(unTexte);
    const aa = uneDiv.querySelector("todo");

    console.log(aa);
    divTodos.appendChild(uneDiv);
}

// EVENTS
//const submitBtn = document.querySelector("")