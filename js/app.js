//Variables
const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');



//functions




//event listeners
lightboxEnabled.forEach(image=>{
    image.addEventListener('click', (e)=>{
        console.log(e.target);


    });


});


