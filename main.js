/* deg
gaseg
serga alt+shift+a = comentar lo que subraye */


alert("Bienvenido a FashionFor2")
alert("A continuación, ingresa tus datos para proceder con la compra")


let nombre = prompt("Ingrese su nombre")
while(nombre === "" || nombre === null){
    console.log("El usuario no ha ingresado su nombre");
    alert("Por favor ingrese su nombre");
    nombre = prompt("Ingrese su nombre");
}

let apellido = prompt("Ingrese su apellido")
while(apellido === "" || apellido === null){
    console.log("El usuario no ha ingresado su apellido");
    alert("Por favor ingrese su apellido");
    apellido = prompt("Ingrese su apellido");
}

alert("Hola "+ nombre + " " + apellido + ", queremos agradecer tu interes por adquirir los productos de nuestra tienda. Para poder continuar requerimos que ingreses tu edad")
console.log("La persona " + nombre + " " + apellido + " se está registrando en tu tienda. Espera confirmación de edad para saber si se autoriza o no su compra.")

let mascota = prompt("Ingrese el nombre de su mascota.")
while(mascota === " " || mascota === null){
    console.log("El usuario no ha ingresado el nombre de su mascota");
    alert("Por favor ingrese el nombre de su mascota");
    mascota = prompt("el nombre de su mascota");
}

function agregarEdad(){

    let edad = parseInt(prompt("Ingrese su edad"))

    while(isNaN(edad) || edad<18 ){
        
        if(isNaN(edad)){

            alert("Lo lamento, debes ingresar solo números.");
        }   else{
                alert("Lo lamento, debes ser mayor de edad para registrarte como comprador.");
            }

        edad = parseInt(prompt("Ingrese su edad nuevamente"));

    }
            
            alert("Confirmamos tu registro de comprador con éxito.");
            console.log("Adulto confirmado.");

}

agregarEdad()



alert("A continuación, te mostramos los productos disponibles con sus respectivos precios.")




const inventario = ["accesirio", "camisa", "arnes", "platos"];  //array con productos 
const cantidadInventario = [ 3, 0, 0, 0]; //array de cantidades de productos disponibles y agotados

console.log( inventario);

cantidadInventario.forEach(

        function(proveedor){
            console.log(proveedor + 10)
        }
    )
    

const vacio = cantidadInventario.find (  (X)=> x=0  )
console.log(vacio)

/*
cantidadInventario.forEach(

    const doble = traeProveedor.map( 
        
        function(sumar){
            return sumar +10
        }
    )
        
)*/







function compraOnline(){

    const accesorio = 15
    alert("Accesorio para perro talla S $ 15.00");
    const envio = 5
    alert("Costo del envío $ 5.00");

    alert("Confirme si desea proceder con la compra.")
    let confirmacion = prompt("Escribe SI si deseas continuar o NO si deseas anular la compra").toLocaleUpperCase().trim()

    if(confirmacion === "NO" ){
        alert(nombre + " " + apellido + " " + "esperamos que vuelvas pronto.");
        return; // Salir de la función si el usuario decide cancelar la compra
    }

    console.log("El usuario confirmó que desea continuar con la compra.")
    alert(nombre + " " + "gracias por tu confirmación.")

    let totalCalculado = accesorio + envio
    alert("El costo total de su pedido es" + " " + totalCalculado);

    let dineroIngresado = parseInt(prompt("Ingresa un valor en número entero para continuar con su compra"))
    if(isNaN(dineroIngresado)){
        alert("Lo sentimos pero el valor ingresado es incorrecto. Requerimos que se ingrese un valor en número entero para poder continuar con la compra. Gracias.")
        return; // Salir de la función si el usuario no ingresa un número
    }

    while (dineroIngresado < totalCalculado){
        const dineroFaltante = totalCalculado - dineroIngresado;
        alert("La cantidad ingresada es insuficiente para completar tu compra.");
        dineroIngresado = parseInt(prompt("Vuelva a ingresar un valor en número entero para continuar con su pedido."))
    }

    const cambio = dineroIngresado - totalCalculado
    alert("Su cambio es de" + " " + cambio + ". Agradecemos su compra y esperamos que vuelva pronto.")


}

compraOnline()



const fechaEntrega = new Date(2023,11,29,10,30,0,0)
console.log(fechaEntrega);
alert("La fecha de entrega será el " + fechaEntrega);





function Cliente(nombre, apellido, edad){
    this.nombre =  nombre;
    this.apellido = apellido;
    this.edad = edad;
}

