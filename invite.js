var formu = document.getElementById('formu');

formu.onsubmit = function (evento) {

    evento.preventDefault();

    var name = document.getElementById('name');
    var nombre = name.value;
    if (nombre.length <= 0) {
        //if(!name.lenght)
        name.classList.add('error');
    }


    var age = document.getElementById('age');
    var edad = age.value;
    if (edad < 18 || edad > 120) {
        age.classList.add('error');
    }


    var estado = '';
    var soltera = formu.elements[2];
    // console.log(soltera);
    var casada = formu.elements[3];
    if (soltera.checked) {
        estado = soltera.value
    }
    else if (casada.checked) {
        estado = casada.value
    }
    else {
        estado = 'vacio'
    }
    // console.log(estado);


    var select = document.getElementById('nac');
    var i = select.selectedIndex
    var nacionalidad = select.options[i].value;
    console.log(nombre, edad)
    console.log(estado)
    console.log(nacionalidad)


    if (estado === 'vacio') {
        soltero_form.nextElementSibling.classList.add("error")
        casado_form.nextElementSibling.classList.add("error")
    }


    if (nombre.length > 0 && (edad > 18 && edad < 120) && estado !== 'vacio') {
        agregarInvitado(nombre, edad, estado, nacionalidad)
    }

}

function agregarInvitado(nombre, edad, estado, nacionalidad) {
    var listaDeInvitados = document.getElementById('listaInvitados');

    var nuevoDiv = document.createElement('div');
    nuevoDiv.id = 'datos-invitades';
    var lista = document.createElement('ul');
    nuevoDiv.appendChild(lista);

    // var parrafo = document.createElement('p');
    var nombreInvitade = document.createElement('input');
    nombreInvitade.value = nombre;
    lista.appendChild(nombreInvitade);

    var edadInvitade = document.createElement('input');
    edadInvitade.value = edad;
    lista.appendChild(edadInvitade);

    var civilInvitade = document.createElement('input');
    civilInvitade.value = estado;
    lista.appendChild(civilInvitade);

    var nacionInvitade = document.createElement('input');
    nacionInvitade.value = nacionalidad;
    lista.appendChild(nacionInvitade);


    // parrafo.textContent = nombre + ' ' + edad + ' ' + estado + ' ' + nacionalidad + ' ';
    // nuevoDiv.appendChild(parrafo);

    var botonBorrar = document.createElement('button');
    botonBorrar.id = 'boton-borrar';
    botonBorrar.textContent = 'Eliminar invitado';
    var corteLinea = document.createElement('br');

    nuevoDiv.appendChild(botonBorrar);
    nuevoDiv.appendChild(corteLinea);

    listaDeInvitados.appendChild(nuevoDiv);
   

    botonBorrar.onclick = function () {
        botonBorrar.parentNode.remove()
    }




}


