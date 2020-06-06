// Sets current date in the footer
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};
document.getElementById('date').textContent = new Date().toLocaleDateString('en-US', options);

//Google web fonts
WebFont.load({
    google: {
        families: [
            'Roboto Condensed', '', ''
        ]
    }
});

//Hamburger Menu for Nav
const hambutton = document.querySelector('.burger');
const mainnav = document.querySelector('.navigation')
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('responsive')
}, false);

//Progressive Loading for Images
const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 0,
    rootMarging: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {
        image.removeAttribute('data-src');
    };
};

if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, observer) => {
        items.forEach((item) => {
            if (item.isIntersecting) {
                loadImages(item.target);
                observer.unobserve(item.target);
            }
        });
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
} else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

//Pancakes in the Park
var d = new Date();
const banner = document.getElementById("pancakes");
if (d.getDay() == 5) {
    banner.style.display = "block";
} else {
    banner.style.display = "none";
}