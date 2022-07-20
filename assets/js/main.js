const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 });
sr.reveal('.home__img', { delay: 400 });
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.about__img', {});
sr.reveal('.compTitre', {});
sr.reveal('.compText', {});
sr.reveal('.about__subtitle', { delay: 400 });
sr.reveal('.about__text', { delay: 400 });
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 });
sr.reveal('.skills__img', { delay: 600 });
sr.reveal('.work__img', { interval: 200 });
sr.reveal('.imglogo', { interval: 400 });
sr.reveal('.imglogo1', {});
sr.reveal('.imglogo2', { delay: 200 });
sr.reveal('.imglogo3', { delay: 500 });








let compteur = 0
let compteur2 = 0
let compteur3 = 0
let compteur4 = 0
let timer, elements, slides, slideWidth, timer2, elements2, slides2, slideWidth2, timer3, elements3, slides3, slideWidth3, timer4, elements4, slides4, slideWidth4

window.onload = () => {

    const diapo = document.querySelector(".diapo")
    const diapo2 = document.querySelector(".diapo2")
    const diapo3 = document.querySelector(".diapo3")
    const diapo4 = document.querySelector(".diapo4")

    elements = document.querySelector(".elements")
    elements2 = document.querySelector(".elements2")
    elements3 = document.querySelector(".elements3")
    elements4 = document.querySelector(".elements4")

    slides = Array.from(elements.children)
    slides2 = Array.from(elements2.children)
    slides3 = Array.from(elements3.children)
    slides4 = Array.from(elements4.children)

    slideWidth = diapo.getBoundingClientRect().width
    slideWidth2 = diapo2.getBoundingClientRect().width
    slideWidth3 = diapo3.getBoundingClientRect().width
    slideWidth4 = diapo4.getBoundingClientRect().width

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")
    let next2 = document.querySelector("#nav-droite2")
    let prev2 = document.querySelector("#nav-gauche2")
    let next3 = document.querySelector("#nav-droite3")
    let prev3 = document.querySelector("#nav-gauche3")
    let next4 = document.querySelector("#nav-droite4")
    let prev4 = document.querySelector("#nav-gauche4")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)
    next2.addEventListener("click", slideNext2)
    prev2.addEventListener("click", slidePrev2)
    next3.addEventListener("click", slideNext3)
    prev3.addEventListener("click", slidePrev3)
    next4.addEventListener("click", slideNext4)
    prev4.addEventListener("click", slidePrev4)

    timer = setInterval(slideNext, 8000)
    timer2 = setInterval(slideNext2, 8000)
    timer3 = setInterval(slideNext3, 8000)
    timer4 = setInterval(slideNext4, 8000)

    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)
    diapo2.addEventListener("mouseover2", stopTimer2)
    diapo2.addEventListener("mouseout2", startTimer2)
    diapo3.addEventListener("mouseover3", stopTimer3)
    diapo3.addEventListener("mouseout3", startTimer3)
    diapo4.addEventListener("mouseout4", startTimer4)
    diapo4.addEventListener("mouseover4", stopTimer4)

    window.addEventListener("resize", () => {
        slideWidth = diapo.getBoundingClientRect().width
        slideNext()
    })

    window.addEventListener("resize2", () => {
        slideWidth2 = diapo.getBoundingClientRect().width2
        slideNext2()
    })

    window.addEventListener("resize3", () => {
        slideWidth3 = diapo.getBoundingClientRect().width3
        slideNext3()
    })
    window.addEventListener("resize4", () => {
        slideWidth4 = diapo.getBoundingClientRect().width4
        slideNext4()
    })
}

function slideNext() {
    compteur++
    if (compteur == slides.length) {
        compteur = 0
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}

function slideNext2() {
    compteur2++
    if (compteur2 == slides2.length) {
        compteur2 = 0
    }
    let decal2 = -slideWidth2 * compteur2
    elements2.style.transform = `translateX(${decal2}px)`
}
function slideNext3() {
    compteur3++
    if (compteur3 == slides3.length) {
        compteur3 = 0
    }
    let decal3 = -slideWidth3 * compteur3
    elements3.style.transform = `translateX(${decal3}px)`
}
function slideNext4() {
    compteur4++
    if (compteur4 == slides4.length) {
        compteur4 = 0
    }
    let decal4 = -slideWidth4 * compteur4
    elements4.style.transform = `translateX(${decal4}px)`
}




function slidePrev() {
    compteur--
    if (compteur < 0) {
        compteur = slides.length - 1
    }
    let decal = -slideWidth * compteur
    elements.style.transform = `translateX(${decal}px)`
}
function slidePrev2() {
    compteur2--
    if (compteur2 < 0) {
        compteur2 = slides2.length - 1
    }
    let decal2 = -slideWidth2 * compteur2
    elements2.style.transform = `translateX(${decal2}px)`
}
function slidePrev3() {
    compteur3--
    if (compteur3 < 0) {
        compteur3 = slides3.length - 1
    }
    let decal3 = -slideWidth3 * compteur3
    elements3.style.transform = `translateX(${decal3}px)`
}
function slidePrev4() {
    compteur4--
    if (compteur4 < 0) {
        compteur4 = slides4.length - 1
    }
    let decal4 = -slideWidth4 * compteur4
    elements4.style.transform = `translateX(${decal4}px)`
}





function stopTimer() {
    clearInterval(timer)
}


function startTimer() {
    timer = setInterval(slideNext, 4000)
}


function stopTimer2() {
    clearInterval(timer2)
}


function startTimer2() {
    timer2 = setInterval(slideNext2, 4000)
}


function stopTimer3() {
    clearInterval(timer3)
}

function startTimer3() {
    timer3 = setInterval(slideNext3, 4000)
}

function stopTimer4() {
    clearInterval(timer4)
}

function startTimer4() {
    timer4 = setInterval(slideNext4, 4000)
}


























