$(document).ready(function(){
  carousel();
})

function carousel(){
  // SALVO IN UNA VARIABILE LA FRECCETTA NEXT
  var next = $('.slider-wrapper .next');

  // AL CLICK SULLA FRECCIA DESTRA DEVO RIMUOVERE LA CLASSE ACTIVE ALLA PRIMA IMMAGINE E AGGIUNGERLA ALLA SECONDA IMMAGINE
  next.click(function () {
    nextImage();
    nextCircle();
  })
  // AL CLICK SU NEXT, RICHIAMO LA FUNZIONE NEXT IMAGE
  function nextImage(){
    // CREO UNA VARIABILE PER SELEZIONARE L'IMMAGINE CHE HA ATTUALMENTE CLASSE ACTIVE
    var imageA = $('.slider-wrapper .images img.active');

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

  // PRENDIAMO EVENTO TASTO PREMUTO SU TASTIERA
  $(document).keyup(function (e) {

    // SE PREMO TASTO DESTRO, SCORRO A DESTRA
    if (e.keyCode == "39") {
      console.log('ok');
      nextImage();
      nextCircle();
    }

    // SE PREMO TASTO A SINISTRA, SCORRO A SINISTRA
    if (e.keyCode == "37") {
      prevImage();
      prevCircle();
    }
  })

 // PRENDO IL CLICK SUL PALLINO E GLI RICHIAMO DENTRO LA FUNZIONE SLIDER
 var circle = $('.slider-wrapper .nav i'); //variabile per selezionare i pallini

 // AL CLICK SUL PALLINO SI ESEGUE LA FUNZIONE SEGUENTE
 circle.click(function(){
   var img = $('.slider-wrapper .images img'); //variabile per selezionare le immagini
   var circleA = $('.fas.fa-circle.active');//variabile per selezionare il pallino con classe active
   circleA.removeClass('active');//togliere la classe active dal pallino con classe active
   $(this).addClass('active');// si aggiunge la classe active solo al pallino cliccato quando si clicca
   console.log(this);

   // DA 1 A 4
   for (var i = 0; i < 4; i++) {
      if (circle[i] == this) {//quando l'indice i del pallino ?? uguale a this, cio?? al pallino cliccato
       img.removeClass('active');//si rimuove la classe active alle immagini
       $(img[i]).addClass('active');//si aggiunge la classe active all'immagine che ha indice i
     }
    }
 })



}
