/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal'),
    modalBtns = document.querySelectorAll('.services__button'),
    modalClose = document.querySelectorAll('.services__modal-close');
let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((mb, i) => {
    mb.addEventListener('click', () => {
        modal(i)
    })
})

modalClose.forEach((mc) =>{
    mc.addEventListener('click', () =>{
        modalViews.forEach((mv) =>{
            mv.classList.remove('active-modal')
        })
    })
})

/*=============== MODAL ===============*/
const ModalView = document.getElementById('modal'),
    ModalBtns = document.querySelectorAll('.button-modal'),
    ModalClose = document.querySelectorAll('.modal-close');
function Modal() {
    ModalView.classList.add('active-modal')
}

ModalBtns.forEach(mb => mb.addEventListener('click', Modal))

ModalClose.forEach(mc => mc.addEventListener('click', () =>{
    ModalView.classList.remove('active-modal')
}))

// /*=============== MIXITUP FILTER PORTFOLIO ===============*/
// let mixer = mixitup('.work__container', {
//     selectors: {
//         target: '.work__card'
//     },
//     animation: {
//         duration: 300
//     }
// });

// /* Link active work */ 
// const linkWork = document.querySelectorAll('.work__item');

// function activeWork(){
//     linkWork.forEach(L=> L.classList.remove('active-work'))
//     this.classList.add('active-work')
// }

// linkWork.forEach(L=> L.addEventListener('click', activeWork))


// /*=============== SWIPER TESTIMONIAL ===============*/
// var swiperTestimonial = new Swiper(".testimonial__container", {
//     spaceBetween: 24,
//     loop: true,
//     grabCursor: true,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     breakpoints: {
//         576: {
//             slidesPerView: 2,
//         },
//         768: {
//             slidesPerView: 2,
//             spaceBetween: 48,
//         },
//     },
// });

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58
            sectionId = current.getAttribute('id')

            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            } else {
                document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal('.home__data')
sr.reveal('.home__handle', {delay: 700})
sr.reveal('.home__social', '.home__scroll', {delay: 900, origin: 'bottom'})

/*=============== MESSAGE DISCORD WEBHOOK ===============*/
function sendMessage() {
    var request = new XMLHttpRequest();
    var name = document.getElementById("name").value;
    var mail = document.getElementById("mail").value;
    var content = document.getElementById("content").value;

    if (mail !== "" && content !== "") {
        document.getElementById("name").value = "";
        document.getElementById("mail").value = "";
        document.getElementById("content").value = "";

        request.open(
            "POST",
            "https://discord.com/api/webhooks/996365064397393991/WXS49cVMDYalhbNVSTfpLcTwCSJ5fUAMfkf101A8h27GiKC8mv8fhz6d52HGxN-8ESYF"
        );

        request.setRequestHeader("Content-type", "application/json");

        var params = {
            content:
                "__**MESSAGE SITE WEB :**__\n**Discord ID / NameTag:**\n" +
                name +
                "\n\n**Mail:**\n" +
                mail +
                "\n\n**Content:**\n" +
                content //test it now, i removed the value in this line it should work| Thanks
        };

        request.send(JSON.stringify(params));
        document.getElementById("notice2").innerHTML =
            "Message sent! / Message envoyé!";
        document.getElementById("notice").innerHTML = "";
        event.preventDefault();
    } else {
        event.preventDefault();
        document.getElementById("notice2").innerHTML = "";
        document.getElementById("notice").innerHTML =
            "Missing Information / Informations manquantes";//change this to whatever you want to use
    }
  }