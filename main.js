$(document).ready(function(){
  carousel();
})

function carousel(){
  // SALVO IN UNA VARIABILE LA FRECCETTA NEXT
  var next = $('.next');
  // SALVO IN UNA VARIABILE LE IMMAGINI
  var images = $('.images img');

  var imageA = $('.images img.active');

  // AL CLICK SULLA FRECCIA DESTRA DEVO RIMUOVERE LA CLASSE ACTIVE ALLA PRIMA IMMAGINE E AGGIUNGERLA ALLA SECONDA IMMAGINE
  next.click(function () {
    if (images.hasClass('active')) {
    images.removeClass('active');
    }
  })


}
