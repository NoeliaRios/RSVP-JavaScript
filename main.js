var form = document.querySelector('form');
var passwordCorrecto = 'gatitos123';

form.onsubmit = function(evento){
    evento.preventDefault();    

    // for (var i = 0; i < form.elements.length; i++) {
    //     console.log(form.elements[i].value)        
    // }

    var password = document.getElementById('pass')
    if (password.value == passwordCorrecto) {
        
    } else{
        password.classList.add('error');
    }
}





var form = document.querySelector("form");
var select = document.querySelector('select');


form.onsubmit = function(evento) {
  evento.preventDefault();
 
console.log(select.options);  // retorna la colección de elementos options
console.log(select.selectedIndex);  // retorna el índice del valor seleccionado
var indice = select.selectedIndex
select.options[indice]; // retorna el option seleccionado
console.log(select.options[indice]); // retorna el elemento seleccionado.
console.log(select.options[indice].value); // retorna el valor del elemento seleccionado.

}
