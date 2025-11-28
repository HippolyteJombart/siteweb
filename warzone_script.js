var indice= 0;
const image_joueurs = [];
image_joueurs.push("./Image/joueurs/warzone/gromalok.png","./Image/joueurs/warzone/enkeo.png","./Image/joueurs/warzone/hallow.png")
const pseudo_joueurs = [];
pseudo_joueurs.push("Gromalok", "Enkeo", "Hallow")
const texte_joueurs = [];
texte_joueurs.push("Meilleur français de l’année 2025, Akiraa loupe de peu la qualification pour la coupe du monde à Lyon, encore mineur c’est sûrement lui, l’espoir français le plus à suivre. On lui prédit un avenir esportif brillant dans lequel il se battra avec les plus grands joueurs européens et mondiaux.","Surement la plus grande révélation de 2025, il passe du top 50 européen à vice champion du monde devant son public, Marius devient en une seule année, champion d’europe et vice world champions.","Champion du monde en 2024 avec Peterbot, Pollo est un top joueur américain à seulement 17 ans. Après une année plus compliquée en 2025, le retour du format duo en 2026 résonne comme un retour du poulet mexicain.","Meilleur IGL (In Game Leader) du monde et joueur le plus constant de ces dernières années, Vanyak s’est placé dans le top 3 lors des 6 dernières compétition de haut prestige, victorieux à deux reprises des FNCS Europe en 2 ans. Il prend sa revanche sur la coupe du monde en 2025* en se positionnant à une très belle 2ème place et 2026, synonyme du retour au duo lui permettra, on l’espère de prendre sa revanche définitivement avec son duo de toujours Swizzy.\n *Lors de la coupe du monde 2024 se déroulant aux Etats Unis, Vanyak n’a pas pu s’y rendre à cause de problème de Visa lié à sa nationalité ukrainienne, il jouait à ce moment en duo avec Swizzy.","Champion du monde 2025 devant son public, Merstach se place dans le top des joueurs les plus polyvalents au monde, fragger dans l’âme, il sait aussi garder la tête froide et prendre les bonnes décisions dans les moments les plus stressant.","Ancien joueur professionnelle, participant à la mythique coupe du monde 2019, c’est la figure de proue de Gentle Mates pour la section Fortnite. Certains souhaitent le voir devenir CEO tant il brille par son implication dans la structure.")
var current_joueur_nom = document.getElementById("joueur_nom");
var current_joueur_image = document.getElementById("joueur_image");
var current_joueur_texte = document.getElementById("joueur_texte");

function swipeRight(){
    indice+=1;
    current_joueur_image.setAttribute("src", image_joueurs[(indice%(image_joueurs.length))])
    current_joueur_nom.innerText = pseudo_joueurs[(indice%(image_joueurs.length))]
    current_joueur_texte.innerText = texte_joueurs[(indice%(image_joueurs.length))]
}

function swipeLeft(){
    if (indice===0){
        indice = image_joueurs.length
    }
    indice-=1;
    current_joueur_image.setAttribute("src", image_joueurs[(indice%(image_joueurs.length))])
    current_joueur_nom.innerText = pseudo_joueurs[(indice%(image_joueurs.length))]
    current_joueur_texte.innerText = texte_joueurs[(indice%(image_joueurs.length))]
}

function send(){
    var nom = document.getElementById("nom").value
    var message = document.getElementById("message").value
    var date = new Date()
    var jour = date.getDate()
    var mois = date.getMonth()
    var annee = date.getFullYear()
    


    livreOr = document.getElementById("livre-or")

    ligne = document.createElement("tr")
    _nom = document.createElement("td")
    _message = document.createElement("td")
    _date = document.createElement("td")
    _nomCellule = document.createElement("div")
    _messageCellule = document.createElement("div")
    _dateCellule = document.createElement("div")


    _nom.classList.add("cellule-comme")
    _message.classList.add("cellule-comme")
    _date.classList.add("cellule-comme")
    _nomCellule.classList.add("comme")
    _messageCellule.classList.add("comme")
    _dateCellule.classList.add("comme")
    
    if(message===""){
        return;
    }
    
    if(nom===""){
        nom="Anonyme"
    }
    
    _nomCellule.innerText = nom
    _messageCellule.innerText = message
    _dateCellule.innerText = jour + '/' + mois + '/' + annee

    _nom.appendChild(_nomCellule)
    _message.appendChild(_messageCellule)
    _date.appendChild(_dateCellule)
    ligne.appendChild(_nom)
    ligne.appendChild(_message)
    ligne.appendChild(_date)
    livreOr.appendChild(ligne)

}