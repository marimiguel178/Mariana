const perguntas = [
    {
        pergunta: "1. Qual das seguintes plataformas é conhecida por seu foco em compartilhamento de fotos? ",
        opcoes: [
            "Twitter",
            "Instagram",
            "LinkedIn",
            "Reddit"
        ],
        resposta: 1 // índice da resposta correta
    },
    {
        pergunta: "2. O que é um ‘influenciador digital’'?",
        opcoes: [
            "Alguém que trabalha em uma agência de publicidade",
            "Um usuário com grande número de seguidores que influencia opiniões e tendências",
            "Um desenvolvedor de software",
            "Um editor de revistas",
        ],
        resposta: 1
    },
    {
        pergunta: "3. O que significa “curtir” em uma rede social?",
        opcoes: [
            "Compartilhar uma postagem",
            "Mostrar que você gosta de uma postagem",
            "Comentar sobre uma postagem",
            "Seguir um usuário"
        ],
        resposta: 1
    },
    {
        pergunta: "O que são ‘stories’?",
        opcoes: [
            "Postagens permanentes",
            "Conteúdos temporários que desaparecem após 24 horas",
            "Comentários em postagens",
            "Mensagens diretas"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual é o objetivo principal de uma rede social?",
        opcoes: [
            "Vender produtos",
            "Conectar pessoas e compartilhar conteúdo",
            "Criar jogos",
            "Escrever artigos"
        ],
        resposta: 1
    },
    {
        pergunta: "Qual dessas plataformas é voltada para o mercado profissional?",
        opcoes: [
            "Tiktok",
            "Facebook",
            "LinkedIn",
            "Snapchat"
        ],
        resposta: 2
    }
];

// Função para gerar os flashcards
function criarFlashcards() {
    const container = document.getElementById("container");

    perguntas.forEach((pergunta, index) => {
        const cartao = document.createElement("article");
        cartao.classList.add("cartao");

        cartao.innerHTML = `
            <div class="cartao__conteudo">
                <h3>Questão ${index + 1}</h3>
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta.pergunta}</p>
                </div>
                <div class="cartao__conteudo__opcoes">
                    ${pergunta.opcoes.map((opcao, i) => `
                        <label>
                            <input type="radio" name="pergunta${index}" value="${i}">
                            ${opcao}
                        </label>
                    `).join('')}
                </div>
                <button onclick="verificarResposta(${index})">Responder</button>
                <div class="resultado" id="resultado${index}" style="display:none;"></div>
            </div>
        `;
        
        container.appendChild(cartao);
    });
}

// Função para verificar a resposta
function verificarResposta(index) {
    const opcoes = document.getElementsByName(`pergunta${index}`);
    const resultadoDiv = document.getElementById(`resultado${index}`);
    let respostaSelecionada;

    opcoes.forEach((opcao, i) => {
        if (opcao.checked) {
            respostaSelecionada = i;
        }
    });

    if (respostaSelecionada === undefined) {
        resultadoDiv.innerHTML = "Por favor, selecione uma opção.";
    } else if (respostaSelecionada === perguntas[index].resposta) {
        resultadoDiv.innerHTML = "Resposta correta!";
    } else {
        resultadoDiv.innerHTML = "Resposta errada! A resposta correta é: " + perguntas[index].opcoes[perguntas[index].resposta];
    }

    resultadoDiv.style.display = "block";
}

// Chama a função para criar os flashcards ao carregar a página
window.onload = criarFlashcards;

