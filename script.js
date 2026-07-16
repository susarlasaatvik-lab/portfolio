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
// ==========================================
// HERO TYPING EFFECT
// ==========================================

const typingElement = document.getElementById("typing");

if (typingElement) {

    const roles = [
        "Python Developer",
        "AWS Cloud Learner",
        "Cloud Computing Enthusiast",
        "AI & Machine Learning Explorer",
        "Full Stack Developer (Learning)",
        "CSE Student"
    ];

    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;


    function typingAnimation() {

        let currentRole = roles[roleIndex];


        if (!deleting) {

            typingElement.textContent =
                currentRole.substring(0, charIndex + 1);

            charIndex++;


            if (charIndex === currentRole.length) {

                deleting = true;

                setTimeout(typingAnimation, 1500);

                return;
            }

        } else {


            typingElement.textContent =
                currentRole.substring(0, charIndex - 1);

            charIndex--;


            if (charIndex === 0) {

                deleting = false;

                roleIndex++;

                if (roleIndex === roles.length) {
                    roleIndex = 0;
                }

            }

        }


        setTimeout(typingAnimation, deleting ? 50 : 100);

    }


    typingAnimation();

}
// HERO TYPING EFFECT

const typing = document.getElementById("typing");

const roles = [
    "Python Developer",
    "AWS Cloud Learner",
    "AI Enthusiast",
    "Software Developer"
];

let role = 0;
let letter = 0;

function typingEffect(){

    if(letter < roles[role].length){

        typing.innerHTML += roles[role].charAt(letter);
        letter++;

        setTimeout(typingEffect,100);

    }
    else{

        setTimeout(deleteEffect,1500);

    }

}


function deleteEffect(){

    if(letter > 0){

        typing.innerHTML =
        roles[role].substring(0,letter-1);

        letter--;

        setTimeout(deleteEffect,50);

    }
    else{

        role++;

        if(role >= roles.length){
            role = 0;
        }

        setTimeout(typingEffect,500);

    }

}


typingEffect();
// ==========================================
// NEW HERO TYPING EFFECT (SAFE VERSION)
// ==========================================

window.addEventListener("load", function () {

    const typingBox = document.getElementById("typing");

    if (!typingBox) return;


    const textList = [
        "Python Developer",
        "AWS Cloud Learner",
        "AI Enthusiast",
        "Cloud Computing Explorer",
        "Software Developer"
    ];


    let textIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;


    function runTyping() {

        let currentText = textList[textIndex];


        if (!isDeleting) {

            typingBox.innerHTML =
                currentText.substring(0, letterIndex + 1);

            letterIndex++;


            if (letterIndex === currentText.length) {

                isDeleting = true;

                setTimeout(runTyping, 1500);

                return;
            }


        } else {


            typingBox.innerHTML =
                currentText.substring(0, letterIndex - 1);

            letterIndex--;


            if (letterIndex === 0) {

                isDeleting = false;

                textIndex++;

                if (textIndex >= textList.length) {
                    textIndex = 0;
                }

            }

        }


        setTimeout(
            runTyping,
            isDeleting ? 60 : 100
        );

    }


    // Start only if empty
    if (typingBox.innerHTML.trim() === "") {
        runTyping();
    }

});