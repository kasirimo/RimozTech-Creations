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
})

/*
console.log(navItems);
let count = 0;

for (let i = 0; i < navItems.length; i++) {
    count += 20;
    count = String(count);
    navItems[i].style.paddingLeft = String(count) + "px";
    count = Number(count);
}

console.log(count);
*/