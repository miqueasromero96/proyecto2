// contiene opeacion o resultado
let parcial ="";

// eleemento donde se colocan las operaciones reaizadas
let operacionRealizada = document.getElementById("operacionRealizada");
// elemento donde se coloca el resultado
let txtResultado =document.getElementById("txtResultado");

// ultimo operador seleccionado //
let operacionSeleccionado = "";

 // numero ingreso
let numero = "";

// para deeterminar si lo ultimo presionado es un numero o una operacion
let ultimoDigitopPresionado = "";

function operador(num){
	// concateno el numero
	numero = numero + num;
	// concateno la operacion hasta el momento
	parcial = parcial + num;
	// muestro 
	operacionRealizada.innerHTML = parcial;

	// controlamos la divison por 0
   if (numero== "0" && operacionSeleccionado=="/") {
   	limpiar();
   	txtResultado.innerHTML = "undefined";
   	return;
   }
   // guardo el tipo de tecla presionado por ultima vez
    if (ultimoDigitopPresionado == 'operacion'){
   	ultimoDigitopPresionado = 'numero'
   }

}

// detecto cuando se presiona una operacion 
function operacion(oper){
	// guardo la operacion que eligio
	operacionSeleccionado = oper;
	// actualizo el tipo de letra seleccionado
	ultimoDigitopPresionado = "operacion"
	// armando la formula matematica
	parcial = parcial + oper;
	numero = "";
	operacionRealizada.innerHTML = parcial;
}
// realizo el calculo de la formula matematica cuando presiona =
function calculo(){
	// con eval evaluo la formula matematica que esta en formato string
	parcial = eval(parcial);
	txtResultado.innerHTML = parcial;
	// vuelve a convertir string por si contiene la formula
	parcial =parcial.toString();
	numero = "";

	operacionRealizada.innerHTML = parcial;
}

// funcion que limpia todo
function limpiar(){
	operacionSeleccionado = "";
	parcial = "";
	txtResultado.innerHTML = "";
    numero = ""
    operacionRealizada.innerHTML = 0;
}
