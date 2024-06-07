let caja = document.getElementById("myDiv");
//Botones de ancho y altura
let aumentarAncho = document.getElementById("aumentarAncho");
let reducirAncho = document.getElementById("reducirAncho");
let aumentarAltura = document.getElementById("aumentarAltura");
let reducirAltura = document.getElementById("reducirAltura");
//input de color y boton mostrar color
let colorSelecionado = document.getElementById("colorSelecionado");
let buttonCambiarColor = document.getElementById("cambiarColor")
//Button the info style
let infoStye = document.getElementById("infoStye");



//Aumentar y Restar  el  altura y ancho

aumentarAncho.addEventListener("click",function () {
    //Obtiene el ancho actual de la caja  devuelce el ancho que tiene
    let tamañoAnchoActual = window.getComputedStyle(caja).width;
    //Convierte el ancho actual de la caja de una cadena con unidad
    //a un numero flotante utilizando parseFloat luego le suma 10 width.
    let nuevoAncho = parseFloat(tamañoAnchoActual) + 10 + "px";
    //Esto aplica el nuevo ancho
    caja.style.width = nuevoAncho;
});

reducirAncho.addEventListener("click",function () {
    let tamañoAnchoActual = window.getComputedStyle(caja).width;
    let nuevoAncho = parseFloat(tamañoAnchoActual) - 10 + "px";
    caja.style.width = nuevoAncho;
});
aumentarAltura.addEventListener("click",function () {
    let tamañoAlturaoActual = window.getComputedStyle(caja).height;
    let nuevoAltura = parseFloat(tamañoAlturaoActual) + 10 + "px";
    caja.style.height = nuevoAltura;
});
reducirAltura.addEventListener("click",function () {
    let tamañoAlturaoActual = window.getComputedStyle(caja).height;
    let nuevoAltura = parseFloat(tamañoAlturaoActual) - 10 + "px";
    caja.style.height = nuevoAltura;
}); 

//Cambiar el color de la caja

//Aca consigue el valor del imput 
colorSelecionado.addEventListener("change", function () {
     valorColor = colorSelecionado.value;
})
//Cuando apreta el boton cambia el color
buttonCambiarColor.addEventListener("click", function () {
    //Cambia el color de la caja
   caja.style.background = valorColor;
})

//mostrar info

infoStye.addEventListener("click", function () {
    let anchoActual = window.getComputedStyle(caja).width;
    let alturaActual = window.getComputedStyle(caja).height;
    let colorCaja = window.getComputedStyle(caja).getPropertyValue("background-color"); // Obtener solo el color de fondo
    alert(`Ancho: ${anchoActual}\nAltura: ${alturaActual}\nColor de fondo: ${colorCaja}`);
});