import { games } from "./games-data.js";

const featuredContainer = document.querySelector("#featured-games");

function createFeaturedCard(game) {
    return `
        <article class="info-card">
            <h3>${game.title}</h3>
            <p><strong>${game.genre}</strong> · Estimated size: ${game.sizeMb} MB</p>
            <p>${game.description}</p>
        </article>
    `;
}

function renderFeaturedGames() {
    if (!featuredContainer) {
        return;
    }

    const featuredTitles = ["Tekken 6", "Burnout Legends", "Metal Gear Solid: Peace Walker"];
    const featuredGames = games.filter((game) => featuredTitles.includes(game.title));
    featuredContainer.innerHTML = featuredGames.map(createFeaturedCard).join("");
}

renderFeaturedGames();
