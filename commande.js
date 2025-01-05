// Gestion du chargement de la page
const articlesParPage = 10; // Nombre d'articles par page
let pageActuelle = 1;
let articlesFiltres = []; // Garde une copie des articles filtrés

let currentPage = 1;
const itemsPerPage = 10;

// Gestion du chargement de la page
window.addEventListener("load", function () {
  attribuerPromotionsAleatoires(10); // Met en promotion 10 articles aléatoires
  initialiserPage();

  document.getElementById("search-input").value = "";

   // Décoche toutes les cases des filtres au rechargement de la page
   const checkboxes = document.querySelectorAll(".filters input[type='checkbox']");
   checkboxes.forEach((checkbox) => {
     checkbox.checked = false;
   });
 
   // Optionnel : coche automatiquement "Toutes" pour les catégories et origines
   //document.getElementById("cat_toutes").checked = true;
   //document.getElementById("ori_toutes").checked = true;
});

// Fonction principale pour initialiser la page
function initialiserPage() {
  creerFiltres();
  ajouterEvenementsFiltres();
  creerInterfaceArticles();
  mettreAJourPanier();
}

// Crée l'interface des articles avec pagination

function creerInterfaceArticles() {
    const articlesContainer = document.querySelector(".articles-list");
    articlesContainer.innerHTML = "";

    const articlesFiltres = filtrerArticles();
    const totalPages = Math.ceil(articlesFiltres.length / itemsPerPage);

    // Pagination logic
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const articlesAffiches = articlesFiltres.slice(startIndex, endIndex);

    articlesAffiches.forEach((article) => {
        const articleCard = document.createElement("div");
        articleCard.classList.add("article-card");

        if (article.promotion) {
            const promoBadge = document.createElement("div");
            promoBadge.classList.add("promo-badge");
            promoBadge.textContent = "Promo spéciale !";
            articleCard.appendChild(promoBadge);
        }

        const image = document.createElement("img");
        image.src = article.photo;
        image.alt = article.nom;
        image.onerror = () => { image.src = "https://via.placeholder.com/150"; };
        articleCard.appendChild(image);

        const details = document.createElement("div");
        details.classList.add("details");
        details.innerHTML = `
          <h3>${article.nom}</h3>
          <p>Origine : ${getOrigine(article.ref)}</p>
          <p>
            Prix : <span class="${article.promotion ? 'prix-barre' : ''}">
            ${getPrix(article.ref)} €</span>
            ${article.promotion ? `<span class="prix-promo">${(getPrix(article.ref) * 0.8).toFixed(2)} €</span>` : ""}
          </p>
          <label>Quantité : <input type="number" min="1" value="1" data-ref="${article.ref}"></label>
          <button class="ajouter-panier" data-ref="${article.ref}">Ajouter au panier</button>
        `;
        articleCard.appendChild(details);
        articlesContainer.appendChild(articleCard);
    });

    ajouterEvenementsBoutons();
    afficherPagination(totalPages);
}

function afficherPagination(totalPages) {
    const pageNumbers = document.getElementById("page-numbers");
    const prevButton = document.getElementById("prev-page");
    const nextButton = document.getElementById("next-page");

    pageNumbers.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = document.createElement("span");
        pageButton.textContent = i;
        pageButton.classList.add("page-number");
        if (i === currentPage) {
            pageButton.classList.add("current-page");
        }
        pageButton.addEventListener("click", () => {
            currentPage = i;
            creerInterfaceArticles();
        });
        pageNumbers.appendChild(pageButton);
    }

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;

    prevButton.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            creerInterfaceArticles();
        }
    });

    nextButton.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            creerInterfaceArticles();
        }
    });
}


// Ajoute les événements de la pagination
function mettreAJourPagination() {
  const totalPages = Math.ceil(articlesFiltres.length / articlesParPage);
  document.getElementById("page-info").textContent = `Page ${pageActuelle} / ${totalPages}`;
  document.getElementById("prev-page").disabled = pageActuelle === 1;
  document.getElementById("next-page").disabled = pageActuelle === totalPages;
}

