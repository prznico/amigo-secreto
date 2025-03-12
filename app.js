//array para guardar el nombre de los amigos
let amigos = [];


//limpiar el recuadro 
function limpiarCaja(){
    document.querySelector('#amigo').value = '';
}

function limpiarLista(){
    document.querySelector('#listaAmigos').innerHTML = '';
}


//funcion para guardar amigos
function agregarAmigo(){
    let nombreAmigo = document.querySelector("#amigo").value;
    if (typeof nombreAmigo == 'string' && nombreAmigo !== ''){  //el nombre tiene que ser string y no estar vacio
        amigos.push(nombreAmigo)
        console.log('Lista de amigos:', amigos);
    }else{
        alert('Por favor, inserte un nombre válido')
    }
    limpiarCaja();
    return;
}


//funcion para actualizar la lista de amigos
function lista(){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for (let i = 0 ; i < amigos.length; i++){
        let elemento = document.createElement('li');
        elemento.textContent = amigos[i];
        listaAmigos.appendChild(elemento);

        console.log('lista', listaAmigos.appendChild(elemento));//ver en la consola los nombres que se van agregando
    }
}


//funcion para sortear amigos

function sortearAmigo(){
    if ( amigos.length == 0){
        alert('No hay nombres para sortear');
    }else{

        limpiarLista();

        let indice = Math.floor(Math.random() * amigos.length);
        console.log(indice)

        let amigoSorteado = amigos[indice];
        console.log (amigoSorteado);

        let resultado = document.getElementById('resultado');
        resultado.innerHTML = (`Tu amigo secreto es : ${amigoSorteado}`);
    }
}

