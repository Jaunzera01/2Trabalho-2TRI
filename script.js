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
<<<<<<< HEAD
                texto: "Você realiza todos os sonhos da sua vida, porém serão realizados longe de seus amados e eles não poderão saber que foram realizados.",
                afirmação: "afirmação",
=======
                texto: "Você realiza todos os sonhos da sua vida, porém serão realizados longe de seus amados e eles não poderão saber que foram realizados.",
                afirmacao: "afirmação",
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f
            },
            {
<<<<<<< HEAD
                texto: "Você prefere encontrar a cura para o câncer, porém você tem que escolher uma doença de um familiar seu para nunca ser curada.",
                afirmação: "afirmação",
=======
                texto: "Você prefere encontrar a cura para o câncer, porém você tem que escolher uma doença de um familiar seu para nunca ser curada.",
                afirmacao: "afirmação",
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f

            },
        ]
    },
    {
        enunciado: "No âmbito ambiental, você prefere:",
        alternativas: [
            {
<<<<<<< HEAD
                texto: "Você prefere despoluir todos os mares e rios, porém terá que escolher uma espécie animal para desaparecer. ",
                afirmação: "afirmação",
=======
                texto: "Você prefere despolui todos os mares e rios, porém terá que escolher uma espécie animal para desaparecer. ",
                afirmacao: "afirmação",
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f
            },
            {
<<<<<<< HEAD
                texto: "Você prefere melhorar toda a infraestrutura da África, mas a má infraestrutura seria distribuída para outros países de acordo com o seu nível de desenvolvimento.",
                afirmação: "afirmação",
=======
                texto: "Você prefere melhorar toda a infraestrutura da África, mas a má infraestrutura seria distribuída para outros países de acordo com o seu nível de desenvolvimento.",
                afirmacao: "afirmação",
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f

            },
        ]
    },
    {
        enunciado: "No âmbito tecnológico, você prefere:",
        alternativas: [

            {
<<<<<<< HEAD
                texto: "Você acabaria com a Deepweb mesmo sabendo que a pessoa que acabou com ela usará toda a informação a favor dela.",
                afirmação: "afirmação",
=======
                texto: "Você acabaria com a Deepweb mesmo sabendo que a pessoa que acabou com ela usará toda a informação a favor dela.",
                afirmacao: "afirmação",
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f
            },
            {
<<<<<<< HEAD
                texto: "Você prefere expor todos os segredos das maiores empresas do mundo, mas a sociedade entraria em colapso.",
                afirmação: "afirmação",
=======
                texto: "Você prefere expor todos os segredos das maiores empresas do mundo, mas a sociedade entraria em colapso.",
                afirmacao: "afirmação",
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f

            },
        ]
    },
]

let atual = 0
let perguntaAtual;
function mostraPerguntas() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent= "";
    mostraAlternativas();
}
function mostraAlternativas (){
    for( const Alternativa of  perguntaAtual.alternativas){ 
        const botaoAlternativa=document.createElement( "button");
        botaoAlternativa.textContent=Alternativa.texto;
<<<<<<< HEAD
        botaoAlternativa.addEventListener("click", () => respoataSelecionada(perguntas)){
            atual++;
            mostraPerguntas();
        })
=======
        botaoAlternativa.addEventListener("click", () => respoataSelecionada(Alternativa ));       
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}
<<<<<<< HEAD

function respoataSelecionada(perguntas){

    atual++;
    mostraPerguntas
}
=======

function respoataSelecionada(Alternativa ){
    const afimacoes = Alternativa.afirmacao;
    atual++;
    mostraPergunta ();
}
>>>>>>> c7fdcd2a01a9377fd5799f23867fee035429f00f
mostraPerguntas();
