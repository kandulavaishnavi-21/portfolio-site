// Scroll Animation

const sections = document.querySelectorAll(
    ".section, .education-card, .project-card, .skill-card"
);

sections.forEach((element)=>{
    element.classList.add("hidden");
});

const observer = new IntersectionObserver(
    (entries)=>{
        entries.forEach((entry)=>{

            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }

        });
    },
    {
        threshold:0.2
    }
);

sections.forEach((element)=>{
    observer.observe(element);
});


// Active Navbar Link

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

    link.addEventListener("click", function(){

        navLinks.forEach(item =>
            item.classList.remove("active")
        );

        this.classList.add("active");

    });

});


// Navbar Shadow on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){
        navbar.style.boxShadow =
        "0 5px 20px rgba(0,0,0,0.3)";
    }
    else{
        navbar.style.boxShadow = "none";
    }

});


// Typing Effect

const text = "AI & ML Student | Tech Explorer";
const typingElement = document.querySelector(".hero h3");

let index = 0;

typingElement.innerHTML = "";

function typeText(){

    if(index < text.length){

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeText, 100);

    }
}

typeText();