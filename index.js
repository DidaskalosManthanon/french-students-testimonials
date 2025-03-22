const testimonials = [
    {
        name: "Abdellah",
        photo: "./pics/abdellah.avif",
        text: `<strong>Parfait !</strong> Laurent cerne très bien le besoin exprimé et va au-delà de l'information pure en donnant des ressources très enrichissant pour monter en compétence et avoir un vocabulaire riche.`
    },
    {
        name: "Anne",
        photo: "./pics/anne.vif",
        text: `Laurent has tutored me in French Conversation. I greatly enjoy the lessons; there's no doubt that my conversational French has improved and I've had a lot of fun exploring the linguistics of European languages. I can certainly recomment Laurent as a French Tutor.`
    },
    {
        name: "Carlos",
        photo: "./pics/carlos.webp",
        text:  `<strong>Parfait !</strong> Méthode de pédagogie au top !`
    },
    {
        name: "Ceylan",
        photo: "./pics/ceylan.webp",
        text:  `<strong>Parfait !</strong> Laurent a une approche dynamique. Il propose des moyens rapides et amusants pour résoudre vos problèmes.`
    },
    {
        name: "Chrysa",
        photo: "./pics/chrysa.avif",
        text:  `Excellent teacher`
    },
    {
        name: "Kara",
        photo: "./pics/kara.avif",
        text:  `<strong>Parfait !</strong> Very detailed and interesting to learn from.`
    },
    {
        name: "Michael",
        photo: "./pics/michael.webp",
        text:  `<strong>Parfait !</strong> It was a great first lesson, im looking forward to future improvements!`
    },    
    {
        name: "Renee",
        photo: "./pics/renee.avif",
        text:  `<strong>Parfait !</strong> Organized, methodical, patient`
    },
    {
        name: "Valeriane",
        photo: "./pics/valeriane.avif",
        text: `<strong>Parfait !</strong> Parfait`
    },
]


const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial();

function updateTestimonial() {
    const { name, photo, text } = testimonials[idx];
    imgEl.src = photo;
    textEl.innerHTML = text;
    usernameEl.innerText = name;
    idx++;
    if (idx === testimonials.length) idx = 0;
    setTimeout(() => {
        updateTestimonial();
    }, 10000);
}