// js para tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//js para popovers
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));



$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    })
});

$(document).ready(function() {
    $('h5.ingredient-title').on('dblclick', function() {
      $(this).css('color', 'red');
    });

    $('h5.preparation-title').on('dblclick', function() {
      $(this).css('color', 'red');
    });
  });

  $(document).ready(function() {
    $('.card-title').on('dblclick', function() {
      $('.card-body').toggle();
    });
    
  });

  