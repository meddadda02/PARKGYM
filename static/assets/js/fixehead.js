function setActive(element) {
    // Supprimez la classe 'active' de tous les liens
    document.querySelectorAll('nav ul li a').forEach(link => {
      link.classList.remove('active');
    });
    
    // Ajoutez la classe 'active' au lien cliqué
    element.classList.add('active');
  }