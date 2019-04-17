var formu = document.querySelector('form');

formu.onsubmit = function(evento){

    evento.preventDefault();

    var nombre = document.getElementById('username');
    if (nombre.value.length<3) {
        nombre.classList.add('error');
    }
    
    var pass= document.getElementById('pass');
    if (pass.value.length<8 || pass.value.length<0) {
        pass.classList.add('error');
    }

    var mascota = document.querySelector('select');
    var selectedPet= function(url){
        window.open(url, 'KITTENS', 'width=120,height=300,scrollbars=NO')
    }

    if (mascota.options[0].value == 'cat') {
        selectedPet('https://www.catgifpage.com/');
    }

}