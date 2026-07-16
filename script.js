/*==================================================
            STICKY NAVBAR
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(11,11,15,.95)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.35)";
        header.style.backdropFilter = "blur(20px)";

    } else {

        header.style.background = "rgba(11,11,15,.75)";
        header.style.boxShadow = "none";

    }

});


/*==================================================
            SMOOTH SCROLL
==================================================*/

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});


/*==================================================
        SCROLL TO TOP BUTTON
==================================================*/

const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        scrollTopBtn.style.opacity = "1";
        scrollTopBtn.style.pointerEvents = "auto";
        scrollTopBtn.style.transform = "translateY(0)";

    } else {

        scrollTopBtn.style.opacity = "0";
        scrollTopBtn.style.pointerEvents = "none";
        scrollTopBtn.style.transform = "translateY(30px)";

    }

});


/*==================================================
        ACTIVE NAVIGATION LINK
==================================================*/

const sections = document.querySelectorAll("section");
const menuLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    menuLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
/*==================================================
            SCROLL REVEAL ANIMATION
==================================================*/

const revealElements = document.querySelectorAll(
".about-card, .skill-box, .project-card, .certificate-card, .contact-card, .stat-card"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.style.opacity = "1";
            element.style.transform = "translateY(0)";

        }

    });

};

revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(60px)";
    element.style.transition = "all .8s ease";

});

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();



/*==================================================
            FLOATING CARDS
==================================================*/

const floatingCards = document.querySelectorAll(".floating-card");

floatingCards.forEach((card, index) => {

    setInterval(() => {

        card.style.transform =
        `translateY(${Math.sin(Date.now()/600 + index)*10}px)`;

    },20);

});



/*==================================================
        PROJECT IMAGE PARALLAX
==================================================*/

const projectImages = document.querySelectorAll(".project-image");

projectImages.forEach(image => {

    image.addEventListener("mousemove",(e)=>{

        const rect = image.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x/rect.width-.5)*8;
        const rotateX = (.5-y/rect.height)*8;

        image.style.transform=
        `perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)`;

    });

    image.addEventListener("mouseleave",()=>{

        image.style.transform="rotateX(0) rotateY(0)";

    });

});



/*==================================================
        PROFILE IMAGE PARALLAX
==================================================*/

const profile = document.querySelector(".profile-wrapper");

document.addEventListener("mousemove",(e)=>{

    if(!profile) return;

    const x = (window.innerWidth/2-e.clientX)/45;
    const y = (window.innerHeight/2-e.clientY)/45;

    profile.style.transform=
    `translate(${x}px,${y}px)`;

});



/*==================================================
        BUTTON RIPPLE EFFECT
==================================================*/

const buttons = document.querySelectorAll(
".btn-primary,.btn-secondary,.btn-project"
);

buttons.forEach(button=>{

    button.addEventListener("click",function(e){

        const ripple=document.createElement("span");

        ripple.classList.add("ripple");

        const rect=this.getBoundingClientRect();

        ripple.style.left=e.clientX-rect.left+"px";
        ripple.style.top=e.clientY-rect.top+"px";

        this.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },600);

    });

});
/*==================================================
                LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        },500);

    }

});


/*==================================================
            TYPING EFFECT
==================================================*/

const typingText = document.querySelector(".hero h2");

const words = [

    "Software Developer",
    "AWS Learner",
    "AI Enthusiast",
    "Python Developer"

];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    if(!typingText) return;

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex++);

        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }else{

        typingText.textContent =
        currentWord.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex = (wordIndex+1)%words.length;

        }

    }

    setTimeout(typeEffect,deleting?50:100);

}

typeEffect();



/*==================================================
            ANIMATED COUNTERS
==================================================*/

const counters = document.querySelectorAll(".stat-card h2");

function animateCounter(counter){

    const target = parseInt(counter.textContent);

    if(isNaN(target)) return;

    let current = 0;

    const increment = target/60;

    const update = ()=>{

        current += increment;

        if(current >= target){

            counter.textContent = target + "+";

        }else{

            counter.textContent =
            Math.floor(current);

            requestAnimationFrame(update);

        }

    }

    update();

}

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            animateCounter(

                entry.target.querySelector("h2")

            );

            observer.unobserve(entry.target);

        }

    });

});

document.querySelectorAll(".stat-card")
.forEach(card=>observer.observe(card));



/*==================================================
            CURSOR SPOTLIGHT
==================================================*/

const spotlight = document.createElement("div");

spotlight.className = "spotlight";

document.body.appendChild(spotlight);

document.addEventListener("mousemove",(e)=>{

    spotlight.style.left = e.clientX+"px";

    spotlight.style.top = e.clientY+"px";

});
// Scroll To Top Button

const scrollBtn = document.querySelector(".scroll-top");


window.addEventListener("scroll",()=>{

    if(window.scrollY > 400){

        scrollBtn.style.display="flex";

    }

    else{

        scrollBtn.style.display="none";

    }

});


scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});
const header = document.querySelector("header");


window.addEventListener("scroll",()=>{


    if(window.scrollY > 50){

        header.style.background =
        "rgba(10,10,10,0.95)";

    }

    else{

        header.style.background =
        "rgba(10,10,10,0.75)";

    }


});
const words=[

"Computer Science Student",

"AI Enthusiast",

"AWS Cloud Learner",

"Software Developer"

];


let index=0;

let charIndex=0;

let currentWord="";


function type(){


    currentWord=words[index];


    document.getElementById("typing").textContent =
    currentWord.substring(0,charIndex++);


    if(charIndex <= currentWord.length){

        setTimeout(type,100);

    }

    else{

        setTimeout(erase,1500);

    }


}



function erase(){


    document.getElementById("typing").textContent =
    currentWord.substring(0,charIndex--);


    if(charIndex>=0){

        setTimeout(erase,50);

    }

    else{

        index=(index+1)%words.length;

        charIndex=0;

        setTimeout(type,500);

    }


}


type();
const cards =
document.querySelectorAll(".project-card");


cards.forEach(card=>{


card.addEventListener("mouseenter",()=>{


    card.style.transform =
    "translateY(-15px) scale(1.03)";


});


card.addEventListener("mouseleave",()=>{


    card.style.transform =
    "translateY(0) scale(1)";


});


});
const sections =
document.querySelectorAll("section");


const observer =
new IntersectionObserver(entries=>{


entries.forEach(entry=>{


if(entry.isIntersecting){


entry.target.style.opacity=1;

entry.target.style.transform="translateY(0)";


}


});


});


sections.forEach(section=>{


section.style.opacity=0;

section.style.transform=
"translateY(50px)";


section.style.transition=
"0.8s ease";


observer.observe(section);


});
document.addEventListener("mousemove",(e)=>{


document.body.style.setProperty(

"--mouse-x",

e.clientX+"px"

);


document.body.style.setProperty(

"--mouse-y",

e.clientY+"px"

);


});
document.getElementById("year").textContent = new Date().getFullYear();