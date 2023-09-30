
/*

                HOMEPAGE BUTTON AND TITLE ELEMENT MANIPULATION

*/

//CONSTANTS
const title = document.getElementById('title-id');
const socialL = document.getElementById('socials');
const socialR = document.getElementById('socialR');
const socialContainerL = document.getElementById('social-containerL');
const socialContainerR = document.getElementById('social-containerR');
const documentHeight = document.documentElement.scrollHeight;
const leftButtonAnimate = document.getElementById('bookingL');
const rightButtonAnimate = document.getElementById('bioR');
const bookingContainer = document.getElementById('booking-container');
const video = document.getElementById('background-video');

const newPositionX = -25;
const newPositionY = -25;
const newPositionX2 = 25;
const newPositionY2 = -25;
const newPositionX3 = 225;
const newPositionY3 = 0;
const newPositionX4 = 50;
const newPositionY4 = 50;

// video --> image background       VIDEO CHANGE MOBILE TO IMAGE
if (window.innerwidth > 600){
  //VIDEO PLAYBACK
const videos = document.querySelectorAll('.video');
videos.forEach((video) => {
  let forward = true;
  video.play();
});
}

if (window.innerWidth <= 600){
  // Create a new image element
let img = document.createElement('img');

// Set the image source
img.src = 'src/IMG_4660.JPG';

// Copy the class from the video to the image
img.className = video.className;

img.id = 'background-image';

// Replace the video with the image
video.parentNode.replaceChild(img, video);
}

const backgroundImage = document.getElementById('background-image')
//Autoplay detection
                 /*
                    
                    FUNCTIONS
                    
                    */
// video opacity 0
function videoOpacity0(){
  video.classList.add('scrolled-style');
}

function videoOpacity1(){
  video.classList.remove('scrolled-style');
}
//BOOKING CONTAINER ADD
function bookingContainerAdd(){
  bookingContainer.classList.add('scrolled');
  bookingContainer.classList.remove('initial');
}

//BOOKING CONTAINER REMOVE
function bookingContainerRemove(){
  bookingContainer.classList.remove('scrolled');
  bookingContainer.classList.add('initial');
}

//BOOKING ANIMATION ADD
function bookingBioButtonAnimate(){
  leftButtonAnimate.classList.remove('initial');
  leftButtonAnimate.classList.add('scrolled');
  rightButtonAnimate.classList.remove('initial');
  rightButtonAnimate.classList.add('scrolled');
  leftButtonAnimate.style.transition = 'transform 1s ease-in-out';
  rightButtonAnimate.style.transition = 'transform 1s ease-in-out';
  leftButtonAnimate.style.transform = `translate(${newPositionX}vw, ${newPositionY}vh)`;
  rightButtonAnimate.style.transform = `translate(${newPositionX2}vw, ${newPositionY2}vh)`;
}

function bookingBioButtonAnimateSmall(){
  leftButtonAnimate.classList.remove('initial');
  leftButtonAnimate.classList.add('scrolled');
  rightButtonAnimate.classList.remove('initial');
  rightButtonAnimate.classList.add('scrolled');
  leftButtonAnimate.style.transition = 'transform 1s ease-in-out';
  rightButtonAnimate.style.transition = 'transform 1s ease-in-out';
  leftButtonAnimate.style.transform = `translate(${newPositionX3}px, ${newPositionY3}px)`;
  rightButtonAnimate.style.transform = `translate(${newPositionX4}px, ${newPositionY4}px)`;
}
//BOOKING ANIMATION REMOVE
function bookingBioButtonRemove(){
  leftButtonAnimate.classList.remove('scrolled');
  rightButtonAnimate.classList.remove('scrolled');
  leftButtonAnimate.classList.add('initial');
  rightButtonAnimate.classList.add('initial');
  leftButtonAnimate.style.transition = 'transform 1s ease';
  rightButtonAnimate.style.transition = 'transform 1s ease';
  leftButtonAnimate.style.transform = `translate(0%, 0%)`;
  rightButtonAnimate.style.transform = `translate(0%, 0%)`;
}

//TITLE ADD
function titleAdd(){
  title.classList.add('scrolled-style');
  title.classList.remove('initial-style');
}

//TITLE REMOVE
function titleRemove(){
  title.classList.remove('scrolled-style');
    title.classList.add('initial-style');
}

//SOCIAL CONTAINER ADD
function socialContainerAdd(){
  socialContainerL.classList.remove('initial');
  socialContainerL.classList.add('scrolled');
  socialContainerR.classList.remove('initial');
  socialContainerR.classList.add('scrolled');
}

//SOCIAL CONTAINER REMOVE
function socialContainerRemove(){
  socialContainerL.classList.remove('scrolled');
  socialContainerL.classList.add('initial');
  socialContainerR.classList.remove('scrolled');
  socialContainerR.classList.add('initial');
}

