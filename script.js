//HEADER
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "close_white_36dp.svg";
    }
}

// DARK MODE
const chk = document.getElementById('chk');
const logo = document.getElementById('logo');
const iconImg1 = document.querySelectorAll('.iconimg1');
const iconImg2 = document.querySelectorAll('.iconimg2');
const iconImg3 = document.querySelectorAll('.iconimg3');
const iconImg4 = document.querySelectorAll('.iconimg4');
const ideialogo = document.querySelectorAll('.ideialogo');

const imgClaro = "img/Gbranco.png";
const imgEscuro = "img/Gpreto.png";
const iconImgClaro1 = "img/servicos-img/desenvolvimento-de-sites-branco.png";
const iconImgEscuro1 = "img/servicos-img/desenvolvimento-de-sites-preto.png";
const iconImgClaro2 = "img/servicos-img/design-grafico-branco.png";
const iconImgEscuro2 = "img/servicos-img/design-grafico-preto.png";
const iconImgClaro3 = "img/servicos-img/fotografia-branco.png";
const iconImgEscuro3 = "img/servicos-img/fotografia-preto.png";
const iconImgClaro4 = "img/servicos-img/edicao-de-video-branco.png";
const iconImgEscuro4 = "img/servicos-img/edicao-de-video-preto.png";
const ideiaPreto = "img/ideiapreto.png";
const ideiaBranco = "img/ideiabranco.png";



chk.addEventListener('change', () => {
  if (document.body.classList.contains('dark')) {
    logo.src = imgEscuro;
    iconImg1.forEach(img => img.src = iconImgEscuro1);
    iconImg2.forEach(img => img.src = iconImgEscuro2);
    iconImg3.forEach(img => img.src = iconImgEscuro3);
    iconImg4.forEach(img => img.src = iconImgEscuro4);
    ideialogo.forEach(img => img.src = ideiaPreto);
  } else {
    logo.src = imgClaro;
    iconImg1.forEach(img => img.src = iconImgClaro1);
    iconImg2.forEach(img => img.src = iconImgClaro2);
    iconImg3.forEach(img => img.src = iconImgClaro3);
    iconImg4.forEach(img => img.src = iconImgClaro4);
    ideialogo.forEach(img => img.src = ideiaBranco);
  }
  document.body.classList.toggle('dark');
})

// LINKS SOCIAIS
const share = document.querySelector('.share');

setTimeout(() => {
  share.classList.add("hover");
}, 1000);

setTimeout(() => {
  share.classList.remove("hover");
}, 3000);


//PROJETOS
var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  const btnMobile = document.getElementById('btn-mobile');


// MENU RESPONSIVO
function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefault();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', active);
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);


var copy = document.querySelector(".logos-slide").cloneNode(true);
      document.querySelector(".logos").appendChild(copy);