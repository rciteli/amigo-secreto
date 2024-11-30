let amigos = [];

function adicionar() {
    let novoAmigo = document.getElementById('nome-amigo');
    //se nome do amigo estiver vazio, mostrar mensagem e interromper
    if (amigos.value == '') {
        alert('Informe o nome do amigo!');
        return;
    }

    //impede que se adicione 2 vezes o mesmo nome
    if (amigos.includes(novoAmigo.value)) {
        alert('Nome já adicionado.')
        return;
    }

    let listaAmigos = document.getElementById('lista-amigos');

    amigos.push(novoAmigo.value)
    if (listaAmigos.textContent == '') {
        listaAmigos.textContent = novoAmigo.value; 
    } else {
        listaAmigos.textContent = listaAmigos.textContent + ', ' + novoAmigo.value;
    }
    novoAmigo.value = ''
}

function sortear() {
    //se numero de amigos é menor que 4, mostrar mensagem e interromper
    if (amigos.length < 4) {
        alert('Adicione pelo menos 4 amigos!')
        return;
    }

    //função para sortear
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio')
    for (let i = 0; i < amigos.length; i++) {

        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos [i] + ' --> ' + amigos[0] + '<br>'
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos [i] + ' --> ' + amigos[i + 1] + '<br>'
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';

}