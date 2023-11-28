// script.js

$(document).ready(function() {
    $("#contactForm").submit(function(event) {
      // Implement your form submission logic here
  
      // For demonstration purposes, let's simulate success and failure
      var isSuccess = Math.random() < 0.5; // Simulating a 50% success rate
  
      if (isSuccess) {
        // Display success message
        alert("Message sent successfully!");
  
        // Play success sound
        playSound(sucess.mp3);
      } else {
        // Display failure message
        alert("Message sending failed. Please try again.");
  
        // Play failure sound
        playSound("failure.mp3");
      }
  
      // Prevent default form submission
      event.preventDefault();
    });
  });
  
  function playSound(soundFile) {
    var audio = new Audio(soundFile);
    audio.play();
  }
  
  $(document).ready(function() {
    // Анимация при появлении
    anime({
      targets: '.main-content',
      opacity: [0, 1],
      translateY: [20, 0],
      easing: 'easeInOutQuad',
      duration: 800,
      delay: anime.stagger(100)
    });

    // Анимация для навигации
    $('.nav-link').on('click', function(e) {
      e.preventDefault();
      var targetSection = $(this).attr('href');

      // Анимация скрытия текущего раздела
      anime({
        targets: '.main-content',
        opacity: 0,
        translateY: -20,
        easing: 'easeInOutQuad',
        duration: 800,
        complete: function() {
          // Переход к новому разделу
          window.location.href = targetSection;
        }
      });
    });

    // Анимация при отправке формы
    $("#contactForm").submit(function(event) {
      event.preventDefault();

      anime({
        targets: '.main-content',
        opacity: 0,
        translateY: -20,
        easing: 'easeInOutQuad',
        duration: 800,
        complete: function() {
          // Ваша логика отправки формы
          alert("Message sent successfully!");
          // Переход к новому разделу, например, обновление страницы
          window.location.reload();
        }
      });
    });
  });