// Navigation control

const navClose = document.querySelector(".nav-close");
const navOpen = document.querySelector(".nav-open");
const navigation = document.getElementById("navigation");
const navItems = document.querySelectorAll(".nav-item");

navClose.addEventListener("click", () => {
    navigation.style.left = "-100%";
    navigation.style.borderTopRightRadius = "100%";
    navigation.style.borderBottomRightRadius = "100%";

    for (let i = 0; i < navItems.length; i++) {
        navItems[i].style.paddingLeft = "0";
    }    
});



navOpen.addEventListener("click", () => {
    navigation.style.left = "0";
    navigation.style.borderTopRightRadius = "0";
    navigation.style.borderBottomRightRadius = "0";

    let count = 0;

    for (let i = 0; i < navItems.length; i++) {
        count += 20;
        count = String(count);
        navItems[i].style.paddingLeft = String(count) + "px";
        count = Number(count);
    }
});

/*
 Hero Heading Text Animation Typewriter
*/

const typewriter = document.getElementById("typewriter");
const text = ["Web Developer","Grow your business"];
const speed = 100;
const eraseSpeed = 50;
const delayBetweenText = 1000;
let i = 0;
let j = 0;
let isDeleting = false;

function type() {
    const currentText = text[i];

    if (!isDeleting) {
        typewriter.textContent = currentText.substring(0, j + 1);
        j++;
        if (j === currentText.length) {
            isDeleting = true;
            setTimeout(type, delayBetweenText);
            return;
        }
    } else {
        typewriter.textContent = currentText.substring(0, j - 1);
        j--;
        if (j === 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }
    setTimeout(type, isDeleting ? eraseSpeed : speed);
}

type();

/*
 Show Elements on scroll animation
*/

const allElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver(showElement);

function showElement(entries, observer) {
    entries.forEach(elem => {
        if (elem.isIntersecting) {
            elem.target.classList.add("show");
        } else {
            elem.target.classList.remove("show");
        }
    })
}

allElements.forEach(el => observer.observe(el));