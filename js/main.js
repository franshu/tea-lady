var print= document.getElementaryById(clientes);


function mostrarData(){
var nombre = document.getElementaryById(name).value;
var apellido = document.getElementaryById(lastname).value;
var correo = document.getElementaryById(email).value;
var direccion = document.getElementaryById(adress).value;
var telefono = document.getElementaryById(phone).value;

}

var seccion2 = ("<br>" + "Nombre: " + nombre + "<br>" + "<br>" + "Apellido: " + apellido +  "<br>" + "<br>" + "Mail: " + correo +  "<br>" + "<br>" + "Dirección: " + direccion +  "<br>" + "<br>" + "Teléfono: " + telefono);
    print.innerHTML = (seccion2);
