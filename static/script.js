// Dropdown menu
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuLinks = mobileMenu.querySelectorAll('a'); // Seleciona todos os links dentro do menu

    menuIcon.addEventListener('click', function (event) {
      event.stopPropagation(); // Evita que o clique no ícone feche o menu
      // Alterna a exibição do menu
      if (mobileMenu.style.display === 'flex') {
        mobileMenu.style.display = 'none';
      } else {
        mobileMenu.style.display = 'flex';
      }
    });

    // Fecha o menu caso clique fora do menu ou do ícone
    document.addEventListener('click', function (event) {
      if (!menuIcon.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.style.display = 'none';
      }
    });

    // Fecha o menu ao clicar em qualquer link dentro dele
    menuLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.style.display = 'none';
      });
    });
  });



// Scroll to Specific sections
document.getElementById("scroll-to-section").addEventListener('click', function() {
    document.getElementById().scrollIntoView({ 
      behavior: 'smooth', /* Smooth scroll */
      block: 'start' /* Align to the top */
    });
  });


  // Scroll down shape
  function scrollToSection() {
    const targetSection = document.getElementById('About');
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}


  function scrollToContact() {
    const targetSection = document.getElementById('Contato');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function scrollToContacts() {
    const targetSection = document.getElementById('Contato');
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }


// SHOW MORE BUTON (CARDÁPIO)
function showMore() {
    var hiddenItems = document.querySelectorAll('.hidden');

    hiddenItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.add('show');
        }, index * 150);  // Reduz o tempo entre as transições para suavizar
    });

    // Transição suave para o botão "Ver mais"
    var showMoreBtn = document.getElementById('showMoreBtn');
    showMoreBtn.style.transition = 'opacity 0.3s ease-out';  // Adiciona transição suave
    showMoreBtn.style.opacity = 1;  // Certifica-se de que o botão começa visível

    // Esconde o botão "Ver mais" com transição
    showMoreBtn.style.opacity = 0;  // Faz o botão "Ver mais" desaparecer
    setTimeout(function() {
        showMoreBtn.style.display = 'none';  // Esconde o botão após a transição
        document.getElementById('showLessBtn').style.display = 'block';  // Mostra o botão "Ver menos"
        var showLessBtn = document.getElementById('showLessBtn');
        showLessBtn.style.opacity = 0;  // Começa invisível
        setTimeout(function() {
            showLessBtn.style.transition = 'opacity 0.3s ease-in';
            showLessBtn.style.opacity = 1;  // Faz o botão "Ver menos" aparecer
        }, 10);  // Breve atraso para aplicar a transição
    }, 300);  // Tempo da transição

    // Transição suave para o texto
    var showMoreText = document.getElementById('showMoreText');
    showMoreText.style.transition = 'opacity 0.3s ease-out';  // Adiciona transição suave
    showMoreText.style.opacity = 0;  // Faz o texto desaparecer

    // Mostra o texto "Fechar cardápio" após o tempo da transição
    setTimeout(function() {
        showMoreText.style.display = 'none';  // Esconde o texto após a transição
        document.getElementById('showLessText').style.display = 'block';  // Mostra o texto "Fechar cardápio"
        document.getElementById('showLessText').style.opacity = 0;  // Começa invisível
        setTimeout(function() {
            document.getElementById('showLessText').style.transition = 'opacity 0.3s ease-in';
            document.getElementById('showLessText').style.opacity = 1;  // Faz o texto aparecer
        }, 10);  // Breve atraso para aplicar a transição
    }, 300);  // Tempo da transição
}

// SHOW MLESS BUTON (CARDÁPIO)
function showLess() {
    var hiddenItems = document.querySelectorAll('.hidden');

    hiddenItems.forEach(function(item, index) {
        setTimeout(function() {
            item.classList.remove('show');
        }, index * 150);  // Mesmo tempo para ocultar suavemente
    });

    // Transição suave para o botão "Ver menos"
    var showLessBtn = document.getElementById('showLessBtn');
    showLessBtn.style.transition = 'opacity 0.3s ease-out';  // Adiciona transição suave
    showLessBtn.style.opacity = 1;  // Certifica-se de que o botão começa visível

    // Esconde o botão "Ver menos" com transição
    showLessBtn.style.opacity = 0;  // Faz o botão "Ver menos" desaparecer
    setTimeout(function() {
        showLessBtn.style.display = 'none';  // Esconde o botão após a transição
        document.getElementById('showMoreBtn').style.display = 'block';  // Mostra o botão "Ver mais"
        var showMoreBtn = document.getElementById('showMoreBtn');
        showMoreBtn.style.opacity = 0;  // Começa invisível
        setTimeout(function() {
            showMoreBtn.style.transition = 'opacity 0.3s ease-in';
            showMoreBtn.style.opacity = 1;  // Faz o botão "Ver mais" aparecer
        }, 10);  // Breve atraso para aplicar a transição
    }, 300);  // Tempo da transição

    // Transição suave para o texto
    var showLessText = document.getElementById('showLessText');
    showLessText.style.transition = 'opacity 0.3s ease-out';  // Adiciona transição suave
    showLessText.style.opacity = 0;  // Faz o texto desaparecer

    // Mostra o texto "Cardápio completo" após o tempo da transição
    setTimeout(function() {
        showLessText.style.display = 'none';  // Esconde o texto após a transição
        document.getElementById('showMoreText').style.display = 'block';  // Mostra o texto "Cardápio completo"
        document.getElementById('showMoreText').style.opacity = 0;  // Começa invisível
        setTimeout(function() {
            document.getElementById('showMoreText').style.transition = 'opacity 0.3s ease-in';
            document.getElementById('showMoreText').style.opacity = 1;  // Faz o texto aparecer
        }, 10);  // Breve atraso para aplicar a transição
    }, 300);  // Tempo da transição
}

