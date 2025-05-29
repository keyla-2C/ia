const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O Brasil teve três capitais ao longo de sua história, a primeira durante o período colonial português, a segunda teve um grande desenvolvimento econômico da região e o aumento da produção de ouro e a terceira e ultima foi construída para centralizar o desenvolvimento do país, as três capitais são respectivamente?",
        alternativas: [
            {
                texto: "Salvador, Rio de janeiro e Brasília",
                afirmacao: "afirmação"
            },
            {
                texto: "Manaus, São Paulor e Brasília",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "quais os coletivos das seguintes palavras: borboleta, ilha, lobo e fogo?",
        alternativas: [
            {
                texto: "panapana, oássis, matilha e incendio.",
                afirmacao: "afirmação"
            },
            {
                texto: "panapana, arquipélago, alcateia e fogueira.",
                afirmacao: "afirmação"
            },
            {
                texto: "panam, resorte, matilha e fogaréu.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " quantos dentes um adulto possui?",
        alternativas: [
            {
                texto: "32.",
                afirmacao: "afirmação"
            },
            {
                texto: "24.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: "qual o quinto planeta do sistema solar?",
        alternativas: [
            {
                texto: "jupiter .",
                afirmacao: "afirmação"
            },
            {
                texto: "saturno.",
                afirmacao: "afirmação"
            }
        ]
    },
    {
        enunciado: " qual a função do coração? ",
        alternativas: [
            {
                texto: "bombear o sangue.",
                afirmacao: "afirmação"
            },
            {
                texto: "enviar sinapses para o funcionamento do cerebrop.",
                afirmacao: "afirmação"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
