// Script pour gérer la validation des réponses et la navigation entre les pages.
document.addEventListener('DOMContentLoaded', function () {
    // Formulaire 1 : Charade pour la page 1
    const charadeForm = document.getElementById('charadeForm');
    if (charadeForm) {
      charadeForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const answer = document.getElementById('charadeInput').value.trim();
        if (answer.toLowerCase() === 'script') {
          window.location.href = 'page2.html';
        } else {
          document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
        }
      });
    }
  
    // Formulaire 2 : Grille mystère pour la page 3
    const gridForm = document.getElementById('gridForm');
    if (gridForm) {
      gridForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const answer = document.getElementById('gridInput').value.trim();
        if (answer.toLowerCase() === 'scream') {
          window.location.href = 'page4.html';
        } else {
          document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
        }
      });
    }
  
    // Formulaire 3 : Décryptage pour la page 4
    const decryptForm = document.getElementById('decryptForm');
    if (decryptForm) {
      decryptForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const answer = document.getElementById('decryptInput').value.trim();
        if (answer.toLowerCase() === 'the thing jump') {
          window.location.href = 'page5.html';
        } else {
          document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
        }
      });
    }
  
    // Formulaire 4 : Script pour la page 5
    const devForm = document.getElementById('charadeForm');
    if (devForm) {
      devForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const answer = document.getElementById('charadeInput').value.trim();
        const correctAnswer = `window.location.href = "page6.html"`;
        if (answer === correctAnswer) {
          alert('GOOD JOB!');
          window.location.href = 'page6.html';
        } else {
          document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
        }
      });
    }
  
    // Formulaire 5 : Citation pour la page finale
    const citationForm = document.getElementById('citationForm');
    if (citationForm) {
      citationForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const answer = document.getElementById('citationInput').value.trim();
        if (answer.toLowerCase() === 'edgar allan poe') {
          window.location.href = 'victoire.html';
        } else {
          document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
        }
      });
    }
  });
  
  