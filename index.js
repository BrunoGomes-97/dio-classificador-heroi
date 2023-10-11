//--------------------------------
//CLassificador de Nível de Herói
//--------------------------------

//--------------------------------
//Variáveis
//--------------------------------
let nomeHeroi = "putzgrilla"
let expHeroi = 10000
let rankHeroi = ""

//--------------------------------
//Estrutura de Decisão
//--------------------------------
if (expHeroi <= 1000) {
    rankHeroi = "Ferro"
} else if (expHeroi >= 1001 && expHeroi <= 2000) {
    rankHeroi = "Bronze"
} else if (expHeroi >= 2001 && expHeroi <= 5000) {
    rankHeroi = "Prata"
} else if (expHeroi >= 5001 && expHeroi <= 7000) {
    rankHeroi = "Ouro"
} else if (expHeroi >= 7001 && expHeroi <= 8000) {
    rankHeroi = "Platina"
} else if (expHeroi >= 8001 && expHeroi <= 9000) {
    rankHeroi = "Ascendente"
} else if (expHeroi >= 9001 && expHeroi <= 10000) {
    rankHeroi = "Imortal"
} else {
    rankHeroi = "Radiante"
}

//--------------------------------
//Saída
//--------------------------------
console.log(`O Herói ${nomeHeroi} está no Ranking ${rankHeroi}!`)