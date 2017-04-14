function onLoad() {
    // Create a "close" button and append it to each list item
    // Get all elements in the document with the specified tag name:
    var myNodelist = document.getElementsByTagName("LI");
    var i;
    for (i = 0; i < myNodelist.length; i++) {
        // Create a <span> element:
        var span = document.createElement("SPAN");
        // Create a text node:
        var txt = document.createTextNode(" (elimina)") // ("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        myNodelist[i].appendChild(span);
    }

    // Click on a close button to hide the current list item
    var close = document.getElementsByClassName("close");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }

    // Add a "checked" symbol when clicking on a list item
    // Get the first <ul> element in the document:
    var list = document.querySelector('ul');
    // addEventListener() permette di impostare delle funzioni che verranno chiamate al verificarsi dell'evento specificato, sull'oggetto specificato(target dell'evento).
    list.addEventListener('click', function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('completato');
        }
    }, false);
}

// Create a new list item when clicking on the "Add" button
function newElement() {

    // Get the element with the specified ID:
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === '') {
        alert("You must write something!");
    } else {
        // Create a <li> element:
        var li = document.createElement("li");

        // Create a text node:
        var t = document.createTextNode(inputValue);
        // Append an item
        li.appendChild(t);

        document.getElementById("listaTodo").appendChild(li);

        document.getElementById("myInput").value = "";

        /*
         var span = document.createElement("SPAN");
         var txt = document.createTextNode("\u00D7");
         span.className = "close";
         span.appendChild(txt);
         li.appendChild(span);
         
         for (i = 0; i < close.length; i++) {
         close[i].onclick = function () {
         var div = this.parentElement;
         div.style.display = "none";
         }
         }
         */
    }
}