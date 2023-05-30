import Data from './featureData.js';

const { featureData } = Data;
const features = document.getElementById('features');
const hamburger = document.getElementById('hamburger');
const popupMenu = document.getElementById('popup-menu');
const closeButton = document.getElementById('close-btn');
const body = document.getElementById('body');
const featureCol1 = document.getElementById('feature-col1');
const featureCol2 = document.getElementById('feature-col2');

hamburger.addEventListener('click', () => {
  popupMenu.style.left = '0%';
  body.style.position = 'fixed';
});

closeButton.addEventListener('click', () => {
  popupMenu.style.left = '-110%';
  body.style.position = 'static';
});

function renderFeatures(data) {
  return `
    <div class="lecturer">
        <div class="lecturer-col1"><img src="${data.image.img_src}" alt="${data.image.img_alt}" /></div>
        <div class="lecturer-col2">
            <p class="lecturer-name">${data.info.name}</p>
            <div class="pos">
            <p class="lecturer-position">${data.info.position}</p>
            </div>
            <p class="lecturer-work">${data.info.work}</p>
        </div>
    </div>
    `;
}

featureData.forEach((data, index) => {
  if (index < 3) {
    featureCol1.innerHTML += renderFeatures(data);
  }
  else {
    featureCol2.innerHTML += renderFeatures(data);
  }
});

function myFunction(pageWidth) {
  if (pageWidth.matches) {
    featureCol1.children[2].classList.toggle('inactive');
    featureCol2.children[0].classList.toggle('inactive');
    featureCol2.children[1].classList.toggle('inactive');
    featureCol2.children[2].classList.toggle('inactive');
    const btn = document.createElement('BUTTON');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'show-more');
    features.appendChild(btn);
    features.children[2].innerHTML = 'Show More <span><i class="fa fa-chevron-down"></i></span>';
  } else {
    featureCol1.children[2].classList.toggle('inactive');
    featureCol2.children[0].classList.toggle('inactive');
    featureCol2.children[1].classList.toggle('inactive');
    featureCol2.children[2].classList.toggle('inactive');
  }
}

const pageWidth = window.matchMedia('(max-width: 768px)');
myFunction(pageWidth);
pageWidth.addEventListener('onload', myFunction);

const showMore = document.querySelector('.show-more');
showMore.addEventListener('click', () => {
  featureCol1.children[2].classList.toggle('inactive');
  featureCol2.children[0].classList.toggle('inactive');
  featureCol2.children[1].classList.toggle('inactive');
  featureCol2.children[2].classList.toggle('inactive');
  features.children[2].style.display = 'none';
});