// O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. 
// Aqui você deverá desenvolver a lógica para resolver o problema.

let listaDeNomesASortear = []; // definir array contendo lista de nome a sortear
let listaDeNomesSorteados = []; // definir array contendo lista de nome sorteados
let nome;
let nomeSorteado;

// Aqui criamos a função adicionarAmigo definida no html,
// portanto: assim que o usuário confirmar o nome, a barra
// de comentários é limpa e o item é add no final da lista.
// caso contrário, aparece o alerta "insira um nome válido".
function adicionarAmigo() {
    let nome = document.querySelector('input').value;
    if (nome && !listaDeNomesASortear.includes (nome)) {
        listaDeNomesASortear.push(nome);
        //alert("Nome salvo com sucesso!");
        limparCampo();
        criarLista();
} else {
       alert("Insira um nome válido!");
    };

};

// Função para para adicionar nomes à listinha e sortear
// ao clicar Enter (keydown)
document.querySelector('input').addEventListener("keydown", function(clicar) {
    if (clicar.key === "Enter") {
        clicar.preventDefault(); // impede a tecla de fazer algo padrão
        adicionarAmigo();
    };
});

// Na função criarLista, atualiza-se o array listaDeNomesASortear,
// onde cada nome da lista sorteada é guardado e cria um novo item de lista (<li></li>),
// e onde injetamos os items de lista no html (#listaAmigos),
// nota: o li (abrev. de "list item") é um item dentro de uma lista (<ul>), exibido no html. :)
function criarLista() {
    const lista = document.querySelector('#listaAmigos');
    // Usamos a função limparLista para recriar a lista atualizada
    limparLista(lista);
    // Por cada nome da array listaDeNomesSorteado
    for (const name of listaDeNomesASortear) {
        // Vamos criar um elemento html lista de item (li)
        const li = document.createElement('li');
        // Vamos definir o conteúdo "name"
        li.textContent = name;
        // Por fim, vamos adiconar a lista de item como filho do elemento html #listaAmigos
        lista.appendChild(li);
    };
};

function limparLista(lista) {
    // Limpar o conteúdo prévio e add nova listinha
    lista.innerHTML = '';
    };

function limparCampo() {
    // mesma função acima, dessa vez para o campo
    nome = document.querySelector('input');
    nome.value = '';
};

function sortearAmigo() {
    // Constante para definor o número de nomes adicionados
    const numeroDeAmigos = listaDeNomesASortear.length;
    // Se o usuário clicar no botão sortearAmigo e tiver nome, o sorteio ocorre,
    // caso estiver vazio, aparece o alert "não tem amigos!"
    if (numeroDeAmigos > 0) {
        // Criamos a constante "indiceRandom" para definir um indíce aleatório 
        // da array listaDeNomesASortear
        // Nota: Math.random(), retorna uma número aleatório entre 0-1.
        // Nora: Math.floor(),  arredonda um número para baixo, retornando 
        // o maior inteiro menor ou igual ao número fornecido
        const indiceRandom = Math.floor(Math.random() * numeroDeAmigos);
        // Extraímos do array listaDeNomesASortear o valor nome com o índice indiceRandom
        const nomeSorteado = listaDeNomesASortear[indiceRandom];
        // Se o nome sorteado não faz parte da lista de nomes sorteados continua com o sorteio
        if (!listaDeNomesSorteados.includes (nomeSorteado)) { 
                // Obter o elemento html onde o nome sorteado será injetado
                const resultado = document.querySelector('#resultado');
                // Vamos criar um elemento html lista de item (li)
                const li = document.createElement('li');
                // Vamos definir o conteúdo "nomeSorteado"
                li.textContent = nomeSorteado;
                // Por fim, vamos adiconar a lista de item como filho do elemento html #resultado
                resultado.appendChild(li);
                // No caso de querermos limpar a listinha no fim  do sorteio,
                // descomente a linha abaixo
                //listaDeNomesASortear = [];
                // Adicionar o nome sorteado à array listaDeNomesSorteados
                listaDeNomesSorteados.push(nomeSorteado);
        } else {
            // Se o nome já foi previamente selecionado, return null
            alert(nomeSorteado + ": nome previamente sorteado");
            return null;
        }
        
    } else {
        alert("Não tem amigos!");
        return null;
    };
};