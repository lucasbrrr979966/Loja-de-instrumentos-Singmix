let carrinho = [];
let isOperadorLogado = false;

// Login de operador simples
function loginOperador() {
    let senha = prompt("Digite a senha do operador:");
    if (senha === "1234") {
        alert("Login realizado com sucesso!");
        isOperadorLogado = true;
        adicionarProduto();
    } else {
        alert("Senha incorreta.");
    }
}

// Função de adicionar produto (simples, só demonstração no front-end)
function adicionarProduto() {
    if (isOperadorLogado) {
        let nome = prompt("Nome do produto:");
        let preco = prompt("Preço:");
        let imagem = prompt("URL da imagem do produto:");
        if (nome && preco && imagem) {
            let novoProduto = document.createElement('div');
            novoProduto.classList.add('produto');
            novoProduto.innerHTML = `
                <img src="${imagem}" alt="${nome}">
                <h3>${nome}</h3>
                <p>Preço: R$ ${preco}</p>
            `;
            document.querySelector('.produtos').appendChild(novoProduto);
        }
    }
}

// Carrinho
function adicionarAoCarrinho(nome) {
    carrinho.push(nome);
    document.getElementById('carrinho-count').innerText = carrinho.length;
    alert(nome + " adicionado ao carrinho!");
}

function verCarrinho() {
    alert("Itens no carrinho:\n" + carrinho.join('\n'));
}

// Simulação de cálculo de frete
function calcularFrete() {
    let cep = document.getElementById('cep').value;
    if (cep) {
        alert("Frete para o CEP " + cep + ": R$ 30,00");
    } else {
        alert("Por favor, insira um CEP.");
    }
}

// Avaliações com estrelas
function avaliar(estrelas) {
    alert("Você deu " + estrelas + " estrela(s). Obrigado pela avaliação!");
}

// Comentários
function enviarComentario() {
    let nome = document.getElementById('nome').value;
    let comentario = document.getElementById('comentario').value;
    if (nome && comentario) {
        let divComentarios = document.getElementById('comentarios');
        let novoComentario = document.createElement('p');
        novoComentario.innerHTML = `<strong>${nome}:</strong> ${comentario}`;
        divComentarios.appendChild(novoComentario);
        document.getElementById('nome').value = '';
        document.getElementById('comentario').value = '';
    } else {
        alert("Preencha seu nome e comentário.");
    }
          }
