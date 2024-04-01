// Descrizione:
// Partendo dal markup fornito nello starter pack, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce

const { createApp } = Vue;

createApp({
    // Partendo dal markup fornito nello starter pack, rifare lo slider ma questa volta usando Vue.
    data() {
      return {
        // inserisco nei data l'array di oggetti, con le relative key per indice
        slides: [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, 
            {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, 
            {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, 
            {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, 
            {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
        // creo la variabile per il conteggio delle slides
        imageCounter: 0,
      }
    },
    methods: {
        // scrivo la funzione per passare alla thumb successiva
        nextImage: function() {
            // se la variabile imageCounter è minore dell'ultimo indice dell'array slides...
            if (this.imageCounter < this.slides.length - 1) {
                // la funzione incrementa di +1 la variabile conteggio
                this.imageCounter++;
            } else {
                // altrimenti la variabile non incrementerà
                this.imageCounter = 0;
            }  
        },
        // scrivo la funzione per passare alla thumb precendente
        prevImage: function(){
            // se la variabile imageCounter è maggiore di 0 (primo elemento dell'array slides)...
            if (this.imageCounter > 0){
                // la funzione decrementa di -1 la variabile conteggio
                this.imageCounter--;
            } else {
                // altrimenti la variabile risuterà pari l'indice dell'ultimo elemento
                this.imageCounter = this.slides.length - 1;
            }
        },
        // bonus 1 - al click su una thumb, visualizzare in grande l'immagine corrispondente
        // scrivo la funzione per visualizzare l'immagine al click richiamando un argomento: l'indice dell'array
       showThisImage: function(clickIndex) {
        this.imageCounter = clickIndex;
       }
    }
}).mount('#app');