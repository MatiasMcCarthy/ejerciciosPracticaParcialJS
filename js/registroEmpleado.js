// Validar que todos los campos estén completos. Si algún campo está vacío o la edad
// es menor a 18, mostrar un mensaje de advertencia en rojo.
// Si los datos son válidos, agregar la información a un objeto y mostrarlo en
// consola, que será enviado al Backend.
// Limpiar los campos después de presionar el botón.
let mensaje = document.getElementById('mensaje');
function AgregarEmpleado(){
let botonAgregar=document.getElementById('AgregarEmpleado');
botonAgregar.addEventListener('click',()=>{
    validarCampos();
    
})
    
}
function validarCampos(){
let nombre=document.getElementById('nombre').value;
let cargo=document.getElementById('cargo').value;
let edad=parseInt(document.getElementById('edad').value);
let departamento = document.getElementById('selectDepartamento').value;
 mensaje.textContent = ""; // limpiar mensaje anterior
 mensaje.style.color = "red"; // por defecto en rojo

if(!nombre||!cargo||!edad||!departamento){
    mensaje.textContent="Ingrese todos los campos";
   
    return;
}if(edad<18){
    mensaje.textContent="Debe ser mayor de 18";
    return;
}else{
    let empleado={
        nombre:nombre,
        edad:edad,
        cargo:cargo,
        departamento:departamento
    }
    console.log("Empleado Registrado: ",empleado);
    document.getElementById('formulario').reset();
    mensaje.textContent = "Empleado registrado correctamente.";
    mensaje.style.color = "green";

}


}

document.addEventListener('DOMContentLoaded', function() {
    AgregarEmpleado();
});


