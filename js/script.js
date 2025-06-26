// js/script.js

console.log("Le script JavaScript est bien chargé !");

// Exemple simple : Alerte quand la page est complètement chargée
document.addEventListener('DOMContentLoaded', function() {
    // alert("Bienvenue sur le site de [Nom de ton Entreprise] !");

    // Tu peux ajouter des interactions ici plus tard, par exemple pour un formulaire ou un menu mobile.
    // Par exemple, un bouton qui change de texte au clic (à ajouter dans ton HTML)
    const myButton = document.getElementById('myButton'); // Assure-toi d'avoir un <button id="myButton"> dans ton HTML
    if (myButton) {
        myButton.addEventListener('click', function() {
            alert('Bouton cliqué !');
        });
    }
});