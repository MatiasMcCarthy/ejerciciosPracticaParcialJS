let botonAgregarPelicula=document.getElementById('agregarPelicula');
let mensaje=document.getElementById('mensaje');

function agregarPelicula(){
botonAgregarPelicula.addEventListener('click',()=>{
    let inputTitulo=document.getElementById('tituloPelicula');
    let inputGenero=document.getElementById('genero');
    let inputAño=document.getElementById('año');
    let inputClasificacion=document.getElementById('clasificacion');
    //Valido que no esten vacios los inputs
    if(!inputTitulo.value||!inputGenero.value||!inputAño.value||!inputClasificacion.value){
        mensaje.textContent="Ingrese todos los datos";
        mensaje.style.color="red";
        inputClasificacion.value='';
        inputAño.value='';
        inputGenero.value='';
        inputTitulo.value='';
        return
    }
    //Valido el valor del año
    if(inputAño.value<=0||inputAño.value<=2024){
         mensaje.textContent="Año Incorrecto";
        mensaje.style.color="red";
        inputClasificacion.value='';
        inputAño.value='';
        inputGenero.value='';
        inputTitulo.value='';
        return
    }
    let tabla=document.getElementById('tabla');//Guardo el elemento Tabla
    let nuevaFila=document.createElement('tr'); //Creo el elemento tr
    let nuevoTitulo=document.createElement('td');//Creo el elemento td
    nuevoTitulo.textContent=inputTitulo.value;// le asigno el valor ingresado en form al la celda titulo
    let nuevoAño=document.createElement('td');//Creo el elemento td
    nuevoAño.textContent=inputAño.value;// le asigno el valor ingresado en form 

    let nuevaClasificacion=document.createElement('td'); //Creo el elemento td
    nuevaClasificacion.textContent=inputClasificacion.value;//Creo Asigno valor ingresado en el form
    nuevaClasificacion.className='celda-clasificacion' //creo una clase

    nuevaClasificacion.addEventListener('mouseenter', () => {//Agrego el evento para capturar el paso del mouse por la celda
  switch (nuevaClasificacion.textContent) {
    case "ATP":
      nuevaClasificacion.style.backgroundColor = "red";
      break;
    case "+13":
      nuevaClasificacion.style.backgroundColor = "blue";
      break;
    case "+16":
      nuevaClasificacion.style.backgroundColor = "yellow";
      break;
    case "+18":
      nuevaClasificacion.style.backgroundColor = "green";
      break;
    default:
      nuevaClasificacion.style.backgroundColor = "black";
  }
});
nuevaClasificacion.addEventListener('mouseleave', () => {
nuevaClasificacion.style.backgroundColor = "";
});


    let nuevoGenero=document.createElement('td');
    nuevoGenero.textContent=inputGenero.value;
    nuevaFila.appendChild(nuevoTitulo);
    nuevaFila.appendChild(nuevoAño);
    nuevaFila.appendChild(nuevoGenero);
    nuevaFila.appendChild(nuevaClasificacion);
    tabla.appendChild(nuevaFila);
    inputClasificacion.value='';
    inputAño.value='';
    inputGenero.value='';
    inputTitulo.value='';



})

}



agregarPelicula();
cambiarColorCeldas();