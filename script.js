// Script pour gérer la validation des réponses et la navigation entre les pages.
document.getElementById('charadeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('charadeInput').value.trim();
    if (answer.toLowerCase() === 'script') {
      window.location.href = 'page2.html';
    } else {
      document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
    }
  });
  
  document.getElementById('gridForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('gridInput').value.trim();
    if (answer.toLowerCase() === 'scream') {
      window.location.href = 'page4.html';
    } else {
      document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
    }
  });
  
  document.getElementById('decryptForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('decryptInput').value.trim();
    if (answer.toLowerCase() === 'the thing jump') {
      window.location.href = 'page5.html';
    } else {
      document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
    }
  });
  
  document.getElementById('movieForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('movieInput').value.trim();
    if (answer.toLowerCase() === 'scream') {
      window.location.href = 'page6.html';
    } else {
      document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
    }
  });
  
  document.getElementById('citationForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    const answer = document.getElementById('citationInput').value.trim();
    if (answer.toLowerCase() === 'edgar allan poe') {
      window.location.href = 'victoire.html';
    } else {
      document.getElementById('feedback').innerText = 'Réponse incorrecte. Essayez encore!';
    }
  });
  