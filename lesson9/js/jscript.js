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

/*towns json fetch*/
const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {
      let town = towns[i]
      let townNames = ["Fish Haven", "Preston", "Soda Springs"]
      if (townNames.includes(town.name)) {

        let section = document.createElement('section');
        section.classList.add('town');
        // info div
        let info = document.createElement('div');
        info.classList.add('info');
        let h2 = document.createElement('h2');
        let motto = document.createElement('h4');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        h2.textContent = town.name;
        motto.textContent =  'Motto: ' + town.motto;
        year.textContent = 'Year Founded: ' + town.yearFounded;
        pop.textContent = 'Current Population: ' + town.currentPopulation;
        rain.textContent = 'Average Rainfall: ' + town.averageRainfall;
        info.appendChild(h2);
        info.appendChild(motto);
        info.appendChild(year);
        info.appendChild(pop);
        info.appendChild(rain);
        // picture div
        let picture = document.createElement('div')
        picture.classList.add('picture');
        let img = document.createElement('img');
        img.setAttribute('src', "images/" + town.photo);
        picture.appendChild(img);
        // append info and picture to section
        section.appendChild(info)
        section.appendChild(picture)

        document.getElementById('towns').appendChild(section);
      }


    }


  })