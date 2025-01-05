window.addEventListener('load', () => {
    // Récupérer le montant total depuis l'URL
    const params = new URLSearchParams(window.location.search);
    const total = params.get('total');
  
    document.getElementById('montant-total').textContent = total; // Affiche le total dans l'élément
  });
  
  // Gestion du formulaire pour simuler un paiement
  document.getElementById('form-paiement').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche l'envoi réel du formulaire
    alert('Paiement effectué avec succès ! Merci pour votre commande.');
    window.location.href = "index.html"; // Retourne à la page principale
  });

  
  document.getElementById('payer-button').addEventListener('click', function (event) {
    event.preventDefault(); // Empêche le formulaire d'être soumis immédiatement
  
    const message = document.createElement('div');
    message.className = 'notification';
    message.innerHTML = `
      <p>Votre commande est en cours de traitement...</p>
      <p>Vous allez être redirigé vers le site de paiement sécurisé.</p>
    `;
  
    // Ajoute le message à l'écran
    document.body.appendChild(message);
  
    // Après 3 secondes, soumet le formulaire
    setTimeout(() => {
      document.getElementById('payment-form').submit(); // Soumet le formulaire
    }, 3000);
  });

  document.getElementById("expiration-date").addEventListener("input", function (e) {
    let input = e.target.value.replace(/\D/g, ""); // Retire tout sauf les chiffres

    if (input.length >= 2) {
        input = input.slice(0, 2) + "/" + input.slice(2); // Ajoute "/" après MM
    }

    if (input.length > 7) {
        input = input.slice(0, 7); // Limite à "MM/AAAA"
    }

    e.target.value = input;
});

// Validation finale au clic sur le bouton de paiement
document.getElementById("form-paiement").addEventListener("submit", function (e) {
    const expirationDate = document.getElementById("expiration-date").value;

    // Vérifie que le format est correct
    const regex = /^(0[1-9]|1[0-2])\/\d{4}$/;
    if (!regex.test(expirationDate)) {
        alert("Veuillez entrer une date valide au format MM/AAAA.");
        e.preventDefault(); // Empêche la soumission si le format est incorrect
    }
});
