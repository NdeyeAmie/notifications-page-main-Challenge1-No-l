/*DOMContentLoaded est déclenché lorsque le contenu HTML de la 
page est complètement chargé et analysé  */

document.addEventListener("DOMContentLoaded", () => {
    const masquerToutBtn = document.querySelector(".masquer-comme-lu");
    const nombreDeMessNonlu = document.querySelector(".nombre-mes-nonlu");
    const notificationNonLu = document.querySelectorAll(".notification.non-lu");
  
    const mettreaJourLeCompteur = () => {
      const nonLuCompteur = document.querySelectorAll(".notification.non-lu");
      nombreDeMessNonlu.textContent = nonLuCompteur;
    };
  
    masquerToutBtn.addEventListener("click", () => {
      notificationNonLu.forEach(notification => notification.classList.remove("non-lu"));
      mettreaJourLeCompteur();
    });
  
    mettreaJourLeCompteur();
  });
  