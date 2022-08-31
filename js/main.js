var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    1200:{
      slidesPerView:3,
      spaceBetween : 70
    },
    1024:{
      slidesPerView : 3
    },
    758: {
      slidesPerView : 2,
    },
    320:{
      slidesPerView : 1
    }
  }
});

let row__storeIndonesia = document.querySelector('.row__storeIndonesia');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let box__wrapper__gallery__products = document.querySelector('.box__wrapper__gallery__products');
let dots = document.querySelector('.dots');
let rowProducts = document.querySelector('.row__products');

window.onload = getData;
async function getData(){
  await fetch(`https://fakestoreapi.com/products`)
  .then((response) => response.json())
  .then((data) => {
    getCreateFunc(data);
  });
}
function getCreateFunc (data){
  let randomData = data.sort(() => 0.5 - Math.random());
  let randomDataGet = randomData.slice(0,10);
  createFuncBanner(randomDataGet);
  createFuncGallery(randomData);
  createFuncProducts(randomData);
  createAllProducts(randomData);
}
function createFuncBanner(data){
  data.forEach((item) => {
    let bannerBox = document.createElement('div');
    bannerBox.classList = "box__images";
    bannerBox.innerHTML = `<img src="${item.image}" class="${item.title}">
                          <div class="banner__title">
                            <h1 class="title__banner__slider">${item.title}</h1>
                            <span class="price__banner">$${item.price}</span>
                            <span class="rating__banner">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            </span>
                          </div>
    `
    row__storeIndonesia.appendChild(bannerBox);

    let bannerEls = document.querySelectorAll('.box__images');
    let banner__title = document.querySelectorAll('.banner__title');

    for(let i = 0; i  < bannerEls.length; i++){
      let item = bannerEls[i];
      item.style.transform = `translateX(`+ 100 * (i % bannerEls.length) + `%)`;
    }

    let loop = 0 + 1000 *  3; 
    let autoPlay = setInterval(nextSlider,3000);
    row__storeIndonesia.addEventListener('mouseover',() => {
      autoPlay =  clearInterval(autoPlay);
    });
    row__storeIndonesia.addEventListener('mouseleave',() => {
      autoPlay = setInterval(nextSlider,3000)
    })
    next.addEventListener('click',() => {
     nextSlider();
    })
    function nextSlider(){
      loop++;
      for(let i = 0; i  < bannerEls.length; i++){
        let item = bannerEls[i];
        item.style.transform = `translateX(`+ 100 * (i - loop % bannerEls.length) + `%)`;
      }
    }
    prev.addEventListener('click',() => {
      prevtSlider()
    });
    function prevtSlider(){
      loop--;
      for(let i = 0; i  < bannerEls.length; i++){
        let item = bannerEls[i];
        item.style.transform = `translateX(`+ 100 * (i - loop % bannerEls.length) + `%)`;
      }
    }

  })
}

function createFuncGallery(data){
  let dataRandomGallery = data.sort(() => 0.5 * Math.random());
  let getDataRandomGallery = dataRandomGallery.slice(0,2);
  let dataRandomGalleryOne = data.slice(0,7);
  let getDataRand = dataRandomGalleryOne.sort(() => 0.5 - Math.random())
  let getDataOne = getDataRand.slice(0,1)
  getDataRandomGallery.forEach((itemGallery) => {
    let boxGallery = document.createElement('div');
    boxGallery.classList = "box__gallery";
    boxGallery.innerHTML = `<img src="${itemGallery.image}" class="gallery">
                            <div class="desc__galery">
                            <h3>${itemGallery.title}</h3>
                            <button class="detail" type="button">More detailed</div>
                            </div>
    `;

    box__wrapper__gallery__products.appendChild(boxGallery)
  });
  getDataOne.forEach((itemGalleryOne) => {
    let boxOne = document.createElement('div');
    boxOne.classList = "box__One__Gallery";
    boxOne.innerHTML = `<img class="gambar__gallery" src="${itemGalleryOne.image}"/>
                        <div class="desc__galery__one">
                        <h3>${itemGalleryOne.title}</h3>
                        <span class="description">${itemGalleryOne.description}</span>
                        <span class="price__gallery__one">$ ${itemGalleryOne.price}</span>
                        <button class="buying" type="button">Add To Cart</div>
                        </div>
    `
    let row__gallery__products  = document.querySelector('.row__gallery__products');
    row__gallery__products.appendChild(boxOne)
  });
}

function createFuncProducts(data){
  data.forEach((itemProducts) => {
    let boxProduct = document.createElement('div');
    boxProduct.classList = "box__products swiper-slide";
    boxProduct.innerHTML = `<img class="gambarProduct" src="${itemProducts.image}" />
                            <div class="titleProducts">
                            <h3 class="title_products">${itemProducts.title}</h3>
                            <span class="price__products">$ ${itemProducts.price}</span>
                            <div class="ratingProducts">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                            </div>
                            <button class="addCart" type="button">Add to Cart</button>
                            </div>
    `;
    rowProducts.appendChild(boxProduct)
    
  });
}
let row__all__products = document.querySelector('.row__all__products');
function createAllProducts(data){
  let getDataAll = data.slice(0,9);
  getDataAll.forEach((itemAllProducts) => {
    let boxAllProducts = document.createElement('div');
    boxAllProducts.classList = "box__All__Products";
    boxAllProducts.innerHTML = `<img src="${itemAllProducts.image}" />
                                <div class="box__all__products__text">
                                <h3 class="title__all__products">${itemAllProducts.title}</h3>
                                <div class="ratingAllProducts">
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa fa-star"></i>
                                  <i class="fa-solid fa-star-half-stroke"></i>
                                </div>
                                <span class="price__all__products">$ ${itemAllProducts.price}</span>
                                <button class="addCart" type="button">Add to Cart</button>
                                </div>
    `
    row__all__products.appendChild(boxAllProducts);
  })
}

let media  = matchMedia('(max-width: 370px)');
media.addListener(handleScreenDisplay);
function handleScreenDisplay(e){
  console.log(e.matches);
}