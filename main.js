/* deg
gaseg
serga alt+shift+a = comentar lo que subraye */


alert("Bienvenido a FashionFor2")
alert("A continuación, ingresa tus datos para proceder con la compra")


let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su apellido")
alert("Hola "+ nombre + " " + apellido + ", queremos agradecer tu interes por adquirir los productos de nuestra tienda. Para poder continuar requerimos que ingreses tu edad")
console.log("La persona " + nombre + " " + apellido + " se está registrando en tu tienda. Espera confirmación de edad para saber si se autoriza o no su compra.")

let edad = parseInt(prompt("Ingrese su edad"))


if (edad<18){
    alert("Lo lamento, para gestionar tu perfil de compra requieres ser mayor de edad.")
    console.log("Alerta de menor de edad.")
} else{
    alert(nombre + " Confirmamos tu registro de comprador con exito. Pulsa enter para ir a la sección de productos.")
    console.log("Adulto confirmado.")
}

function compraOnline(){

    const accesorio = 15
    alert("Accesorio para perro talla S $ 15.00");
    const envio = 5
    alert("Costo del envío $ 5.00");
    let totalCalculado = accesorio + envio
    alert("El costo total de su envío es" + " " + totalCalculado)

    let dineroIngresado = parseInt(prompt("Ingresa un valor en número entero para continuar con su pedido."))
    if(isNaN(dineroIngresado)){
        alert("Lo sentimos pero el valor ingresado es incorrecto. Requerimos que se ingrese un valor en número entero para poder continuar con la compra. Gracias.")
        return
    }

    while (dineroIngresado < totalCalculado){
        const dineroFaltante = totalCalculado - dineroIngresado
        alert("La cantidad ingresada es insuficiente para completar tu compra.")
        dineroIngresado = parseInt(prompt("Vuelva a ingresar un valor en número entero para continuar con su pedido."))
    }

    const cambio = dineroIngresado - totalCalculado
    alert("Su cambio es de" + " " + cambio + ". Agradecemos su compra y esperamos que vuelva pronto.")


}



compraOnline()



/* 
for(let i = 1; i <= 15; i++){
    if(i == 7 || i == 12){
        continue;
    }

    console.log("el numero es " + i )
} */
