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