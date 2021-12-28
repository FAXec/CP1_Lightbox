//Variables
const lightboxEnabled = document.querySelectorAll('.lightbox-enabled');
const lightboxArray = Array.from(lightboxEnabled);
const lastImage = lightboxArray.length - 1;
const lightboxContainer = document.querySelector('.lightbox-container');
const lightboxImage = document.querySelector('.lightbox-image');

const lightboxBtns = document.querySelectorAll('.lightbox-btn');
const lightboxBtnRight = document.querySelector('#right');
const lightboxBtnLeft = document.querySelector('#left');

let activeImage = '';




//functions
const showLightBox = () => {lightboxContainer.classList.add('active')}
const hideLightBox = () => {lightboxContainer.classList.remove('active')}

const setActiveImage = (image) =>{
    lightboxImage.src = image.dataset.imagesrc
    activeImage = lightboxArray.indexOf(image)
    // console.log(activeImage)

switch (activeImage) {
    case 0:        
    lightboxBtnLeft.classList.add('inactive');
    break;
    case lastImage:
    lightboxBtnRight.classList.add('inactive');
    break;
    default:
    lightboxBtns.forEach(btn =>{
        btn.classList.remove('inactive');
    });
    break;
}}


const removeBtnAnimation = () =>{
  lightboxBtns.forEach(btn =>{
    setTimeout(()  => {
      btn.blur()},200);
    })}



const transitionSlidesLeft = () => {
    lightboxBtnLeft.focus();
    activeImage === 0 ? setActiveImage(lightboxArray[lastImage]): setActiveImage(lightboxArray[activeImage].previousElementSibling);
    removeBtnAnimation();
    
}
const transitionSlidesRight = () => {
    lightboxBtnRight.focus();
    activeImage === lastImage ? setActiveImage(lightboxArray[0]): setActiveImage(lightboxArray[activeImage].nextElementSibling);
    removeBtnAnimation();
}


const transitionSlideHandler = (moveItems) =>{
    moveItems.includes('left') ? transitionSlidesLeft() : transitionSlidesRight();

}



//event listeners
lightboxEnabled.forEach(image=>{
    image.addEventListener('click', (e)=>{
        showLightBox();
        setActiveImage(image);        
    });
});

lightboxContainer.addEventListener('click', ()=>{
    // console.log('container clicked')
    hideLightBox();
});


lightboxBtns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        e.stopPropagation();
        transitionSlideHandler(e.currentTarget.id);
        // console.log(e.currentTarget.id);
    });    
});









