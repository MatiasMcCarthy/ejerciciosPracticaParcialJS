
let mensaje=document.getElementById('mensaje');
function AgregarProducto(){
let botonAgregarProducto=document.getElementById('btnAgregarProducto');
botonAgregarProducto.addEventListener('click',()=>{
let tabla=document.getElementById('tabla');
let nombreProducto= document.getElementById('nombreProducto');
let categoria=document.getElementById('selectCategoria');
let precio=document.getElementById('precio');
let stock=document.getElementById('stock');
// Validación
    if (!nombreProducto.value || !categoria.value || !precio.value || !stock.value) {
      mensaje.textContent = "Todos los campos son obligatorios.";
      mensaje.style.color = "red";
      nombreProducto.value='';
      precio.value='';
      stock.value='';
      categoria.value='';
      
      return;
    }
    if(precio.value<=0|| stock.value<=0){
        mensaje.textContent = "Precio y stock deben ser mayor a 0";
        mensaje.style.color = "red";
       nombreProducto.value='';
       precio.value='';
       stock.value='';
       categoria.value='';
       return;
    }

//CREAR FILA CON DATOS
let nuevaFila=document.createElement('tr');
let celdaProducto=document.createElement('td');
celdaProducto.textContent=nombreProducto.value;
let celdaCategoria=document.createElement('td');
celdaCategoria.textContent=categoria.value;
let celdaPrecio=document.createElement('td');
celdaPrecio.textContent=precio.value;
let celdaStock=document.createElement('td');
celdaStock.textContent=stock.value;
nuevaFila.appendChild(celdaProducto);
nuevaFila.appendChild(celdaCategoria);
nuevaFila.appendChild(celdaPrecio);
nuevaFila.appendChild(celdaStock);
tabla.appendChild(nuevaFila);
nombreProducto.value='';
precio.value='';
stock.value='';
categoria.value='';
mensaje.textContent='';
})

}



AgregarProducto();
