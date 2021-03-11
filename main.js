$(document).ready(function(){
  carousel();
})

function carousel(){
  // SALVO IN UNA VARIABILE LA FRECCETTA NEXT
  var next = $('.next');

  // AL CLICK SULLA FRECCIA DESTRA DEVO RIMUOVERE LA CLASSE ACTIVE ALLA PRIMA IMMAGINE E AGGIUNGERLA ALLA SECONDA IMMAGINE
  next.click(function () {
    nextImage();
    nextCircle();
  })
  // AL CLICK SU NEXT, RICHIAMO LA FUNZIONE NEXT IMAGE
  function nextImage(){
    // CREO UNA VARIABILE PER SELEZIONARE L'IMMAGINE CHE HA CLASSE ACTIVE
    var imageA = $('.images img.active');

    // RIMUOVO CLASSE ACTIVE DA IMAGEA
    imageA.removeClass('active');
    // SE L'IMAGEA HA CLASSE LAST, AGGIUNGO LA CLASSE ACTIVE ALL'IMAGINE FIRST
    if (imageA.hasClass('last')) {
    $('.images img.first').addClass('active');
    } else {
    // ALTRIMENTI, AGGIUNGO LA CLASSE ACTIVE ALL'IMMAGINE SUCCESSIVA
    imageA.next().addClass('active');
    }
  }

// CREO FUNZIONE NEXTCIRCLE PER FAR SI' CHE AL CLICK SULLA FRECCETTA NEXT SCORRANO I PALLINI VERSO AVANTI
  function nextCircle(){
    var circleA = $('.fas.fa-circle.active');
    // AL CLICK SULLA FRECCETTA DESTRA, IL CIRCLEA PERDE LA CLASSE ACTIVE
    circleA.removeClass('active');

    if (circleA.hasClass('last')) {
      $('.fas.fa-circle.first').addClass('active');
    } else {
      circleA.next().addClass('active');
    }
  }

  // SALVO IN UNA VARIABILE LA FRECCETTA PREV
  var prev = $('.prev');

  // AL CLICK SU PREV, RICHIAMO LA FUNZIONE PREV IMAGE
  prev.click(function(){
    prevImage();
    prevCircle();
  })

  // CREO LA FUNCTION PREV
  function prevImage(){
    // CREO UNA VARIABILE PER SELEZIONARE L'IMMAGINE CHE HA CLASSE ACTIVE
    var imageA = $('.images img.active');

    imageA.removeClass('active');
    if (imageA.hasClass('first')) {
      $('.images img.last').addClass('active');
    } else {
      imageA.prev().addClass('active');
    }
  }

  function prevCircle(){
    var circleA = $('.fas.fa-circle.active');

    circleA.removeClass('active');
    if (circleA.hasClass('first')) {
      $('.fas.fa-circle.last').addClass('active');
    } else {
      circleA.prev().addClass('active');
    }
  }

 // PRENDO IL CLICK SUL PALLINO E GLI RICHIAMO DENTRO LA FUNZIONE SLIDER
 var circle = $('i.fa-circle');
 circle.click(function(){
   var circleA = $('.fas.fa-circle.active');
   circleA.removeClass('active');
   $(this).addClass('active');

   if (circle.hasClass('active')) {
     i= 0;
     while (i < 4) {
       console.log(img[i]);
       i++;
     }
   }
 })
 var img = $('.images img');
 // PER 4 VOLTE AL CLICK SUL PALLINO CON INDICE I PRENDO L'IMMAGINE CON INDICE I E LE AGGIUNGO CLASSE ACTIVE
 // SE IL PALLINO CON INDICE I HA CLASSE ACTIVE, METTO ACTIVE ALL'IMMAGINE CON STESSO I
 console.log(img[1]);
 console.log(circle[0]);


}
