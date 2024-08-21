const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.caixa-resultado');

const alternativa  = [
    {
        enunciado: "No âmbito social, você prefere:",
        alternativas: [
            {
                texto: "Você realiza todos os sonhos da sua vida, porém serão realizados longe de seus amados e eles não poderão saber que foram realizados.",
                afirmação: "afirmação",
            },
            {
                texto: "Você prefere encontrar a cura para o câncer, porém você tem que escolher uma doença de um familiar seu para nunca ser curada.",
                afirmação: "afirmação",

            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
                texto: "Você prefere despoluir todos os mares e rios, porém terá que escolher uma espécie animal para desaparecer. ",
                afirmação: "afirmação",
            },
            {
                texto: "Você prefere melhorar toda a infraestrutura da África, mas a má infraestrutura seria distribuída para outros países de acordo com o seu nível de desenvolvimento.",
                afirmação: "afirmação",

            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [

            {
                texto: "Você acabaria com a Deepweb mesmo sabendo que a pessoa que acabou com ela usará toda a informação a favor dela.",
                afirmação: "afirmação",
            },
            {
                texto: "Você prefere expor todos os segredos das maiores empresas do mundo, mas a sociedade entraria em colapso.",
                afirmação: "afirmação",

            },
        ]
    },
]

let atual = 0;
let perguntaAtual;
let historiaFinal = "";
function mostraPerguntas() {
    if(atual >= perguntas.length){
        historiaFinal += afirmação + " ";
        return;
    }

    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}


function mostraAlternativas (){
    for( const Alternativa of perguntaAtual.alternativas){ 
        const botaoAlternativa=document.createElement( "button");
        botaoAlternativa.textContent=Alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(pergunta));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(perguntas){
    const afirmação = pergunta.afirmação;
    historiaFinal += afirmação +" ";
    atual++;
    mostraPerguntas();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em resumo, você escolheu...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = " ";
}

mostraPerguntas();