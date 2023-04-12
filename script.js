// Récupération des éléments HTML nécessaires
const ecran = document.querySelector('.ecranvert');
const touches = document.querySelectorAll('button');

// Ajout d'un écouteur d'événement à chaque touche
touches.forEach(touche => {
  touche.addEventListener('click', () => {
    // Récupération de la valeur de la touche cliquée
    const valeurTouche = touche.innerHTML;

    // Si la touche C est cliquée, on efface l'écran
    if (valeurTouche === 'C') {
      ecran.innerHTML = '';
    }
    // Si la touche R est cliquée, on supprime le dernier caractère affiché sur l'écran
    else if (valeurTouche === 'R') {
      ecran.innerHTML = ecran.innerHTML.slice(0, -1);
    }
    // Si la touche = est cliquée, on évalue l'expression affichée sur l'écran
    else if (valeurTouche === '=') {
      // On vérifie que l'expression est valide avant de l'évaluer
      if (ecran.innerHTML !== '') {
        try {
          const resultat = eval(ecran.innerHTML);
          ecran.innerHTML = resultat;
        } catch {
          ecran.innerHTML = 'Erreur';
        }
      }
    }
    // Si une autre touche est cliquée, on l'ajoute à l'écran
    else {
      ecran.innerHTML += valeurTouche;
    }
  });
});