//SOCIAL CHILDREN COLOR
function socialLeftChildlAdd(){
  socialL.classList.add('scrolled-style2');
  socialL.classList.remove('initial-style');
}

//SOCIAL CHILDREN COLOR REMOVE
function socialLeftChildRemove(){
  socialL.classList.remove('scrolled-style2');
  socialL.classList.add('initial-style');
}

//SOCIAL CHILDREN COLOR
function socialRightChildAdd(){
  socialR.classList.add('scrolled-style');
  socialR.classList.remove('initial-style');
}

//SOCIAL CHILDREN COLOR REMOVE
function socialRightChildRemove(){
  socialR.classList.remove('scrolled-style');
  socialR.classList.add('initial-style');
}

function imgOpacity0(){
  backgroundImage.classList.add('scrolled-style');
}

function imgOpacity1(){
  backgroundImage.classList.remove('scrolled-style');
}

//SCROLL LISTENER LOCATION CHANGES
window.addEventListener('scroll', () => {
const scrollPosition = window.scrollY;
const scrollPercentage = (scrollPosition / documentHeight) * 100;
const scrollTriggerPercentage = 5;

//                              VIDEO OPACITY
if (window.innerWidth > 600){
  if (scrollPercentage >= 5) {
    videoOpacity0();
  } else {
    videoOpacity1();
  } 
}  else {
  if (scrollPercentage > 3) {
    imgOpacity0();
  } else {
    imgOpacity1();
  }
}
//                              TITLE
  if (scrollPercentage >= 1) {
    titleAdd();
  } else {
    titleRemove();
  }

  
  //                            BOOKING/BIO CONTAINER POSITION CHANGE
  if (scrollPercentage >= 5) {
    bookingContainerAdd();
  } else if (scrollPercentage <= 20) {
    bookingContainerRemove();
  }

                              //ANIMATE BIO & BOOKING BUTTON ON SCROLL -- CHANGE CHILD CLASSES
  if (scrollPercentage >= scrollTriggerPercentage) {
    if (window.innerWidth > 600){
      bookingBioButtonAnimate();
    } else {
      bookingBioButtonAnimateSmall();
    }
  } else {
    bookingBioButtonRemove();
  }
  //Socials desktop and mobile
if (window.innerwidth > 600) {
  if (scrollPercentage >= 9) {
    socialLeftChildlAdd();
    socialRightChildAdd();
  } else {
    socialLeftChildRemove();
    socialRightChildRemove();
  }

  //SOCIALS TO ABSOLUTE POSITION 2
  if(scrollPercentage > 24){
    socialContainerAdd();
  } else {
    socialContainerRemove();
  }
} else {
  if (scrollPercentage >= 5) {
    socialLeftChildlAdd();
    socialRightChildAdd();
    socialContainerAdd();
  } else {
    socialLeftChildRemove();
    socialRightChildRemove();
    socialContainerRemove();
  }

  
}
});

window.addEventListener('resize', () => {
  
});



//IMAGES ARRAY
let images = [
    
   
    {src: 'src/DSC01714.jpg', alt: 'image 10'},
    {src: 'src/0027.jpg', alt: 'image 2'},
    {src: 'src/DSC01708.jpg', alt: 'image 12'},
    {src: 'src/IMG_9845.JPG', alt: 'image 22'},
    {src: 'src/IMG_1738.jpg', alt: 'image 14'},
    {src: 'src/0025.jpg', alt: 'A New Hope'},
    {src: 'src/0029.jpg', alt: 'image 3'},
    {src: 'src/DSC00767.jpg', alt: 'image 4'},
    {src: 'src/kris.jpg', alt: 'image 30'},
    {src: 'src/B65DE0BC-EBAC-48B2-A5A8-0EBB917F2816.JPG', alt: 'image 6'},
    {src: 'src/Chioke_Cover.JPG', alt: 'image 7'},
    {src: 'src/DSC01708.jpg', alt: 'image 9'},
    {src: 'src/DSC02431.jpg', alt: 'image 11'},
    {src: 'src/752E1743-7D0B-4F0B-94F8-8ED66F885366.JPG', alt: 'image 5'},
    {src: 'src/IMG_0200.JPG', alt: 'image 13'},
    {src: 'src/IMG_3569.JPG', alt: 'image 15'},
    {src: 'src/IMG_4660.JPG', alt: 'image 16'},
    {src: 'src/IMG_5804.JPG', alt: 'image 17'},
    {src: 'src/IMG_9129.JPG', alt: 'image 18'},
    {src: 'src/IMG_9264.jpg', alt: 'image 19'},
    {src: 'src/DSC02969_copy_2.jpg', alt: 'image 20'},
    {src: 'src/IMG_9538.JPG', alt: 'image 21'},
    {src: 'src/0026.jpg', alt: 'Image 1'},
    {src: 'src/RNI-Aero-IMG-5F910173-B624-4669-8DD9-94DADAD13CBA.JPG', alt: 'image 23'},
    {src: 'src/RNI-Aero-IMG-A4AF7D54-CC93-417F-ABEA-11097B45F1F7.JPG', alt: 'image 24'},
    {src: 'src/RNI-Aero-IMG-AB49BD81-A813-4B51-ABC7-77B0DA2B9908.JPG', alt: 'image 25'},
    {src: 'src/RNI-Films-IMG-473C00B5-F6B8-4F15-AEBC-63DAB9A3469E.jpg', alt: 'image 26'},
    {src: 'src/amaranth_candle.jpg', alt: 'image 27'},
    {src: 'src/clock_work_dust_scratch.JPG', alt: 'image 28'},
    {src: 'src/hbjh-2.JPG', alt: 'image 29'},
    {src: 'src/krisssfuyg.jpg', alt: 'image 31'},
    {src: 'src/other_smear.jpg', alt: 'image 32'},
    {src: 'src/photo1.jpg', alt: 'image 33'}
  ];


