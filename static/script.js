// Scroll to Specific sections
document.getElementById('scroll-to-section').addEventListener('click', function() {
    document.getElementById('About').scrollIntoView({ 
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


/// DEPOIMENTOS

// EVENTOS
//function scrolll(){
//    var left=document.querySelector(".scroll-images");
//   left.scrollBy(-350,0)
//}

//function scrollr(){
//    var left=document.querySelector(".scroll-images");
//    left.scrollBy(350,0)
//}

///////////////
//function playVideo(src) {
//    const videoPlayer = document.getElementById('videoPlayer');
//    const clipContainer = document.getElementById('clipContainer');
//  
//    videoPlayer.src = src;
//    clipContainer.style.display = 'block';  // Show the video container
//    videoPlayer.load();  // Load the video source (this initializes the video)
//    videoPlayer.play();  // Automatically start playing the video
//  }
//  
//  function closeVideo() {
//    const videoPlayer = document.getElementById('videoPlayer');
//    const clipContainer = document.getElementById('clipContainer');
//  
//    videoPlayer.pause();  // Pause the video
//    videoPlayer.src = '';  // Clear the video source
//    clipContainer.style.display = 'none';  // Hide the video container
//  }

