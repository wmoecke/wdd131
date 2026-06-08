import { games, genres } from "./games-data.js";

const filterSelect = document.querySelector("#genre-filter");
const gamesContainer = document.querySelector("#games-container");
const favoritesCount = document.querySelector("#favorites-count");
const storageKey = "pspVaultFavorites";

function loadFavorites() {
    return JSON.parse(localStorage.getItem(storageKey)) ?? [];
}

function saveFavorites(favorites) {
    localStorage.setItem(storageKey, JSON.stringify(favorites));
}

function isFavorite(title) {
    return loadFavorites().includes(title);
}

function createGameCard(game) {
    const favorite = isFavorite(game.title);
    const favoriteLabel = favorite ? "Remove from favorites" : "Add to favorites";

    return `
        <article class="game-card">
            <div class="game-card-header">
                <h3>${game.title}</h3>
                <span class="genre-badge">${game.genre}</span>
            </div>
            <div class="game-card-body">
                <p>${game.description}</p>
                <p class="game-meta">
                    Estimated size: ${game.sizeMb} MB<br>
                    Learning curve: ${game.difficulty}
                </p>
            </div>
            <button
                class="favorite-button secondary-button"
                type="button"
                data-title="${game.title}"
                aria-pressed="${favorite}"
            >
                ${favoriteLabel}
            </button>
        </article>
    `;
}

function updateFavoritesCount() {
    const total = loadFavorites().length;
    favoritesCount.textContent = `${total} favorite${total === 1 ? "" : "s"} saved`;
}

function renderGames(selectedGenre = "All") {
    const filteredGames = selectedGenre === "All"
        ? games
        : games.filter((game) => game.genre === selectedGenre);

    gamesContainer.innerHTML = filteredGames.map(createGameCard).join("");

    gamesContainer.querySelectorAll(".favorite-button").forEach((button) => {
        button.addEventListener("click", () => {
            toggleFavorite(button.dataset.title);
            renderGames(filterSelect.value);
        });
    });

    updateFavoritesCount();
}

function toggleFavorite(title) {
    const favorites = loadFavorites();
    const updatedFavorites = favorites.includes(title)
        ? favorites.filter((favoriteTitle) => favoriteTitle !== title)
        : [...favorites, title];

    saveFavorites(updatedFavorites);
}

function populateGenreFilter() {
    filterSelect.innerHTML = `
        <option value="All">All genres</option>
        ${genres.map((genre) => `<option value="${genre}">${genre}</option>`).join("")}
    `;
}

populateGenreFilter();
renderGames();

filterSelect.addEventListener("change", (event) => {
    renderGames(event.target.value);
});
