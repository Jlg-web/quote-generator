// Constantes permettant de cibler les différents éléments HTML
const btn = document.getElementById("btn");
const titleGenerator = document.getElementById("title");
const container = document.getElementById('container');
const generatorChoice = document.getElementById('generator-choice');
const generatorQuoteNumber = document.getElementById('generator-quote-number');
const quote = document.getElementById("quote");
const error = document.getElementById("error");
// Création des différents tableaux

// Générateur super-héros
const sujetG1 = ["Batman", "Superman", "Spider-man", "Green Lantern", "Flash"];
const verbeG1 = ["se balance", "vole", "se bat", "bondit", "enchaine les coups"];
const complementG1 = ["rapidement", "sans dire un mot", "d'immeuble en immmeuble", "avec détermination", "avant de tomber"]
// Générateur ennemis
const sujetG2 = ["Le Joker", "Lex luthor", "Venom"];
const verbeG2 = ["marche", "cherche", "casse"];
const complementG2 = ["sans arrêt", "son adversaire", "tout sur son passage"]

// Création de la fonction aléatoire
function random(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Fonctions création des citations aléatoires
function createQuoteHero() {
  titleGenerator.textContent = "Super-héros";
  return `${random(sujetG1)} ${random(verbeG1)} ${random(complementG1)} !`;
}

function createQuoteEnnemi() {
  titleGenerator.textContent = "Ennemis";
  return `${random(sujetG2)} ${random(verbeG2)} ${random(complementG2)} !`;
}

// Fonction génération d'une nouvelle citation
function generateNewQuote() {
  const numberCitation = parseInt(generatorQuoteNumber.value, 10);
  quote.innerHTML = "";

  if (generatorChoice.value === "firstGenerator") {
    for (i = 0; i < numberCitation; i++) {
      quote.innerHTML += createQuoteHero()  + "<br> <br>";
    }
  } else {
    for (i = 0; i < numberCitation; i++) {
      quote.innerHTML += createQuoteEnnemi() + "<br> <br>";
    }
  }
}

// Fonction d'alert
function showError() {
  console.log(generatorQuoteNumber.value)
  if(generatorQuoteNumber.value === "choiceQuote") {
    error.innerText = 'Veuillez choisir un nombre de citations';
    return true;
  } else {
    error.innerText = "";
    error.style.margin = "0px";
    return false;
  }
}

btn.addEventListener('click', function() {
  const err = showError();

  if(!err) {
    generateNewQuote();
  }
});