const cliente3 = new Cliente(nombre, apellido, 30);
console.log(cliente3);


const ventasMensual = [cliente3];
console.log(ventasMensual.length);

ventasMensual.push(new Cliente ("Nicolas", "Garoni", 43));

ventasMensual.shift(); // Eliminar el primer elemento del array


console.log(ventasMensual);
console.log(ventasMensual[0]);

let clienteTop = ventasMensual[0];

ventasMensual[0] = new Cliente("Max", "Figueroa", 70); //Modificar un cliente existente

console.log(ventasMensual[0]);

console.log(ventasMensual.includes(clienteTop)); // Verificar si el cliente original todavía está en la lista
console.log(ventasMensual.includes(new Cliente("Nicolas", "Garoni", 43))); // Verificar si un cliente específico está en la lista





function aviso(){

    alert("Antes de tu partida queremos comunicarte que " + mascota + " y tu han sido seleccionados para el concurso de ropa")


    alert("Confirmar si acepta los terminos y condiciones del concurso para continuar participando.")
    let propuesta = prompt("Escribe SI si deseas continuar o NO si deseas cancelar tu participación en el concurso.").trim()

    if(propuesta === "NO" ){
        alert(nombre + " y " + mascota + " " + "esperamos verlos en un proximo concurso.");
        return; // Salir de la función si el usuario decide cancelar su particion
    }

}


aviso()


const Concurso = function (cliente,mascota,participante){
        this.cliente=cliente
        this.mascota=mascota
        this.participante=participante
}


let concurso1 = new Concurso ("Titi", "Pera", "uno")
let concurso2 = new Concurso ("Samantha", "flor", "dos")
let concurso3 = new Concurso ("Pedro", "Max", "tres")
let concurso4 = new Concurso ("Manuel", "Tao", "cuatro")
let concurso5 = new Concurso ("Liliana", "Cleo", "cinco")


let lista = [concurso1,concurso2,concurso3,concurso4,concurso5]

const filtrarBtn = document.getElementById("filtrar");
filtrarBtn.addEventListener("click", filtrarParticipante);

const agregarParticipante = document.getElementById("agregar")
agregarParticipante.addEventListener("click", filtrarParticipante)

function filtrarParticipante(){

    const body = document.querySelector("body")
    const input = document.getElementById("filtrarP").value
    const palabraClave = input.trim().toUpperCase()
    const resultado = lista.filter((concurso) => concurso.cliente.toUpperCase().includes(palabraClave))

    if(resultado.length > 0){
        const container = document.createElement("div")

        resultado.forEach((concurso)=> {
            const card = document.createElement("div")

            const cliente= document.createElement("h2")
            nombre.textContent= concurso.cliente
            card.appendChild(cliente)

            const mascota = document.createElement("p")
            mascota.textContent = `ascota: ${concurso.mascota}`
            card.appendChild(mascota)

            const participante = document.createElement("p")
            participante.textContent = `Participante: ${concurso.participante}`
            card.appendChild(participante)


            container.appendChild(card)

        })

        body.appendChild(container)

    }else{
        alert("No se encontrar resultados con tu busqueda.")
    }

}



function agregarParticipante(){
    const form = document.createElement("form")
    form.innerHTML= `
    
    <label for="cliente-input">Nombre:</label>
    <input id="cliente-input" type="text" required>
        
    <label for="mascota-input">Mascota:</label>
    <input id="mascota-input" type="text" required>

    <label for="participante-input">Numero de participacion:</label>
    <input id="participante-input" type="text" required>

    <button type="submit">Agregar</button>
    `

    form.addEventListener("submit", function(event){
        event.preventDefault();



        const clienteInput= document.getElementById("cliente-input").value.trim()
        const mascotaInput= document.getElementById("mascota-input").value.trim()
        const participanteInput= document.getElementById("participante-input").value.trim()

        if ( clienteInput==="" || mascotaInput === "" || participanteInput=== ""){
            alert("Datos incorrectos")
            return;
        }

        if(lista.some( (elemento) => elemento.cliente === clienteInput)){
                    alert("El cliente ya existe en la lista")
                    return;
        }

        const concurso = new Concurso(clienteInput,mascotaInput,participanteInput)
        lista.push(concurso)
    })

    document.body.appendChild(form);
    
}







/* for(let i = 1; i <= 15; i++){
    if(i == 7 || i == 12){
        continue;
    }

    console.log("el numero es " + i )
} */