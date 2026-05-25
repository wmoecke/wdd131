const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Campinas Brazil",
    location: "Campinas, Brazil",
    dedicated: "2002, May, 17",
    area: 48100,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 59246,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
  {
    templeName: "Brasília Brazil",
    location: "Brasília, Brazil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  }
];

const album = document.querySelector(".album");
const pageTitle = document.querySelector("main h1");
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

function getDedicatedYear(temple) {
  return Number(temple.dedicated.split(",")[0]);
}

function createTempleCard(temple) {
  const card = document.createElement("section");
  const name = document.createElement("h2");
  const location = document.createElement("p");
  const dedicated = document.createElement("p");
  const area = document.createElement("p");
  const image = document.createElement("img");

  card.classList.add("temple-card");

  name.textContent = temple.templeName;

  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
  dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
  area.innerHTML = `<span class="label">Size:</span> ${temple.area.toLocaleString()} sq ft`;

  image.setAttribute("src", temple.imageUrl);
  image.setAttribute("alt", `${temple.templeName} Temple`);
  image.setAttribute("loading", "lazy");
  image.setAttribute("width", "400");
  image.setAttribute("height", "250");

  card.appendChild(name);
  card.appendChild(location);
  card.appendChild(dedicated);
  card.appendChild(area);
  card.appendChild(image);

  album.appendChild(card);
}

function displayTemples(filteredTemples) {
  album.innerHTML = "";
  filteredTemples.forEach(createTempleCard);
}

function setActiveLink(activeLink) {
  navLinks.forEach((link) => link.classList.remove("active"));
  activeLink.classList.add("active");
}

function filterTemples(filter) {
  switch (filter) {
    case "old":
      pageTitle.textContent = "Old Temples";
      displayTemples(temples.filter((temple) => getDedicatedYear(temple) < 1900));
      break;

    case "new":
      pageTitle.textContent = "New Temples";
      displayTemples(temples.filter((temple) => getDedicatedYear(temple) > 2000));
      break;

    case "large":
      pageTitle.textContent = "Large Temples";
      displayTemples(temples.filter((temple) => temple.area > 90000));
      break;

    case "small":
      pageTitle.textContent = "Small Temples";
      displayTemples(temples.filter((temple) => temple.area < 10000));
      break;

    default:
      pageTitle.textContent = "Home";
      displayTemples(temples);
      break;
  }
}

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const filter = event.target.id;

    setActiveLink(event.target);
    filterTemples(filter);

    navigation.classList.remove("open");
    menuButton.classList.remove("open");
  });
});

displayTemples(temples);
document.querySelector("#home").classList.add("active");