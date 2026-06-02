const reviewCountOutput = document.querySelector("#review-count");
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

reviewCount += 1;

localStorage.setItem("reviewCount", reviewCount);

reviewCountOutput.textContent = reviewCount;
currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;