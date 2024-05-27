import Contact from "../models/Contact.js";
import { bst } from "./dependencies.js";

let agregar = document.getElementById("agenda-btn")
let buscar = document.getElementById("searchBtn")
let minimo = document.getElementById("min")
let maximo = document.getElementById("max")
let imprimir = document.getElementById("imprimir")

agregar.addEventListener("click", () => {
    let nombre = document.getElementById("firstName").value
    let apellido = document.getElementById("lastName").value
    let numeroCel = document.getElementById("phoneNumber").value
    
    let persona = new Contact(nombre, apellido, numeroCel)
    let confirm = bst.agregar(persona)

    if(confirm){
        Swal.fire({
            title: "Exito",
            text: "Videojuego agregado",
            icon: "success"
        });
    }
})
buscar.addEventListener("click", () => {
    let buscarTxt = document.getElementById("searchTxt").value
    
    let confirm = bst.buscarMain(buscarTxt)

    if(confirm){
        Swal.fire({
            title: "Videojuego encontrado",
            text: "Nombre: " + confirm.firstName + "Apellido: " + confirm.lastName + "Numero de Celular: " + confirm.phoneNumber,
            icon: "info"
        })
    }
    else{
        Swal.fire({
            title: "Videojuego NO encontrado",
            text: "No se encontro el videojuego",
            icon: "error"
        })
    }
})

minimo.addEventListener("click", () =>{
    let confirm = bst.minimoMain()

    if(confirm){
        Swal.fire({
            title: "Videojuego encontrado",
            text: "Nombre: " + confirm.firstName + "Apellido: " + confirm.lastName + "Numero de Celular: " + confirm.phoneNumber,
            icon: "info"
        })
    }
    else{
        Swal.fire({
            title: "Videojuego NO encontrado",
            text: "No se encontro el videojuego",
            icon: "error"
        })
    }
})
maximo.addEventListener("click",() => {
    let confirm = bst.maximoMain()

    if(confirm){
        Swal.fire({
            title: "Videojuego encontrado",
            text: "Nombre: " + confirm.firstName + "Apellido: " + confirm.lastName + "Numero de Celular: " + confirm.phoneNumber,
            icon: "info"
        })
    }
    else{
        Swal.fire({
            title: "Videojuego NO encontrado",
            text: "No se encontro el videojuego",
            icon: "error"
        })
    }
})
let info = document.getElementById("info")

imprimir.addEventListener("click", ()=>{
    bst.recorridoMain(contact => {
        imprimir.innerHTML = "";

        bst.recorridoMain(contact => {
            let data = document.createElement('p');
            data.textContent = "Nombre: " + contact.firstName + " Apellido: " + contact.lastName + " Numero de celular: " + contact.phoneNumber
            info.appendChild(data);
        });
    });
})