// Boutons de navigation de la pagination
document.getElementById("prev-page").addEventListener("click", () => {
  if (pageActuelle > 1) {
    pageActuelle--;
    creerInterfaceArticles();
  }
});

document.getElementById("next-page").addEventListener("click", () => {
  const totalPages = Math.ceil(articlesFiltres.length / articlesParPage);
  if (pageActuelle < totalPages) {
    pageActuelle++;
    creerInterfaceArticles();
  }
});

// Autres fonctions utilitaires et événements restent identiques...




// Crée les filtres dynamiquement
function creerFiltres() {
  const origineSet = new Set(tarifs.map(t => t.origine));
  const originesContainer = document.querySelector(".origines");
  originesContainer.innerHTML = ""; // Vider avant de recréer

  origineSet.forEach(origine => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="checkbox" class="filtre-origine" value="${origine}"> ${origine}`;
      originesContainer.appendChild(label);
  });

  // Ajoute les événements pour les filtres de catégories
  document.querySelector("#cat_toutes").addEventListener("change", filtrerArticlesEtRecreer);
  document.querySelector("#cat_fruits").addEventListener("change", filtrerArticlesEtRecreer);
  document.querySelector("#cat_legumes").addEventListener("change", filtrerArticlesEtRecreer);
}

// Ajoute les événements aux filtres
function ajouterEvenementsFiltres() {
  const filtresOrigine = document.querySelectorAll(".filtre-origine");
  filtresOrigine.forEach(filtre => {
      filtre.addEventListener("change", filtrerArticlesEtRecreer);
  });
}

// Filtre les articles selon les catégories et les origines cochées   !!! A REVOIR SI JAMAIS Y'A DES ERREURS DANS LA CONSOLE
function filtrerArticles() {
  // Catégories
  const fruitsChecked = document.querySelector("#cat_fruits").checked;
  const legumesChecked = document.querySelector("#cat_legumes").checked;

  // Origines
  const filtresOrigine = document.querySelectorAll(".filtre-origine:checked");
  const originesFiltrees = Array.from(filtresOrigine).map(f => f.value);

  return articles.filter(article => {
      const categorie = article.catégorie;
      const origine = getOrigine(article.ref);

      // Vérifie les catégories
      const categorieValide = (fruitsChecked && categorie === "Fruit") ||
          (legumesChecked && categorie === "Légume") ||
          (!fruitsChecked && !legumesChecked); // Si aucun filtre catégorie n'est activé

      // Vérifie les origines
      const origineValide = originesFiltrees.length === 0 || originesFiltrees.includes(origine);

      return categorieValide && origineValide;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopButton = document.getElementById("scroll-to-top");

  window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
          scrollToTopButton.style.display = "block";
      } else {
          scrollToTopButton.style.display = "none";
      }
  });

  scrollToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
  });
});



// Recrée l'interface des articles après filtrage
function filtrerArticlesEtRecreer() {
  creerInterfaceArticles();
}

// Ajoute les événements aux boutons "Ajouter au panier"
function ajouterEvenementsBoutons() {
  const boutonsAjouter = document.querySelectorAll(".ajouter-panier");
  boutonsAjouter.forEach(bouton => {
      bouton.addEventListener("click", ajouterAuPanier);
  });
}

// ça permet d'afficher le message ajout dans le panier
function afficherNotification(message, type = "success") {
  const notification = document.createElement("div");
  notification.classList.add("notification");
  notification.classList.add(type); // success ou error
  notification.textContent = message;

  document.body.appendChild(notification);

  // Disparaît après 3 secondes
  setTimeout(() => {
      notification.remove();
  }, 3000);
}




// Ajoute un article au panier
function ajouterAuPanier(e) {
  const ref = e.target.dataset.ref;
  const quantite = parseInt(document.querySelector(`input[data-ref="${ref}"]`).value);

  // Recherche de l'article dans la liste
  const article = articles.find(a => a.ref === ref);

  // Vérifie si l'article est en promotion
  const prixApplique = article.promotion ? (getPrix(ref) * 0.8).toFixed(2) : getPrix(ref);

  // Mise à jour du panier
  const panier = document.querySelector(".panier tbody");
  const ligneExistante = panier.querySelector(`tr[data-ref="${ref}"]`);

  if (ligneExistante) {
    // Mise à jour de la quantité et du prix
    const nouvelleQuantite = parseInt(ligneExistante.querySelector(".quantite").textContent) + quantite;
    ligneExistante.querySelector(".quantite").textContent = nouvelleQuantite;
    ligneExistante.querySelector(".prix").textContent = (nouvelleQuantite * prixApplique).toFixed(2);
  } else {
    // Ajout d'une nouvelle ligne dans le panier
    const ligne = document.createElement("tr");
    ligne.dataset.ref = ref;
    ligne.innerHTML = `
      <td>${getNom(ref)}</td>
      <td class="quantite">${quantite}</td>
      <td>${prixApplique} €</td>
      <td class="prix">${(quantite * prixApplique).toFixed(2)} €</td>
      <td><button class="supprimer" data-ref="${ref}">Supprimer</button></td>
    `;
    panier.appendChild(ligne);
  }

  mettreAJourPanier();
  ajouterEvenementsSuppression();
  
  afficherNotification("Article ajouté au panier !", "success");
  // ANIMATION : Ajout de l'article
  lancerAnimationAjoutPanier(e.target);
}

// Fonction pour lancer l'animation d'ajout vers le panier
function lancerAnimationAjoutPanier(button) {
  const articleCard = button.closest(".article-card");
  const panierElement = document.querySelector(".panier");
  
  // Position de l'article
  const rectArticle = articleCard.getBoundingClientRect();
  
  // Position du panier
  const rectPanier = panierElement.getBoundingClientRect();

  // Création de l'élément animé
  const animationElement = document.createElement("div");
  animationElement.classList.add("animation-balle");
  animationElement.style.position = "absolute";
  animationElement.style.left = `${rectArticle.left + window.scrollX}px`;
  animationElement.style.top = `${rectArticle.top + window.scrollY}px`;

  // Ajouter l'élément au body
  document.body.appendChild(animationElement);

  // Déplacer l'élément vers le panier
  animationElement.animate([
    { transform: `translate(0, 0)` },
    { transform: `translate(${rectPanier.left - rectArticle.left}px, ${rectPanier.top - rectArticle.top}px)` }
  ], {
    duration: 800,
    easing: "ease-in-out"
  }).onfinish = () => {
    // Suppression de l'élément après l'animation
    animationElement.remove();
  };
}


// Fonction pour l'animation visuelle
function lancerAnimationAjoutPanier(button) {
  const articleCard = button.closest(".article-card");
  const panierElement = document.querySelector(".panier");

  // Trouver l'image de l'article
  const articleImage = articleCard.querySelector("img");

  // Position de l'article
  const rectArticle = articleImage.getBoundingClientRect();

  // Position du panier
  const rectPanier = panierElement.getBoundingClientRect();

  // Création de l'élément animé (copie de l'image)
  const animationImage = document.createElement("img");
  animationImage.src = articleImage.src;
  animationImage.style.position = "absolute";
  animationImage.style.width = "100px"; // Taille agrandie
  animationImage.style.height = "100px";
  animationImage.style.objectFit = "cover";
  animationImage.style.borderRadius = "50%"; // Apparence circulaire
  animationImage.style.left = `${rectArticle.left + window.scrollX}px`;
  animationImage.style.top = `${rectArticle.top + window.scrollY}px`;
  animationImage.style.zIndex = "1000";

  // Ajouter l'image animée au body
  document.body.appendChild(animationImage);

  // Animation de l'image vers le panier
  animationImage.animate(
    [
      { transform: "scale(1.5)", opacity: 1 }, // Taille plus grande au début
      {
        transform: `translate(${rectPanier.left - rectArticle.left}px, ${
          rectPanier.top - rectArticle.top
        }px) scale(0.6)`,
        opacity: 0.5, // Réduire la taille et la transparence vers le panier
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out", // Animation fluide
    }
  ).onfinish = () => {
    // Supprimer l'image animée après l'animation
    animationImage.remove();
  };
}





// focntion pour le message

function afficherMessageArticle(element, message, type = "success") {
  const articleCard = element.closest(".article-card");

  // Supprimer les messages existants (éviter les doublons)
  const existingMessage = articleCard.querySelector(".message-article");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Créer un nouvel élément pour le message
  const messageElement = document.createElement("div");
  messageElement.classList.add("message-article");
  messageElement.textContent = message;

  // Appliquer la classe correspondante (succès ou erreur)
  if (type === "success") {
    messageElement.classList.add("success");
  } else if (type === "error") {
    messageElement.classList.add("error");
  }

  // Ajouter le message à la carte de l'article
  articleCard.appendChild(messageElement);

  // Supprimer le message après 3 secondes
  setTimeout(() => {
    messageElement.remove();
  }, 3000);
}





// Ajoute les événements aux boutons "Supprimer"
function ajouterEvenementsSuppression() {
  const boutonsSupprimer = document.querySelectorAll(".supprimer");
  boutonsSupprimer.forEach(bouton => {
      bouton.addEventListener("click", supprimerDuPanier);
  });
}

// Supprime un article du panier
function supprimerDuPanier(e) {
  const ref = e.target.dataset.ref;
  const ligne = document.querySelector(`tr[data-ref="${ref}"]`);
  ligne.remove();
  mettreAJourPanier();
}

// Met à jour le total du panier
function mettreAJourPanier() {
  const lignes = document.querySelectorAll(".panier tbody tr");
  let total = 0;
  lignes.forEach(ligne => {
      total += parseFloat(ligne.querySelector(".prix").textContent);
  });
  document.getElementById("total").textContent = total.toFixed(2);
}

// Fonctions utilitaires pour récupérer des données
function getOrigine(ref) {
  return tarifs.find(t => t.ref === ref)?.origine || "Inconnue";
}

function getPrix(ref) {
  const article = articles.find(a => a.ref === ref);
  if (article && article.promotion) {
    return (tarifs.find(t => t.ref === ref)?.prix * 0.8).toFixed(2); // Appliquer 20% de réduction
  }
  return tarifs.find(t => t.ref === ref)?.prix || 0;
}


function getUnite(ref) {
  return tarifs.find(t => t.ref === ref)?.unité || "Inconnue";
}

function getNom(ref) {
  return articles.find(a => a.ref === ref)?.nom || "Inconnu";
}


function attribuerPromotionsAleatoires(nombreDePromotions) {
  const indicesArticles = [...Array(articles.length).keys()];
  const indicesPromotion = indicesArticles.sort(() => 0.5 - Math.random()).slice(0, nombreDePromotions);

  indicesPromotion.forEach(index => {
    articles[index].promotion = true;
  });
}


document.addEventListener("DOMContentLoaded", () => {
  const reviewsModal = document.getElementById("reviews-modal");
  const faqModal = document.getElementById("faq-modal");
  const openReviewsButton = document.getElementById("open-reviews");
  const openFaqButton = document.getElementById("open-faq");
  const closeReviewsButton = document.getElementById("close-reviews");
  const closeFaqButton = document.getElementById("close-faq");

  // Ouvrir les modales
  openReviewsButton.addEventListener("click", () => {
      reviewsModal.style.display = "flex";
  });

  openFaqButton.addEventListener("click", () => {
      faqModal.style.display = "flex";
  });

  // Fermer les modales
  closeReviewsButton.addEventListener("click", () => {
      reviewsModal.style.display = "none";
  });

  closeFaqButton.addEventListener("click", () => {
      faqModal.style.display = "none";
  });

  // Fermer les modales en cliquant à l'extérieur
  window.addEventListener("click", (event) => {
      if (event.target === reviewsModal) {
          reviewsModal.style.display = "none";
      }
      if (event.target === faqModal) {
          faqModal.style.display = "none";
      }
  });
});



  

// agrandissement 

document.addEventListener("DOMContentLoaded", () => {
  const articlesContainer = document.querySelector(".articles-list");

  // Créer une modale pour afficher l'image
  const modal = document.createElement("div");
  modal.classList.add("modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <img id="modal-image" src="" alt="Image de l'article">
      <h3 id="modal-title"></h3>
      <p id="modal-details"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImage = modal.querySelector("#modal-image");
  const modalTitle = modal.querySelector("#modal-title");
  const modalDetails = modal.querySelector("#modal-details");
  const closeButton = modal.querySelector(".close-button");

  // Gestion des clics sur les images
  articlesContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      const articleCard = event.target.closest(".article-card");
      const ref = articleCard.querySelector(".ajouter-panier").dataset.ref;
      const article = articles.find((art) => art.ref === ref);

      if (article) {
        modalImage.src = article.photo;
        modalImage.alt = article.nom;
        modalTitle.textContent = article.nom;
        modalDetails.innerHTML = `
          Origine : ${getOrigine(article.ref)}<br>
          Prix : ${getPrix(article.ref)} € / ${getUnite(article.ref)}
        `;
        modal.classList.add("show");
      }
    }
  });

  // Fermer la modale
  closeButton.addEventListener("click", () => {
    modal.classList.remove("show");
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.remove("show");
    }
  });
});



// Pour la barre de recherche 

document.getElementById("search-button").addEventListener("click", () => {
  const searchTerm = document.getElementById("search-input").value.toLowerCase();
  const articlesContainer = document.querySelector(".articles-list");

  const filteredArticles = articles.filter(article =>
    article.nom.toLowerCase().includes(searchTerm)
  );

  articlesContainer.innerHTML = ""; // Vider les résultats
  filteredArticles.forEach(article => {
    const articleCard = document.createElement("div");
    articleCard.classList.add("article-card");

    // Badge promotion
    if (article.promotion) {
      const promoBadge = document.createElement("div");
      promoBadge.classList.add("promo-badge");
      promoBadge.textContent = "Promo spéciale !";
      articleCard.appendChild(promoBadge);
    }

    articleCard.innerHTML = `
      <img src="${article.photo}" alt="${article.nom}">
      <div class="details">
        <h3>${article.nom}</h3>
        <p>Origine : ${getOrigine(article.ref)}</p>
        <p>
          Prix : <span class="${article.promotion ? 'prix-barre' : ''}">
          ${getPrix(article.ref)} €</span>
          ${article.promotion ? `<span class="prix-promo">${(getPrix(article.ref) * 0.8).toFixed(2)} €</span>` : ""}
        </p>
        <label>Quantité : <input type="number" min="1" value="1" data-ref="${article.ref}"></label>
        <button class="ajouter-panier" data-ref="${article.ref}">Ajouter au panier</button>
      </div>
    `;
    articlesContainer.appendChild(articleCard);
  });

  ajouterEvenementsBoutons(); // Réattribuer les événements pour les nouveaux articles
});



// Basculement entre les deux modes
document.getElementById("toggle-dark-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  document.getElementById("toggle-dark-mode").textContent = isDarkMode
    ? "Désactiver le mode sombre"
    : "Activer le mode sombre";
});




// Promo

const countdownElement = document.getElementById("countdown");
const promoEndTime = new Date(Date.now() + 24 * 60 * 60 * 1000); // Promo dans 24 heures

function updateCountdown() {
  const now = new Date();
  const diff = promoEndTime - now;

  if (diff <= 0) {
    document.getElementById("promo").textContent = "La promotion est terminée !";
    clearInterval(interval);
    return;
  }

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();







  




  

