import Contact from "../models/Contact.js";
import { bst } from "./dependencies.js";

let agregar = document.getElementById("agenda-btn");
let buscar = document.getElementById("searchBtn");
let minimo = document.getElementById("min");
let maximo = document.getElementById("max");
let imprimir = document.getElementById("imprimir");

agregar.addEventListener("click", () => {
    let name = document.getElementById("Name").value;
    let genre = document.getElementById("Genre").value;
    let artist = document.getElementById("Artist").value;
    
    let persona = new Contact(name, genre, artist);
    let confirm = bst.agregar(persona);

    if (confirm) {
        Swal.fire({
            title: "Éxito",
            text: "Álbum agregado",
            icon: "success"
        });
    }
});

buscar.addEventListener("click", () => {
    let buscarTxt = document.getElementById("searchTxt").value;
    
    let confirm = bst.buscarMain(buscarTxt);

    if (confirm) {
        Swal.fire({
            title: "Álbum encontrado",
            text: "Nombre: " + confirm.Name + " Género: " + confirm.Genre + " Artista: " + confirm.Artist,
            icon: "info"
        });
    } else {
        Swal.fire({
            title: "Álbum NO encontrado",
            text: "No se encontró el Álbum",
            icon: "error"
        });
    }
});

minimo.addEventListener("click", () => {
    let confirm = bst.minimoMain();

    if (confirm) {
        Swal.fire({
            title: "Álbum encontrado",
            text: "Nombre: " + confirm.Name + " Género: " + confirm.Genre + " Artista: " + confirm.Artist,
            icon: "info"
        });
    } else {
        Swal.fire({
            title: "Álbum NO encontrado",
            text: "No se encontró el Álbum",
            icon: "error"
        });
    }
});

maximo.addEventListener("click", () => {
    let confirm = bst.maximoMain();

    if (confirm) {
        Swal.fire({
            title: "Álbum encontrado",
            text: "Nombre: " + confirm.Name + " Género: " + confirm.Genre + " Artista: " + confirm.Artist,
            icon: "info"
        });
    } else {
        Swal.fire({
            title: "Álbum NO encontrado",
            text: "No se encontró el Álbum",
            icon: "error"
        });
    }
});

let info = document.getElementById("info");

imprimir.addEventListener("click", () => {
    info.innerHTML = "";

    bst.recorridoMain(contact => {
        let data = document.createElement('p');
        data.textContent = "Nombre: " + contact.Name + " Género: " + contact.Genre + " Artista: " + contact.Artist;
        info.appendChild(data);
    });
});