/*

                    GALLERY FORMAT CHANGES SECTION

*/


const divOuter = document.getElementById('gallery-container');
const divInner = document.getElementById('galleryDisplay');

// DEFAULT SETTINGS
document.addEventListener('DOMContentLoaded', () => {
  displayInitialRow();
});

//SET GALLERY WIDTH
let gallery;
let container;
function setGalleryWidth(){
  let pixelMargin = (images.length * (70)) + 200;
  gallery.style.marginLeft = `${pixelMargin}px`;
}

//DEFAULT LOADED DISPLAY
function displayInitialRow() {
  
  divOuter.classList.add("gallery-container");
  divInner.classList.add("gallery");
  gallery = document.querySelector('.gallery');
  
  images.forEach((image, index) => {
    let div = document.createElement('div');
    div.classList.add('img-box');
    div.style.backgroundImage = `url(${image.src})`;
  
    gallery.appendChild(div);
  });

  //setGalleryWidth();
}

// ROW LAYOUT BASIC GENERATION
function displayRow() {
  clearGrid();
  divOuter.classList.add("gallery-container");
  divInner.classList.add("gallery");
  gallery = document.querySelector('.gallery');
  
  images.forEach((image, index) => {
    let div = document.createElement('div');
    div.classList.add('img-box');
    div.style.backgroundImage = `url(${image.src})`;
  
    gallery.appendChild(div);
  });
  //setGalleryWidth();
}

//GRID LAYOUT BASIC GENERATION
function displayGrid() {
  clearRow();
  divInner.classList.add("container");
  container = document.querySelector('.container');
  
  images.forEach((image, index) => {
    if (index % 3 === 0) {
      container.innerHTML += '<div class="image-row"></div>';
    }
    
    let imageRow = container.querySelectorAll('.image-row');
    imageRow[imageRow.length - 1].innerHTML += `<img class="portfolio-image" src="${image.src}" alt="${image.alt}">`;
  });
}

//CLEAR GRID
function clearGrid() {
  container = document.querySelector('.container');
  container.innerHTML = '';
  divInner.classList.remove("container");
}

//CLEAR ROW
function clearRow() {
  gallery = document.querySelector('.gallery');
  gallery.innerHTML = null;
  divOuter.classList.remove("gallery-container");
  divInner.classList.remove("gallery");
}

// LAYOUT SWITCH BUTTONS
document.getElementById('row-button').addEventListener('click', displayRow);
document.getElementById('grid-button').addEventListener('click', displayGrid);
const gridButton = document.getElementById('grid-button');
const rowButton = document.getElementById('row-button');

// SCROLL OPACITY CHANGE IMAGES / DISPLAY BUTTONS
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const scrollPercentage = (scrollPosition / documentHeight) * 100;

  if (scrollPercentage > 10) {
    divOuter.classList.add("scrolled");
    divInner.classList.add("scrolled");
    rowButton.classList.add("scrolled");
    gridButton.classList.add("scrolled");
  } else if (scrollPercentage <= 10) {
    divOuter.classList.remove("scrolled");
    divInner.classList.remove("scrolled");
    rowButton.classList.remove("scrolled");
    gridButton.classList.remove("scrolled");
  }

});

$(document).on('touchstart click', function(e) {
  if (!$(e.target).closest('.img-box').length) {
      $('.img-box').removeClass('active');
  }
});

$('.img-box').on('touchstart click', function(e){
  e.stopPropagation(); // This prevents the document click event from firing when .img-box is clicked
  $(this).toggleClass('active');
});

