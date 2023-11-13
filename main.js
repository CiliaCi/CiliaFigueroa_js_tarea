document.addEventListener("DOMContentLoaded", function() {

alert("Bienvenido a FashionFor2");
Swal.fire("Bienvenido a FashionFor2");
alert("A continuación, ingresa tus datos para proceder con la compra");

Swal.fire({
    title: "The Internet?",
    text: "That thing is still around?",
    icon: "question"
  });

let nombre = "";
let apellido = "";
let edad = 0;
let mascota = "";
let pais = "";

// Función para validar nombre, apellido, mascota y país

function validarTexto(texto, mensaje) {
    let valor = prompt(mensaje);
    while (valor === "" || !/^[a-zA-Z]+$/.test(valor)) {
        console.log("El usuario no ha ingresado " + texto);
        alert("Por favor ingresa un " + texto + " válido sin números o caracteres especiales.");
        valor = prompt("Ingrese su " + texto + ":");
    }
    return valor;
}

// Función para validar la edad del cliente
function validarEdad() {
    let edad = parseInt(prompt("Ingrese su edad"));
    while (isNaN(edad) || edad < 18) {
        if (isNaN(edad)) {
            alert("Lo lamentamos, debes ingresar solo números para la edad.");
        } else {
            alert("Lo lamentamos, debes ser mayor de edad para registrarte como comprador.");
        }
        edad = parseInt(prompt("Ingrese su edad nuevamente:"));
    }
    return edad;
}



    // Función para validar el formulario de registro
    function validarRegistro(nombre, mascota, pais) {
        if (!/^[a-zA-Z]+$/.test(nombre) || !/^[a-zA-Z]+$/.test(mascota) || !/^[a-zA-Z]+$/.test(pais)) {
            alert("Por favor, ingresa nombres válidos sin números o caracteres especiales.");
            return false;
        }
        return true;
    }


    

nombre = validarTexto("nombre", "Ingrese su nombre");
apellido = validarTexto("apellido", "Ingrese su apellido");
edad = validarEdad();
mascota = validarTexto("nombre de su mascota", "Ingrese el nombre de su mascota");
pais = validarTexto("país", "Ingrese su país");

alert("Hola " + nombre + " " + apellido + ", gracias por tu registro.");


alert("A continuación, te mostramos los productos disponibles con sus respectivos precios.");

const productos = [
    { nombre: "Accesorio para perro talla S", precio: 15 },
    { nombre: "Camisa para mascota", precio: 25 },
    { nombre: "Arnés para perro", precio: 20 },
    { nombre: "Plato para mascota", precio: 10 }
];


let carrito = [];
productos.forEach((producto, index) => {
    let opcion = prompt(`Deseas agregar ${producto.nombre} - $${producto.precio} al carrito? (SI/NO)`);
    while (opcion.toUpperCase() !== "SI" && opcion.toUpperCase() !== "NO") {
        alert("Por favor, ingresa SI o NO.");
        opcion = prompt(`Deseas agregar ${producto.nombre} - $${producto.precio} al carrito? (SI/NO)`);
    }
    if (opcion.toUpperCase() === "SI") {
        carrito.push(producto);
    }
});

let inventario = [5, 5, 5, 5]; // Cantidad disponible de cada producto

console.log("Inventario actual:");
productos.forEach((producto, index) => {
    console.log(`${producto.nombre} - Disponibles: ${inventario[index]}`);
});

let precioTotal = 0;
carrito.forEach(producto => {
    precioTotal += producto.precio;
});

const precioEnvio = 5;
precioTotal += precioEnvio;

alert(`Precio total de tu compra: $${precioTotal} (incluyendo $${precioEnvio} de envío)`);

let dineroIngresado = parseInt(prompt("Ingresa la cantidad con la que vas a pagar:"));
while (isNaN(dineroIngresado) || dineroIngresado < precioTotal) {
    alert("Cantidad insuficiente. Por favor, ingresa un monto igual o mayor al total de la compra.");
    dineroIngresado = parseInt(prompt("Vuelve a ingresar la cantidad con la que vas a pagar:"));
}

let vuelto = dineroIngresado - precioTotal;
if (vuelto > 0) {
    alert(`Gracias por tu compra. Tu vuelto es: $${vuelto}`);
} else {
    alert("Gracias por tu compra. Exacto cambio sería apreciado.");
}

const fechaEntrega = new Date(2023, 11, 29, 10, 30, 0, 0);
alert(`La fecha de entrega será el ${fechaEntrega}`);

alert( nombre + " tu y tu mascota " + mascota + " han sido seleccionados para un concurso.");
alert("Para participar, por favor, vuelve a ingresar tus datos en la sección 'Agregar'.");
console.log( nombre + " y su mascota " + mascota + " fueron seleccionados para el concurso.")



// Array de participantes en el concurso
function Concurso(nombre, mascota, pais) {
    this.nombre = nombre;
    this.mascota = mascota;
    this.pais = pais;
}

let concurso1 = new Concurso("Titi", "Pera", "Cuba");
let concurso2 = new Concurso("Samantha", "Flor", "Ecuador");
let concurso3 = new Concurso("Pedro", "Max", "Argentina");
let concurso4 = new Concurso("Manuel", "Tao", "Colombia");
let concurso5 = new Concurso("Liliana", "Cleo", "USA");

let participantes = [concurso1, concurso2, concurso3, concurso4, concurso5];


// Ejemplo de cómo agregar los elementos del formulario al DOM
const formulario = document.createElement("div");

formulario.innerHTML = `
    <label for="nombre-input">Nombre:</label>
    <input id="nombre-input" type="text" required><br>

    <label for="mascota-input">Mascota:</label>
    <input id="mascota-input" type="text" required><br>

    <label for="pais-input">País:</label>
    <input id="pais-input" type="text" required><br>

    
`;

document.body.appendChild(formulario);







// Obtener referencia a los elementos del DOM

const filtrarBtn = document.getElementById("filtrar");
const agregarBtn = document.getElementById("agregar");
//const participantesContainer = document.getElementById("participantes-container");
const participantesContainer = document.createElement("div");
participantesContainer.id = "participantes-container";
document.body.appendChild(participantesContainer);


 // Event listener para el botón de filtrar
filtrarBtn.addEventListener("click", () => {
    const filtroInput = document.getElementById("filtrar-input").value.trim().toUpperCase();
    const resultados = participantes.filter(participante => participante.nombre.toUpperCase().includes(filtroInput));

    if (resultados.length > 0) {
        participantes = resultados;
        renderizarParticipantes();
        alert("Participante encontrado.");
    } else {
        alert("No se encontraron participantes con ese nombre.");
    }
});




 // Event listener para el botón de agregar
 agregarBtn.addEventListener("click", () => {
    const nombreInput = document.getElementById("nombre-input").value.trim();
    const mascotaInput = document.getElementById("mascota-input").value.trim();
    const paisInput = document.getElementById("pais-input").value.trim();

    if (validarRegistro(nombreInput, mascotaInput, paisInput)) {
        const nuevoParticipante = new Concurso(nombreInput, mascotaInput, paisInput);
        participantes.push(nuevoParticipante);
        renderizarParticipantes();

        // Limpiar los campos del formulario después de agregar un participante
        document.getElementById("nombre-input").value = "";
        document.getElementById("mascota-input").value = "";
        document.getElementById("pais-input").value = "";

        // Mostrar mensaje en consola
        console.log(`El participante ${nombreInput} y su mascota ${mascotaInput} se han registrado para el concurso.`);
    }
});






// Función para renderizar la lista de participantes en el DOM

function renderizarParticipantes() {
    participantesContainer.innerHTML = ""; // Limpiar el contenedor antes de renderizar nuevamente

    participantes.forEach(participante => {
        const participanteDiv = document.createElement("div");
        participanteDiv.className = "participante-card";

        const nombreP = document.createElement("p");
        nombreP.textContent = `Nombre: ${participante.nombre}`;
        participanteDiv.appendChild(nombreP);

        const mascotaP = document.createElement("p");
        mascotaP.textContent = `Mascota: ${participante.mascota}`;
        participanteDiv.appendChild(mascotaP);

        const paisP = document.createElement("p");
        paisP.textContent = `País: ${participante.pais}`;
        participanteDiv.appendChild(paisP);

        participantesContainer.appendChild(participanteDiv);
    });
}



renderizarParticipantes();




//GUARDAR DATOS DE INICIO DE SESION EN STORAGE

const inputUsuario = document.querySelector("#inputUsuario");
const inputClave = document.querySelector("#inputClave");
const inicioSesion = document.getElementById("inicioSesion");


function guardarDatos(){

    localStorage.setItem("usuario", inputUsuario.value);
    localStorage.setItem("clave", inputClave.value);
}

inicioSesion.addEventListener("click", () => {
    guardarDatos();

    const usuarioIngresado = inputUsuario.value.toLowerCase();
    const usuarioFalso = "Usuario incorrecto";
    const comprobacion = usuarioIngresado === "pepe" ? "Usuario existe" : usuarioFalso;


    console.log(comprobacion);

} )



  // Ruta al archivo JSON local
  const jsonFilePath = "comentarios.json";


  fetch(jsonFilePath)
    .then((response) => {

      if (!response.ok) {
        throw new Error(`Error al cargar el archivo JSON: ${response.status}`);
      }
      return response.json(); 
    })
    .then((data) => {

      mostrarComentarios(data.comentarios);
    })
    .catch((error) => {
      console.error(error);
    });


  function mostrarComentarios(comentarios) {
   
    console.log("Comentarios cargados:", comentarios);

   
    const comentariosContainer = document.getElementById("comentarios-container");

    comentarios.forEach((comentario) => {
      const comentarioDiv = document.createElement("div");
      comentarioDiv.innerHTML = `
        <p><strong>${comentario.producto}:</strong> ${comentario.opinion}</p>
      `;
      comentariosContainer.appendChild(comentarioDiv);
    });
  }



});