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
let compteur5 = 0
let compteur6 = 0
let compteur7 = 0
let timer, elements, slides, slideWidth;
let timer2, elements2, slides2, slideWidth2;
let timer3, elements3, slides3, slideWidth3;
let timer4, elements4, slides4, slideWidth4;
let timer5, elements5, slides5, slideWidth5;
let timer6, elements6, slides6, slideWidth6;
let timer7, elements7, slides7, slideWidth7;

window.onload = () => {

    const diapo = document.querySelector(".diapo")
    const diapo2 = document.querySelector(".diapo2")
    const diapo3 = document.querySelector(".diapo3")
    const diapo4 = document.querySelector(".diapo4")
    const diapo5 = document.querySelector(".diapo5")
    const diapo6 = document.querySelector(".diapo6")
    const diapo7 = document.querySelector(".diapo7")

    elements = document.querySelector(".elements")
    elements2 = document.querySelector(".elements2")
    elements3 = document.querySelector(".elements3")
    elements4 = document.querySelector(".elements4")
    elements5 = document.querySelector(".elements5")
    elements6 = document.querySelector(".elements6")
    elements7 = document.querySelector(".elements7")

    slides = Array.from(elements.children)
    slides2 = Array.from(elements2.children)
    slides3 = Array.from(elements3.children)
    slides4 = Array.from(elements4.children)
    slides5 = Array.from(elements5.children)
    slides6 = Array.from(elements6.children)
    slides7 = Array.from(elements7.children)

    slideWidth = diapo.getBoundingClientRect().width
    slideWidth2 = diapo2.getBoundingClientRect().width
    slideWidth3 = diapo3.getBoundingClientRect().width
    slideWidth4 = diapo4.getBoundingClientRect().width
    slideWidth5 = diapo5.getBoundingClientRect().width
    slideWidth6 = diapo6.getBoundingClientRect().width
    slideWidth7 = diapo7.getBoundingClientRect().width

    let next = document.querySelector("#nav-droite")
    let prev = document.querySelector("#nav-gauche")
    let next2 = document.querySelector("#nav-droite2")
    let prev2 = document.querySelector("#nav-gauche2")
    let next3 = document.querySelector("#nav-droite3")
    let prev3 = document.querySelector("#nav-gauche3")
    let next4 = document.querySelector("#nav-droite4")
    let prev4 = document.querySelector("#nav-gauche4")
    let next5 = document.querySelector("#nav-droite5")
    let prev5 = document.querySelector("#nav-gauche5")
    let next6 = document.querySelector("#nav-droite6")
    let prev6 = document.querySelector("#nav-gauche6")
    let next7 = document.querySelector("#nav-droite7")
    let prev7 = document.querySelector("#nav-gauche7")

    next.addEventListener("click", slideNext)
    prev.addEventListener("click", slidePrev)
    next2.addEventListener("click", slideNext2)
    prev2.addEventListener("click", slidePrev2)
    next3.addEventListener("click", slideNext3)
    prev3.addEventListener("click", slidePrev3)
    next4.addEventListener("click", slideNext4)
    prev4.addEventListener("click", slidePrev4)
    next5.addEventListener("click", slideNext5)
    prev5.addEventListener("click", slidePrev5)
    next6.addEventListener("click", slideNext6)
    prev6.addEventListener("click", slidePrev6)
    next7.addEventListener("click", slideNext7)
    prev7.addEventListener("click", slidePrev7)

    timer = setInterval(slideNext, 8000)
    timer2 = setInterval(slideNext2, 8000)
    timer3 = setInterval(slideNext3, 8000)
    timer4 = setInterval(slideNext4, 8000)
    timer5 = setInterval(slideNext5, 8000)
    timer6 = setInterval(slideNext6, 8000)
    timer7 = setInterval(slideNext7, 8000)

    diapo.addEventListener("mouseover", stopTimer)
    diapo.addEventListener("mouseout", startTimer)
    diapo2.addEventListener("mouseover2", stopTimer2)
    diapo2.addEventListener("mouseout2", startTimer2)
    diapo3.addEventListener("mouseover3", stopTimer3)
    diapo3.addEventListener("mouseout3", startTimer3)
    diapo4.addEventListener("mouseout4", startTimer4)
    diapo4.addEventListener("mouseover4", stopTimer4)
    diapo5.addEventListener("mouseout5", startTimer5)
    diapo5.addEventListener("mouseover5", stopTimer5)
    diapo6.addEventListener("mouseout6", startTimer6)
    diapo6.addEventListener("mouseover6", stopTimer6)
    diapo7.addEventListener("mouseout7", startTimer7)
    diapo7.addEventListener("mouseover7", stopTimer7)






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
    window.addEventListener("resize5", () => {
        slideWidth5 = diapo.getBoundingClientRect().width5
        slideNext5()
    })
    window.addEventListener("resize6", () => {
        slideWidth6 = diapo.getBoundingClientRect().width6
        slideNext6()
    })
    window.addEventListener("resize7", () => {
        slideWidth7 = diapo.getBoundingClientRect().width7
        slideNext7()
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

function slideNext5() {
    compteur5++
    if (compteur5 == slides5.length) {
        compteur5 = 0
    }
    let decal5 = -slideWidth5 * compteur5
    elements5.style.transform = `translateX(${decal5}px)`
}

function slideNext6() {
    compteur6++
    if (compteur6 == slides6.length) {
        compteur6 = 0
    }
    let decal6 = -slideWidth6 * compteur6
    elements6.style.transform = `translateX(${decal6}px)`
}

function slideNext7() {
    compteur7++
    if (compteur7 == slides7.length) {
        compteur7 = 0
    }
    let decal7 = -slideWidth7 * compteur7
    elements7.style.transform = `translateX(${decal7}px)`
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
function slidePrev5() {
    compteur5--
    if (compteur5 < 0) {
        compteur5 = slides5.length - 1
    }
    let decal5 = -slideWidth5 * compteur5
    elements5.style.transform = `translateX(${decal5}px)`
}
function slidePrev6() {
    compteur6--
    if (compteur6 < 0) {
        compteur6 = slides6.length - 1
    }
    let decal6 = -slideWidth6 * compteur6
    elements6.style.transform = `translateX(${decal6}px)`
}
function slidePrev7() {
    compteur7--
    if (compteur7 < 0) {
        compteur7 = slides7.length - 1
    }
    let decal7 = -slideWidth7 * compteur7
    elements7.style.transform = `translateX(${decal7}px)`
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
function stopTimer5() {
    clearInterval(timer5)
}

function startTimer5() {
    timer5 = setInterval(slideNext5, 4000)
}
function stopTimer6() {
    clearInterval(timer6)
}

function startTimer6() {
    timer6 = setInterval(slideNext6, 4000)
}
function stopTimer7() {
    clearInterval(timer7)
}

function startTimer7() {
    timer7 = setInterval(slideNext7, 4000)
}


























