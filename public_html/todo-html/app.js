function paginaCaricata() {
    console.log("paginaCaricata");
    var listaTodo = document.getElementById("listaTodo");
    listaTodo.addEventListener("click", function (evt) {
        console.log(evt);
        // verifico se il target dell'evento è LI
        if (evt.target.tagName === 'LI') {
            evt.target.classList.toggle("stile-completato");
        }
    });
}

// aggiunge un elemento alla lista, invocata dal pulsante 
function aggiungiTodo() {
    var nuovoTodo = document.getElementById("nuovoTodo").value;
    if (nuovoTodo) {
        // aggiungi elemento alla lista
        // creaiamo un elemento <li> da aggiungere alla lista
        var nuovoLi = document.createElement("LI");
        // crediamo un elemento testo
        var nuovoTestoLi = document.createTextNode(nuovoTodo);
        // aggiungiamo il testo all'elemento li
        nuovoLi.appendChild(nuovoTestoLi);
        // aggiungo l'elemento li appena creato alla ul
        document.getElementById("listaTodo").appendChild(nuovoLi);

        // reset dell'input
        document.getElementById("nuovoTodo").value = '';
    } else {
        alert("Per favore inserisci un todo.");
    }
}